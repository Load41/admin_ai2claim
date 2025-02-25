import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doFetchCrewDetail,
  doFetchCrewStatusServiceUpdate,
  doFetchCrewStatusUpdate,
} from "../../actions";
import { toast } from "react-toastify";

export const useCrewDetailHook = () => {
  // doFetchManagementDetail
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [crewData, setCrewData] = useState({});

  const [userId, setUserId] = useState();

  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] =
    useState(false);

  const doGetCrewList = async () => {
    const crewResponse = await doFetchCrewDetail(id);
    if (crewResponse?.status == 200) {
      setCrewData(crewResponse?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetCrewList();
  }, [id]);
  const crewHandledList = () => {
    navigate(`/crew-handled-management-list/${id}`);
  };

  const handleUserServiceStatusUpdate = async () => {
    if (userId) {
      const paramsData = {
        userId: crewData?.cewDetail?.createdBy?.id,
        is_service: crewData?.cewDetail?.createdBy?.is_service ? false : true,
      };
      const clientProjectResponse = await doFetchCrewStatusServiceUpdate(
        paramsData
      );

      if (clientProjectResponse?.status == 200) {
        setIsLoading(false);
        approveRejectedModalCancel();
        doGetCrewList();
        toast.success("Crew service status update success!");
      } else {
        // toast.error("")

        setIsLoading(false);
      }
    }
  };

  // confirm modal js start
  const showApproveRejectedModal = (id) => {
    setUserId(id);
    setIsApproveRejectedModalOpen((prev) => true);
  };

  const approveRejectedModalCancel = () => {
    setIsApproveRejectedModalOpen((prev) => false);
  };

  return {
    isLoading,
    crewData,
    isApproveRejectedModalOpen,
    crewHandledList,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserServiceStatusUpdate,
  };
};
