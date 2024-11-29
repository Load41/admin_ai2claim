import { useState, useEffect } from "react";
import { doFetchAllUserList } from "../../actions";

export const useClientHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientList, setClientList] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetUserList = async () => {
    const clientListResponse = await doFetchAllUserList({
      ...paginationData,
    });
    if (clientListResponse?.success) {
      setClientList(clientListResponse?.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    doGetUserList();
  }, [paginationData]);

  return { isLoading, clientList };
};
