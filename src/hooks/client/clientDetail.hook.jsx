import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { doFetchClientProjectLinkInUpdate, doFetchUserDetail } from "../../actions";
import { toast } from "react-toastify";

export const useClientDetailHook = () => {
  // doFetchManagementDetail
  const { id } = useParams();
  const sigCanvas = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clientData, setClientData] = useState({});
  const [optimizationData, setOptimizationData] = useState({
    originalEstimateAddOnCost: 0,
    originalEstimatePrice: 0,
    ai2ClaimServiceCostPrice: 0,
    ai2ClaimServiceAddOnCost: 0
  });
  const [uploadedFile, setUploadedFile] = useState(null);

  const [isAffidavitSelfGeneralContractorOpen, setIsAffidavitSelfGeneralContractorOpen] = useState(false);
  const [isOptimizationModalOpen, setIsOptimizationModalOpen] = useState(false);

  const doGetClientList = async () => {
    const clientResponse = await doFetchUserDetail(id);
    if (clientResponse?.status == 200) {
      setClientData(clientResponse?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetClientList();
  }, [id]);

  // Send Final Estimate (Optimization) modal js start
  const showOptimizationModal = (id) => {
    setOptimizationData((prevState) => ({ ...prevState, projectId: id }));

    setIsOptimizationModalOpen(true);
  };

  const handleOptimizationModalCancel = () => {
    setIsOptimizationModalOpen(false);
  };
  // Send Final Estimate (Optimization) modal js end
  // Affidavit of Self-General Contractor Status modal js start
  const showAffidavitSelfGeneralContractor = () => {
    setIsAffidavitSelfGeneralContractorOpen(true);
  };

  const handleAffidavitSelfGeneralContractorCancel = () => {
    setIsAffidavitSelfGeneralContractorOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event?.target;
    // const { errors } = validateLogin(name, value);
    // setErrorMessage("");
    // setIsLoginSubmit(false);
    // setValidateMessages(errors);
    setOptimizationData((prevState) => ({ ...prevState, [name]: parseInt(value) }));
  };
  const handleFileUpload = async (file) => {
    // const files = file?.map((item) => item?.originFileObj);
    console.log(file);
    setUploadedFile(file); // Store the uploaded file in state
  };

  const handleOptimizationSubmit = async () => {
    setIsLoading(true)
    if (optimizationData?.originalEstimateAddOnCost != 0 &&
      optimizationData?.originalEstimatePrice != 0 &&
      optimizationData?.ai2ClaimServiceCostPrice != 0 &&
      optimizationData?.ai2ClaimServiceAddOnCost != 0) {
      const formData = new FormData();
      formData.append("type", "optimation");
      formData.append("originalEstimateAddOnCost", optimizationData?.originalEstimateAddOnCost);
      formData.append("originalEstimatePrice", optimizationData?.originalEstimatePrice);
      formData.append("ai2ClaimServiceCostPrice", optimizationData?.ai2ClaimServiceCostPrice);
      formData.append("ai2ClaimServiceAddOnCost", optimizationData?.ai2ClaimServiceAddOnCost);
      formData.append("linkinId", null);
      formData.append("status", true);
      uploadedFile.forEach((file) => {
        formData.append("files", file.originFileObj); // `originFileObj` contains the raw file object
      });
      const clientProjectResponse = await doFetchClientProjectLinkInUpdate(optimizationData?.projectId,
        formData)
      if (clientProjectResponse?.status == 200) {
        setOptimizationData({
          originalEstimateAddOnCost: 0,
          originalEstimatePrice: 0,
          ai2ClaimServiceCostPrice: 0,
          ai2ClaimServiceAddOnCost: 0
        })
        doGetClientList();
        setIsLoading(false)
        toast.success("Optimization added success!")
        handleOptimizationModalCancel()
      } else {
        // toast.error("")

        setIsLoading(false)
      }
    }
  }

  // Function to clear the signature
  const handleReset = () => {
    sigCanvas.current.clear();
  };

  // Function to download the signature as an image
  const handleDownload = () => {
    const dataURL = sigCanvas.current.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.png';
    link.click();
  };
  // signature js end
  // estimate table start
  const estimateColumn = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Add on cost',
      dataIndex: 'addOnCost',
      key: 'addOnCost',
    },
    {
      title: 'Sub Total',
      dataIndex: 'subTotal',
      key: 'subTotal',
    },
  ];

  return {
    sigCanvas,
    isLoading,
    clientData,
    estimateColumn,
    optimizationData,
    isOptimizationModalOpen,
    isAffidavitSelfGeneralContractorOpen,
    handleOptimizationSubmit,
    handleDownload,
    handleInputChange,
    handleFileUpload,
    handleReset,
    showOptimizationModal,
    handleOptimizationModalCancel,
    showAffidavitSelfGeneralContractor,
    handleAffidavitSelfGeneralContractorCancel,
  };
};
