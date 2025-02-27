import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doFetchClientProjectLinkInTypeUpdate, doFetchCrewDetail, doFetchCrewProjectList } from "../../actions";
import { AISelect } from "../../components/AISelect";
import { toast } from "react-toastify";

export const useCrewProjectListHook = () => {
  // doFetchManagementDetail
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [crewData, setCrewData] = useState({});
  const [crewStatusData, setCrewStatusData] = useState({});
  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] = useState(false);

  const doGetCrewList = async () => {
    const crewResponse = await doFetchCrewProjectList(id);
    if (crewResponse?.status == 200) {
      setCrewData(crewResponse?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetCrewList();
  }, [id]);
  const crewHandledList = () => {
    navigate(`/crew-handled-management-list/${id}`);
  };

  const handleSelectChange = (name, value, projectId) => {
    setCrewStatusData({ [name]: value, projectId })
    showApproveRejectedModal()
  };

  const statusOptions = [
    {
      key: 1,
      label: "Pending Approval",
      value: "pending",
    },
    {
      key: 4,
      label: "Accept",
      value: "accept",
    },
    {
      key: 5,
      label: "Reject",
      value: "reject",
    },
    {
      key: 2,
      label: "Completed",
      value: "completed",
    },
    // {
    //   key: 3,
    //   label: "In process",
    //   value: "in-process",
    // },
  ];

  const crewProjectsHandledColumns = useMemo(() => {
    return [
      {
        title: "Project name",
        dataIndex: "projectName",
        key: "projectName",
      },
      {
        title: "Client name",
        dataIndex: "clientName",
        key: "clientName",
        render: (_, record) => record?.createdBy[0]?.username || "-",
      },
      {
        title: "Crew name",
        dataIndex: "crewName",
        key: "crewName",
        render: (_, record) =>
          record?.linkin?.management?.linkinId?.company_name || "-",
      },
      {
        title: "Take up date",
        dataIndex: "takeUpDate",
        key: "takeUpDate",
        render: (_, record) =>
          record?.linkin?.crew?.createdAt
            ? moment(record?.linkin?.crew?.createdAt).format(`YYYY-MM-DD hh:mm`)
            : "-",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        // render: (_, record) => record?.linkin?.crew?.linkinId?.status || "-",
        render: (_, record) => (
          <AISelect
            label={""}
            options={statusOptions}
            placeholder="Select Status"
            isDiffrentSelect
            //   isOpen
            name={"status"}
            defaultValue={record?.linkin?.crew?.linkinId?.status}
            // value={record?.linkin?.crew?.linkinId?.status}
            onChange={(value) =>
              handleSelectChange("status", value, record?._id)
            }
            isFlipInput={true}
          />
        ),
      },
      {
        title: "Finished date",
        dataIndex: "finishedDate",
        key: "finishedDate",
        render: (_, record) => record?.date || "-",
      },
    ];
  }, [crewData]);

  const handleUserProjectStatusUpdate = async () => {
    if (crewStatusData?.projectId) {
      const formData = new FormData();
      formData.append("type", "crew");

      formData.append("status", crewStatusData?.status);
      const clientProjectResponse = await doFetchClientProjectLinkInTypeUpdate(
        crewStatusData?.projectId,
        formData
      );

      if (clientProjectResponse?.status == 200) {
        setIsLoading(false);
        doGetCrewList()
        toast.success("Crew project status update success!");
        approveRejectedModalCancel()
      } else {
        // toast.error("")

        setIsLoading(false);
      }
    }
  }


  // confirm modal js start
  const showApproveRejectedModal = () => {

    setIsApproveRejectedModalOpen(true);
  };

  const approveRejectedModalCancel = () => {
    setIsApproveRejectedModalOpen(false);
  };

  return {
    isLoading,
    id,
    crewData,
    crewHandledList,
    crewProjectsHandledColumns,
    isApproveRejectedModalOpen,
    crewStatusData,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserProjectStatusUpdate
  };
};
