import { useState, useEffect } from "react";
import { doFetchAllUserList } from "../../actions";

export const useClientHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientDataList, setClientDataList] = useState({});
  const [paginationServerData, setPaginationServerData] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetUserList = async () => {
    const clientListResponse = await doFetchAllUserList({
      ...paginationData,
    });
    if (clientListResponse?.status == 200) {
      setClientDataList(clientListResponse?.data);
      setPaginationServerData(clientListResponse?.pagination);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    doGetUserList();
  }, [paginationData]);

  const handleKeyDownSearch = async (event) => {
    setPaginationData((prev) => ({
      ...prev,
      search: event?.target?.value ? event?.target?.value : "",
    }));
  };
  //   / handleTableChange
  const handleOrderTableChange = (event, filter, sort) => {
    try {
      // console.log({ event });
      setPaginationData((prev) => ({
        ...prev,
        currentPage: event,
      }));
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  return {
    isLoading,
    paginationServerData,
    clientDataList,
    paginationData,
    handleOrderTableChange,
    handleKeyDownSearch,
  };
};
