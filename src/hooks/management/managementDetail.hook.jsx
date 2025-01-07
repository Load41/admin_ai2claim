import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doFetchCrewStatusUpdate, doFetchManagementDetail, doFetchManagementStatusServiceUpdate } from "../../actions";
import { toast } from "react-toastify";

export const useManagementDetailHook = () => {
  // doFetchManagementDetail
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [managementData, setManagementData] = useState({});

  const [userId, setUserId] = useState();

  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] = useState(false);


  const doGetManagementDetail = async () => {
    const managementResponse = await doFetchManagementDetail(id);
    if (managementResponse?.status == 200) {
      setManagementData(managementResponse?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetManagementDetail();
  }, [id]);

  const managementHandledList = () => {
    navigate(`/projects-handled-management-list/${id}`);
  };

  const handleUserServiceStatusUpdate = async () => {
    if (userId) {
      const paramsData = {
        userId: managementData?.managementDetail?.createdBy?.id,
        is_service: managementData?.managementDetail?.createdBy?.is_service ? false : true
      }
      const clientProjectResponse = await doFetchManagementStatusServiceUpdate(paramsData)

      if (clientProjectResponse?.status == 200) {
        setIsLoading(false);
        doGetManagementDetail()
        toast.success("Management service status update success!");
        approveRejectedModalCancel()
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
    managementData,
    managementHandledList,
    isApproveRejectedModalOpen,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserServiceStatusUpdate
  };
};
