import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doFetchClientProjectDelete,
  doFetchClientProjectLinkInTypeUpdate,
  doFetchClientProjectLinkInUpdate,
  doFetchUserDetail,
} from "../../actions";
import { toast } from "react-toastify";
import { appConfig } from "../../config";

export const useClientDetailHook = () => {
  // doFetchManagementDetail
  const navigate = useNavigate();
  const { id } = useParams();
  const sigCanvas = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clientData, setClientData] = useState({});
  const [projectId, setProjectId] = useState();
  // confirm modal js start
  const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] =
    useState(false);
  // confirm modal js end
  const [optimizationData, setOptimizationData] = useState({
    originalEstimateAddOnCost: 0,
    originalEstimatePrice: 0,
    ai2ClaimServiceCostPrice: 0,
    ai2ClaimServiceAddOnCost: 0,
  });
  const [finalEstimateData, setFinalEstimateData] = useState({
    optimizationWith: {
      insuranceEstimatedOptimization: 0,
      managementCost: 0,
      crewCost: 0,
      materialCost: 0,
      serviceFees: 0,
      deductible: 0,
    },
    optimizationWithout: {
      insuranceEstimatedOptimization: 0,
      managementCost: 0,
      crewCost: 0,
      materialCost: 0,
      serviceFees: 0,
      deductible: 0,
    },
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedWithFile, setUploadedWithFile] = useState(null);
  const [uploadedWithoutFile, setUploadedWithoutFile] = useState(null);

  const [
    isAffidavitSelfGeneralContractorOpen,
    setIsAffidavitSelfGeneralContractorOpen,
  ] = useState(false);
  const [isOptimizationModalOpen, setIsOptimizationModalOpen] = useState(false);
  const [isFinalEstimateModalOpen, setIsFinalEstimateModalOpen] =
    useState(false);

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
  const showOptimizationModal = (id, item, finalEstimateItem) => {
    setOptimizationData((prevState) => ({
      ...prevState,
      projectId: id,
      ...item,
      file:
        item?.file && item?.file[0]?.file
          ? [
            {
              name: item?.file[0]?.file,
              url: `${appConfig?.IMAGE_URL}/files/${item?.file[0]?.file}`,
            },
          ]
          : [],
    }));
    setFinalEstimateData((prevState) => ({
      ...prevState,
      projectId: id,
      // ...item,
      optimizationWith: finalEstimateItem?.optimizationWith ? {
        ...finalEstimateItem?.optimizationWith,
        file: finalEstimateItem?.optimizationWith?.file && finalEstimateItem?.optimizationWith?.file[0]?.file
          ? [
            {
              name: finalEstimateItem?.optimizationWith?.file[0]?.file,
              url: `${appConfig?.IMAGE_URL}/files/${finalEstimateItem?.optimizationWith?.file[0]?.file}`,
            },
          ]
          : [],
      } : {
        insuranceEstimatedOptimization: 0,
        managementCost: 0,
        crewCost: 0,
        materialCost: 0,
        serviceFees: 0,
        deductible: 0,
      },
      optimizationWithout: finalEstimateItem?.optimizationWith ? {
        ...finalEstimateItem?.optimizationWithout,
        file: finalEstimateItem?.optimizationWithout?.file && finalEstimateItem?.optimizationWithout?.file[0]?.file
          ? [
            {
              name: finalEstimateItem?.optimizationWithout?.file[0]?.file,
              url: `${appConfig?.IMAGE_URL}/files/${finalEstimateItem?.optimizationWithout?.file[0]?.file}`,
            },
          ]
          : [],
      } : {
        insuranceEstimatedOptimization: 0,
        managementCost: 0,
        crewCost: 0,
        materialCost: 0,
        serviceFees: 0,
        deductible: 0,
      }
    }));
    setIsOptimizationModalOpen(true);
    // setUploadedFile()
  };

  const handleOptimizationModalCancel = () => {
    setIsOptimizationModalOpen(false);
  };
  // Send Final Estimate (Optimization) modal js end
  // Send Final Estimate modal js start
  const showFinalEstimateModal = (id, optimizationItem, item) => {
    // console.log({ id, optimizationItem, item });
    setFinalEstimateData((prevState) => ({
      ...prevState,
      projectId: id,
      // ...item,
      optimizationWith: {
        ...item?.optimizationWith,
        file: item?.optimizationWith?.file && item?.optimizationWith?.file[0]?.file
          ? [
            {
              name: item?.optimizationWith?.file[0]?.file,
              url: `${appConfig?.IMAGE_URL}/files/${item?.optimizationWith?.file[0]?.file}`,
            },
          ]
          : [],
      },
      optimizationWithout: {
        ...item?.optimizationWithout,
        file: item?.optimizationWithout?.file && item?.optimizationWithout?.file[0]?.file
          ? [
            {
              name: item?.optimizationWithout?.file[0]?.file,
              url: `${appConfig?.IMAGE_URL}/files/${item?.optimizationWithout?.file[0]?.file}`,
            },
          ]
          : [],
      }
    }));
    setIsFinalEstimateModalOpen(true);
  };

  const handleFinalEstimateModalCancel = () => {
    setIsFinalEstimateModalOpen(false);
  };
  // Send Final Estimate modal js end
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
    setOptimizationData((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
  };
  const handleFileUpload = async (file) => {
    // const files = file?.map((item) => item?.originFileObj);
    console.log(file);
    setUploadedFile(file); // Store the uploaded file in state
  };
  const handleFileWithUpload = async (file) => {
    // const files = file?.map((item) => item?.originFileObj);
    console.log(file);
    setUploadedWithFile(file); // Store the uploaded file in state
  };
  const handleFileWithoutUpload = async (file) => {
    // const files = file?.map((item) => item?.originFileObj);
    console.log(file);
    setUploadedWithoutFile(file); // Store the uploaded file in state
  };

  const handleOptimizationSubmit = async () => {
    setIsLoading(true);
    if (
      optimizationData?.originalEstimatePrice != 0 &&
      optimizationData?.ai2ClaimServiceCostPrice != 0
    ) {
      const formData = new FormData();
      formData.append("type", "optimation");
      formData.append(
        "originalEstimateAddOnCost",
        optimizationData?.originalEstimateAddOnCost
      );
      formData.append(
        "originalEstimatePrice",
        optimizationData?.originalEstimatePrice
      );
      formData.append(
        "ai2ClaimServiceCostPrice",
        optimizationData?.ai2ClaimServiceCostPrice
      );
      formData.append(
        "ai2ClaimServiceAddOnCost",
        optimizationData?.ai2ClaimServiceAddOnCost
      );
      formData.append("linkinId", null);
      formData.append("status", true);
      if (uploadedFile) {
        uploadedFile.forEach((file) => {
          formData.append("files", file.originFileObj); // `originFileObj` contains the raw file object
        });
      }
      let clientProjectResponse;
      if (optimizationData?.status) {
        clientProjectResponse = await doFetchClientProjectLinkInTypeUpdate(
          optimizationData?.projectId,
          formData
        );
      } else {
        clientProjectResponse = await doFetchClientProjectLinkInUpdate(
          optimizationData?.projectId,
          formData
        );
      }
      if (clientProjectResponse?.status == 200) {
        setOptimizationData({
          originalEstimateAddOnCost: 0,
          originalEstimatePrice: 0,
          ai2ClaimServiceCostPrice: 0,
          ai2ClaimServiceAddOnCost: 0,
        });
        doGetClientList();
        setIsLoading(false);
        toast.success("Optimization added success!");
        handleOptimizationModalCancel();
        showFinalEstimateModal();
      } else {
        // toast.error("")

        setIsLoading(false);
      }
    }
  };

  const handleInputEstimateChange = (event, key) => {
    const { name, value } = event?.target;
    // const { errors } = validateLogin(name, value);
    // setErrorMessage("");
    // setIsLoginSubmit(false);
    // setValidateMessages(errors);
    setFinalEstimateData((prevState) => ({
      ...prevState,
      [key]: { ...prevState[key], [name]: parseInt(value) },
      // cashBack: finalEstimateData?.insuranceClaim
      //   ? parseInt(finalEstimateData?.originalEstimatePrice) -
      //     parseInt(finalEstimateData?.insuranceClaim) +
      //     parseInt(finalEstimateData?.managementCost) +
      //     parseInt(finalEstimateData?.crewCost) +
      //     parseInt(finalEstimateData?.materialCost) +
      //     parseInt(finalEstimateData?.serviceFees)
      //   : 0,
    }));
  };

  const handleFinalEstimateSubmit = async () => {
    setIsLoading(true);
    if (finalEstimateData?.originalEstimatePrice != 0) {
      const formData = new FormData();
      formData.append("type", "final_estimate");

      formData.append("optimizationWithout", JSON.stringify(finalEstimateData?.optimizationWithout));
      formData.append("optimizationWith", JSON.stringify(finalEstimateData?.optimizationWith));
      formData.append("linkinId", null);
      formData.append("status", true);
      formData.append("files", null);
      console.log({ uploadedWithFile })
      if (uploadedWithFile) {
        await uploadedWithFile.forEach((file) => {
          // console.log(file)
          formData.append("withFiles", file.originFileObj); // `originFileObj` contains the raw file object
        });
      }
      if (uploadedWithoutFile) {
        await uploadedWithoutFile.forEach((file) => {
          formData.append("withoutFiles", file.originFileObj); // `originFileObj` contains the raw file object
        });
      }
      // console.log({ formData })
      let clientProjectResponse;
      if (finalEstimateData?.status) {
        clientProjectResponse = await doFetchClientProjectLinkInTypeUpdate(
          finalEstimateData?.projectId,
          formData
        );
      } else {
        clientProjectResponse = await doFetchClientProjectLinkInUpdate(
          finalEstimateData?.projectId,
          formData
        );
      }
      if (clientProjectResponse?.status == 200) {
        setFinalEstimateData({
          optimizationWith: {
            insuranceEstimatedOptimization: 0,
            managementCost: 0,
            crewCost: 0,
            materialCost: 0,
            serviceFees: 0,
            deductible: 0,
          },
          optimizationWithout: {
            insuranceEstimatedOptimization: 0,
            managementCost: 0,
            crewCost: 0,
            materialCost: 0,
            serviceFees: 0,
            deductible: 0,
          },
        });
        doGetClientList();
        setIsLoading(false);
        toast.success("Final Estimate added success!");
        handleFinalEstimateModalCancel();
      } else {
        // toast.error("")

        setIsLoading(false);
      }
    }
  };
  // Function to clear the signature
  const handleReset = () => {
    sigCanvas.current.clear();
  };

  // Function to download the signature as an image
  const handleDownload = () => {
    const dataURL = sigCanvas.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "signature.png";
    link.click();
  };
  // signature js end
  // estimate table start
  const estimateColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: 'Price',
    //   dataIndex: 'price',
    //   key: 'price',
    // },
    // {
    //   title: 'Add on cost',
    //   dataIndex: 'addOnCost',
    //   key: 'addOnCost',
    // },
    {
      title: "Sub Total",
      dataIndex: "subTotal",
      key: "subTotal",
    },
  ];
  // estimate table end
  // Send Final Estimate modal (table) start
  const estimateWithOptimizationColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sub Total",
      dataIndex: "subTotal",
      key: "subTotal",
    },
  ];
  const estimateWithoutOptimizationColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sub Total",
      dataIndex: "subTotal",
      key: "subTotal",
    },
  ];
  // Send Final Estimate modal (table) end
  const handleProjectDelete = async () => {
    if (projectId) {
      const clientProjectResponse = await doFetchClientProjectDelete(projectId);

      if (clientProjectResponse?.status == 200) {
        doGetClientList();
        setIsLoading(false);
        toast.success("Project delete success!");
      } else {
        // toast.error("")

        setIsLoading(false);
      }
    }
  };

  // confirm modal js start
  const showApproveRejectedModal = (id) => {
    setProjectId(id);
    setIsApproveRejectedModalOpen(true);
  };

  const approveRejectedModalCancel = () => {
    setIsApproveRejectedModalOpen(false);
  };
  // confirm modal js end
  return {
    navigate,
    sigCanvas,
    isLoading,
    clientData,
    estimateColumn,
    estimateWithOptimizationColumn,
    estimateWithoutOptimizationColumn,
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
    isFinalEstimateModalOpen,
    showFinalEstimateModal,
    handleFinalEstimateModalCancel,
    handleProjectDelete,
    handleInputEstimateChange,
    handleFinalEstimateSubmit,
    finalEstimateData,
    isApproveRejectedModalOpen,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleFileWithUpload,
    handleFileWithoutUpload,
  };
};
