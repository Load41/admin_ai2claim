import { useState, useEffect } from "react";
import { doFetchAllCrewList } from "../../actions";

export const useCrewListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [crewDataList, setCrewDataList] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetCrewList = async () => {
    const crewListResponse = await doFetchAllCrewList({
      ...paginationData,
    });
    if (crewListResponse?.status == 200) {
      setCrewDataList(crewListResponse?.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    doGetCrewList();
  }, [paginationData]);

  return { isLoading, crewDataList, paginationData };
};
