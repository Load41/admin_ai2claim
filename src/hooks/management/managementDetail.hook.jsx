import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doFetchManagementDetail } from "../../actions";

export const useManagementDetailHook = () => {
  // doFetchManagementDetail
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [managementData, setManagementData] = useState({});

  const doGetManagementDetail = async () => {
    const managementResponse = await doFetchManagementDetail(id);
    if (managementResponse?.status == 200) {
      setManagementData(managementResponse?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetManagementDetail();
  }, [id]);

  const managementHandledList = () => {
    navigate(`/projects-handled-management-list/${id}`);
  };

  return { isLoading, managementData, managementHandledList };
};
