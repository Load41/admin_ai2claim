import { useState, useEffect } from "react";
import { doFetchAllCrewList, doFetchCrewDelete } from "../../actions";

export const useCrewListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [crewDataList, setCrewDataList] = useState({});
  const [paginationServerData, setPaginationServerData] = useState({});
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const [userId, setUserId] = useState();

  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] = useState(false);

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
  const handleUserDelete = async () => {
    if (userId) {
      const clientProjectResponse = await doFetchCrewDelete(userId)

      if (clientProjectResponse?.status == 200) {
        doGetUserList();
        setIsLoading(false);
        toast.success("Crew delete success!");

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
    crewDataList,
    paginationServerData,
    paginationData,
    handleKeyDownSearch,
    handleOrderTableChange,
    isApproveRejectedModalOpen,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserDelete
  };
};
