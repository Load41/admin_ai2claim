import { useState, useEffect } from "react";
import {  doFetchAllUserPendingList, doFetchClientStatusUpdate } from "../../actions";

export const useClientPendingHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientDataList, setClientDataList] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetUserList = async () => {
    const clientListResponse = await doFetchAllUserPendingList({
      ...paginationData,
    });
    if (clientListResponse?.status == 200) {
      setClientDataList(clientListResponse?.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    doGetUserList();
  }, [paginationData]);

  const handleClickStatusUpdate = async (status, id) => {
    const managementListResponse = await doFetchClientStatusUpdate({ userId: id, is_active: status })
    if (managementListResponse?.status == 200) {
      doGetUserList()
    }
  }


  return { isLoading, clientDataList, paginationData, handleClickStatusUpdate };
};
