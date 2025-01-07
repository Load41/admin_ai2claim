import { useState, useEffect } from "react";
import {
  doFetchAllCrewList,
  doFetchAllManagementList,
  doFetchAllUserList,
  doFetchClientDelete,
  doFetchCrewDelete,
  doFetchManagementDelete,
} from "../../actions";
import { toast } from "react-toastify";

export const useDashboardHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [managementList, setManagementList] = useState({});
  const [crewList, setCrewList] = useState({});
  const [clientList, setClientList] = useState({});
  const [userId, setUserId] = useState({});

  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] = useState(false);

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

  const handleUserDelete = async () => {
    if (userId?.type == "client") {
      const clientProjectResponse = await doFetchClientDelete(userId?.id)

      if (clientProjectResponse?.status == 200) {

        doGetUserList();
        setIsLoading(false);
        toast.success("Project delete success!");

      } else {
        // toast.error("")

        setIsLoading(false);
      }
    } else if (userId?.type == "management") {
      const clientProjectResponse = await doFetchManagementDelete(userId?.id)

      if (clientProjectResponse?.status == 200) {
        doGetManagementList();
        setIsLoading(false);
        toast.success("Management delete success!");

      } else {
        // toast.error("")

        setIsLoading(false);
      }
    } else if (userId?.type == "crew") {
      const clientProjectResponse = await doFetchCrewDelete(userId?.id)

      if (clientProjectResponse?.status == 200) {
        doGetCrewList();
        setIsLoading(false);
        toast.success("Management delete success!");

      } else {
        // toast.error("")

        setIsLoading(false);
      }
    }
  }


  // confirm modal js start
  const showApproveRejectedModal = (id, type) => {
    setUserId({ id, type })
    setIsApproveRejectedModalOpen(true);
  };

  const approveRejectedModalCancel = () => {
    setIsApproveRejectedModalOpen(false);
  };

  return {
    isLoading,
    managementList,
    crewList,
    clientList,
    paginationData,
    isApproveRejectedModalOpen,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserDelete
  };
};
