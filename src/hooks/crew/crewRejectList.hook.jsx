import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  doFetchAllCrewRejectList,
  doFetchCrewStatusUpdate,
} from "../../actions";

export const useCrewRejectListHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [crewDataList, setCrewDataList] = useState({});
  const [paginationServerData, setPaginationServerData] = useState();
  const [rejectedReasonModal, setRejectedReasonModal] = useState(false);
  const [crewData, setCrewData] = useState({
    reason: "",
  });
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
    search: "",
  });

  const doGetCrewList = async () => {
    const crewListResponse = await doFetchAllCrewRejectList({
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

  const handleClickRejected = (status, id) => {
    setRejectedReasonModal((prevState) => true);
    setCrewData((prevState) => ({ ...prevState, status, id }));
  };

  const handleClickStatusUpdateSubmit = async (status, id) => {
    if (crewData?.reason == "" && status == false) {
      toast.error("User rejected reason required!");
    }
    const crewStatusUpdateResponse = await doFetchCrewStatusUpdate({
      userId: id,
      is_active: status,
      reason: crewData?.reason,
    });
    if (crewStatusUpdateResponse?.status == 200) {
      doGetCrewList();
      handleCloseModal();
      toast.success(crewStatusUpdateResponse?.message);
    } else {
      toast.error(crewStatusUpdateResponse?.data?.message);
    }
  };

  return {
    isLoading,
    crewData,
    paginationData,
    crewDataList,
    paginationServerData,
    rejectedReasonModal,
    handleKeyDownSearch,
    handleClickRejected,
    handleOrderTableChange,
    handleClickStatusUpdateSubmit,
    handleCloseModal,
    handleInputChange,
  };
};
