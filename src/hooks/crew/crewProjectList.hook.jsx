import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doFetchCrewDetail, doFetchCrewProjectList } from "../../actions";
import { AISelect } from "../../components/AISelect";

export const useCrewProjectListHook = () => {
  // doFetchManagementDetail
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [crewData, setCrewData] = useState({});

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

  const handleSelectChange = (name, value, projectId) => {};

  const statusOptions = [
    {
      key: 1,
      label: "pending",
      value: "pending",
    },
    {
      key: 2,
      label: "accept",
      value: "accept",
    },
    {
      key: 1,
      label: "reject",
      value: "reject",
    },
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
        title: "Management name",
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

  return {
    isLoading,
    id,
    crewData,
    crewHandledList,
    crewProjectsHandledColumns,
  };
};
