import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doFetchCrewDetail, doFetchCrewProjectList } from "../../actions";

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
  return { isLoading, id, crewData, crewHandledList };
};
