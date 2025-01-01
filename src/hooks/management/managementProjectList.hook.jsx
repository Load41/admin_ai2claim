import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { doFetchManagementProjectList } from "../../actions";
import { AISelect } from "../../components/AISelect";

export const useManagementProjectListHook = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [managementData, setManagementData] = useState({});

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
  }, [managementData]);

  return { isLoading, managementData, id, managementProjectsHandledColumns };
};
