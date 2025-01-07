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

  const [userId, setUserId] = useState();

  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] = useState(false);
  
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

  const handleUserDelete = async () => {
    if (userId) {
      const clientProjectResponse = await doFetchClientDelete(userId)

      if (clientProjectResponse?.status == 200) {
        doGetClientList();
        setIsLoading(false);
        toast.success("Project delete success!");

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
    paginationServerData,
    clientDataList,
    paginationData,
    isApproveRejectedModalOpen,
    handleOrderTableChange,
    handleKeyDownSearch,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserDelete
  };
};
