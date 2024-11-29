import { useState, useEffect } from "react";
import { doFetchAllCrewList } from "../../actions";

export const useCrewListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [crewList, setCrewList] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetCrewList = async () => {
    const crewListResponse = await doFetchAllCrewList({
      ...paginationData,
    });
    if (crewListResponse?.success) {
      setCrewList(crewListResponse?.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    doGetCrewList();
  }, [paginationData]);

  return { isLoading, crewList };
};
