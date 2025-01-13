import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { doFetchClientProjectLinkInTypeUpdate, doFetchManagementProjectList, doFetchManagementStatusServiceUpdate } from "../../actions";
import { AISelect } from "../../components/AISelect";
import { toast } from "react-toastify";

export const useManagementProjectListHook = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [managementData, setManagementData] = useState({});
  // confirm modal js start
  const [managementStatusData, setManagementStatusData] = useState({});
  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] = useState(false);
  // confirm modal js end

  const doGetManagementDetail = async () => {
    const managementResponse = await doFetchManagementProjectList(id);
    if (managementResponse?.status == 200) {
      setManagementData(managementResponse?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetManagementDetail();
  }, [id]);

  const handleSelectChange = (name, value, projectId) => {
    setManagementStatusData({ [name]: value, projectId })
    showApproveRejectedModal()
  };

  const statusOptions = [
    {
      key: 1,
      label: "Pending Approval",
      value: "pending",
    },
    {
      key: 2,
      label: "Completed",
      value: "completed",
    },
    {
      key: 3,
      label: "In process",
      value: "in-process",
    },
  ];

  const managementProjectsHandledColumns = useMemo(() => {
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
          record?.linkin?.crew?.linkinId?.company_name || "-",
      },
      {
        title: "Take up date",
        dataIndex: "takeUpDate",
        key: "takeUpDate",
        render: (_, record) =>
          record?.linkin?.management?.createdAt
            ? moment(record?.linkin?.management?.createdAt).format(
              `YYYY-MM-DD hh:mm`
            )
            : "-",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        // render: (_, record) =>record?.linkin?.management?.linkinId?.status || "-",
        render: (_, record) => (
          <AISelect
            label={""}
            options={statusOptions}
            placeholder="Select Status"
            isDiffrentSelect
            //   isOpen
            name={"status"}
            defaultValue={record?.linkin?.management?.linkinId?.status}
            // value={record?.linkin?.crew?.linkinId?.status}
            onChange={(value) =>
              handleSelectChange("status", value, record?._id)
            }
            // isFlipInput={true}

            className="mb-0 box-shadow-unset inline-start inset-inline-start-0"

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
  }, [managementData]);

  const handleUserProjectStatusUpdate = async () => {
    if (managementStatusData?.projectId) {

      const formData = new FormData();
      formData.append("type", "management");

      formData.append("status", managementStatusData?.status);
      const clientProjectResponse = await doFetchClientProjectLinkInTypeUpdate(
        managementStatusData?.projectId,
        formData
      );

      if (clientProjectResponse?.status == 200) {
        setIsLoading(false);
        doGetManagementDetail()
        toast.success("Management project status update success!");
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
  // confirm modal js end

  return {
    isLoading,
    managementData,
    id,
    managementProjectsHandledColumns,
    isApproveRejectedModalOpen,
    managementStatusData,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserProjectStatusUpdate,
  };
};
