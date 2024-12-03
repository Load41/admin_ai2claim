import { useState, useEffect } from "react";
import { doFetchAllCrewList } from "../../actions";

export const useCrewListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [crewDataList, setCrewDataList] = useState({});
  const [paginationServerData, setPaginationServerData] = useState({});
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
      setPaginationServerData(crewListResponse?.pagination);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    doGetCrewList();
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
    crewDataList,
    paginationServerData,
    paginationData,
    handleKeyDownSearch,
    handleOrderTableChange,
  };
};
