import { useState, useEffect } from "react";
import { doFetchAllManagementList, doFetchManagementDelete } from "../../actions";

export const useManagementListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [managementList, setManagementList] = useState({});
  const [paginationServerData, setPaginationServerData] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });
  const [userId, setUserId] = useState();

  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] = useState(false);


  const doGetManagementList = async () => {
    const managementListResponse = await doFetchAllManagementList({
      ...paginationData,
    });
    if (managementListResponse?.status == 200) {
      setManagementList(managementListResponse?.data);
      setPaginationServerData(managementListResponse?.pagination);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetManagementList();
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

  const handleUserDelete = async () => {
    if (userId) {
      const clientProjectResponse = await doFetchManagementDelete(userId)

      if (clientProjectResponse?.status == 200) {
        doGetManagementList();
        setIsLoading(false);
        toast.success("Management delete success!");

      } else {
        // toast.error("")

        setIsLoading(false);
      }
    }
  }


  // confirm modal js start
  const showApproveRejectedModal = (id) => {
    setUserId(id)
    setIsApproveRejectedModalOpen(true);
  };

  const approveRejectedModalCancel = () => {
    setIsApproveRejectedModalOpen(false);
  };


  return {
    isLoading,
    managementList,
    paginationData,
    paginationServerData,
    isApproveRejectedModalOpen,
    handleKeyDownSearch,
    handleOrderTableChange,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserDelete,
  };
};
