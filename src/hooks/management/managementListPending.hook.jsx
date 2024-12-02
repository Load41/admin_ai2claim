import { useState, useEffect } from "react";
import { doFetchAllManagementList, doFetchAllManagementPendingList, doFetchManagementStatusUpdate } from "../../actions";

export const useManagementPendingListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [managementList, setManagementList] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetManagementList = async () => {
    const managementListResponse = await doFetchAllManagementPendingList({
      ...paginationData,
    });
    if (managementListResponse?.status == 200) {
      setManagementList(managementListResponse?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetManagementList();
  }, [paginationData]);


  const handleClickStatusUpdate = async (status, id) => {
    const managementListResponse = await doFetchManagementStatusUpdate({ userId: id, is_active: status })
    if (managementListResponse?.status == 200) {
      doGetManagementList()
    }
  }

  return { isLoading, paginationData, managementList, handleClickStatusUpdate };
};
