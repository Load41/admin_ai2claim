import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  doFetchAllManagementPendingList,
  doFetchManagementStatusUpdate,
} from "../../actions";

export const useManagementPendingListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [managementList, setManagementList] = useState({});
  const [paginationServerData, setPaginationServerData] = useState({});
  const [rejectedReasonModal, setRejectedReasonModal] = useState(false);
  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] =
    useState(false);

  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });
  const [managementData, setManagementData] = useState({
    reason: "",
  });

  const doGetManagementList = async () => {
    const managementListResponse = await doFetchAllManagementPendingList({
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

  const handleInputChange = (event) => {
    const { name, value } = event?.target;
    setManagementData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCloseModal = () => {
    setRejectedReasonModal((prevState) => false);
    setManagementData({});
  };

  const handleClickRejected = (status, id, name) => {
    if (status) {
      showApproveRejectedModal();
      setManagementData((prevState) => ({ ...prevState, status, id, name }));
    } else {
      setRejectedReasonModal((prevState) => true);
      setManagementData((prevState) => ({ ...prevState, status, id, name }));
    }
  };

  const handleClickStatusUpdate = async (status, id) => {
    if (
      (!managementData?.reason || managementData?.reason == "") &&
      status == false
    ) {
      toast.error("User rejected reason required!");
      return false;
    }
    if (
      managementData?.reason == "Others" &&
      (!managementData?.other_reason || managementData?.other_reason == "")
    ) {
      toast.error("User rejected other reason required!");
      return false;
    }

    const managementListResponse = await doFetchManagementStatusUpdate({
      userId: id,
      is_active: status,
      reason: managementData?.reason,
      other_reason: managementData?.other_reason,
    });
    if (managementListResponse?.status == 200) {
      handleCloseModal();
      doGetManagementList();
      toast.success(managementListResponse?.message);
    } else {
      toast.error(managementListResponse?.data?.message);
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
    paginationData,
    managementList,
    paginationServerData,
    rejectedReasonModal,
    managementData,
    handleClickStatusUpdate,
    handleOrderTableChange,
    handleKeyDownSearch,
    handleCloseModal,
    handleClickRejected,
    handleInputChange,
    isApproveRejectedModalOpen,
    showApproveRejectedModal,
    handleCancel,
  };
};
