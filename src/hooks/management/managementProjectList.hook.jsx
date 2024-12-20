import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doFetchManagementProjectList } from "../../actions";

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

  return { isLoading, managementData, id };
};
