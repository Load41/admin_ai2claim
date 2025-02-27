import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  doFetchAllCrewPendingList,
  doFetchCrewStatusUpdate,
} from "../../actions";

export const useCrewPendingListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [crewDataList, setCrewDataList] = useState({});
  const [paginationServerData, setPaginationServerData] = useState();
  const [rejectedReasonModal, setRejectedReasonModal] = useState(false);
  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] =
    useState(false);
  const [crewData, setCrewData] = useState({
    reason: "",
  });
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetCrewList = async () => {
    const crewListResponse = await doFetchAllCrewPendingList({
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

  const handleInputChange = (event) => {
    const { name, value } = event?.target;
    setCrewData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCloseModal = () => {
    setRejectedReasonModal((prevState) => false);
    setCrewData({});
  };

  const handleClickRejected = (status, id, name) => {
    if (status) {
      showApproveRejectedModal();
      setCrewData((prevState) => ({ ...prevState, status, id, name }));
    } else {
      setRejectedReasonModal((prevState) => true);
      setCrewData((prevState) => ({ ...prevState, status, id, name }));
    }
  };

  const handleClickStatusUpdateSubmit = async (status, id) => {
    if ((!crewData?.reason || crewData?.reason == "") && status == false) {
      toast.error("User rejected reason required!");
      return false;
    }
    if (
      crewData?.reason == "Others" &&
      (!crewData?.other_reason || crewData?.other_reason == "")
    ) {
      toast.error("User rejected other reason required!");
      return false;
    }

    const crewStatusUpdateResponse = await doFetchCrewStatusUpdate({
      userId: id,
      is_active: status,
      reason: crewData?.reason,
      other_reason: crewData?.other_reason,
    });
    if (crewStatusUpdateResponse?.status == 200) {
      handleCloseModal();
      doGetCrewList();
      toast.success(crewStatusUpdateResponse?.message);
    } else {
      toast.error(crewStatusUpdateResponse?.data?.message);
    }
  };

  // confirm modal js start
  const showApproveRejectedModal = () => {
    setIsApproveRejectedModalOpen(true);
  };

  const handleCancel = () => {
    setIsApproveRejectedModalOpen(false);
  };
  // confirm modal js end

  return {
    isLoading,
    crewData,
    paginationData,
    crewDataList,
    paginationServerData,
    rejectedReasonModal,
    isApproveRejectedModalOpen,
    handleKeyDownSearch,
    handleClickRejected,
    handleOrderTableChange,
    handleClickStatusUpdateSubmit,
    handleCloseModal,
    handleInputChange,
    showApproveRejectedModal,
    handleCancel,
  };
};
