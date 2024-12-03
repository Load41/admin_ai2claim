import { useState, useEffect } from "react";
import { doFetchAllManagementList } from "../../actions";

export const useManagementListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [managementList, setManagementList] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetManagementList = async () => {
    const managementListResponse = await doFetchAllManagementList({
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

  return { isLoading, managementList, paginationData };
};
