import { useState, useEffect } from "react";
import { doFetchAllCrewPendingList, doFetchCrewStatusUpdate } from "../../actions";

export const useCrewPendingListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [crewDataList, setCrewDataList] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetCrewList = async () => {
    const crewListResponse = await doFetchAllCrewPendingList({
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

  const handleClickStatusUpdate = async (status, id) => {
    const managementListResponse = await doFetchCrewStatusUpdate({ userId: id, is_active: status })
    if (managementListResponse?.status == 200) {
      doGetCrewList()
    }
  }

  return { isLoading, paginationData, crewDataList, handleClickStatusUpdate };
};
