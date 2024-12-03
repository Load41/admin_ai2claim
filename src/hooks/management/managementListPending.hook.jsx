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

  const handleClickRejected = (status, id) => {
    setRejectedReasonModal((prevState) => true);
    setManagementData((prevState) => ({ ...prevState, status, id }));
  };

  const handleClickStatusUpdate = async (status, id) => {
    if (managementData?.reason == "" && status == false) {
      toast.error("User rejected reason required!");
    }
    const managementListResponse = await doFetchManagementStatusUpdate({
      userId: id,
      is_active: status,
      reason: managementData?.reason,
    });
    if (managementListResponse?.status == 200) {
      doGetManagementList();
      handleCloseModal();
      toast.error(managementListResponse?.message);
    } else {
      toast.error(managementListResponse?.data?.message);
    }
  };

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
  };
};
