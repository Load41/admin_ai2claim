import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doFetchCrewDetail } from "../../actions";

export const useCrewDetailHook = () => {
  // doFetchManagementDetail
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [crewData, setCrewData] = useState({});

  const doGetCrewList = async () => {
    const crewResponse = await doFetchCrewDetail(id);
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
  return { isLoading, crewData, crewHandledList };
};
