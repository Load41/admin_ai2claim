import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doFetchCrewDetail } from "../../actions";

export const useCrewDetailHook = () => {
  // doFetchManagementDetail
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

  return { isLoading, crewData };
};
