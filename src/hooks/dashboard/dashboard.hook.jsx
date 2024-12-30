import { useState, useEffect } from "react";
import {
  doFetchAllCrewList,
  doFetchAllManagementList,
  doFetchAllUserList,
} from "../../actions";

export const useDashboardHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [managementList, setManagementList] = useState({});
  const [crewList, setCrewList] = useState({});
  const [clientList, setClientList] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 5,
    search: "",
  });

  const doGetUserList = async () => {
    const clientListResponse = await doFetchAllUserList({
      ...paginationData,
    });
    if (clientListResponse?.status == 200) {
      setClientList(clientListResponse?.data);
      setPaginationData((prevState) => ({ ...prevState, clientTotal: clientListResponse?.pagination?.totalRecords }))
    }
    setIsLoading(false);
  };

  const doGetCrewList = async () => {
    const crewListResponse = await doFetchAllCrewList({
      ...paginationData,
    });
    if (crewListResponse?.status == 200) {
      setCrewList(crewListResponse?.data);
      setPaginationData((prevState) => ({ ...prevState, crewTotal: crewListResponse?.pagination?.totalRecords }))
    }
    setIsLoading(false);
  };

  const doGetManagementList = async () => {
    const managementListResponse = await doFetchAllManagementList({
      ...paginationData,
    });
    if (managementListResponse?.status == 200) {
      setManagementList(managementListResponse?.data);
      setPaginationData((prevState) => ({ ...prevState, managementTotal: managementListResponse?.pagination?.totalRecords }))
    }
    setIsLoading(false);
  };

  useEffect(() => {
    doGetUserList();
    doGetCrewList();
    doGetManagementList();
  }, []);

  return { isLoading, managementList, crewList, clientList, paginationData };
};
