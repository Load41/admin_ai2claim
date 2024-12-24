import React, { useRef } from "react";
import { clsx } from "clsx";
import SignatureCanvas from "react-signature-canvas";
import { svgIcons } from "../../constants/icons";
import { LDButton, LDDocUpload, LDModal, LDTable } from "../../components";
import { useClientDetailHook } from "../../hooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LDInput } from "../../components/LDInput";
import styles from "./AboutClient.module.css";

const AboutClient = () => {
  const {
    navigate,
    sigCanvas,
    isLoading,
    clientData,
    optimizationData,
    estimateColumn,
    isOptimizationModalOpen,
    isAffidavitSelfGeneralContractorOpen,
    handleDownload,
    handleReset,
    handleFileUpload,
    handleInputChange,
    showOptimizationModal,
    handleOptimizationModalCancel,
    showAffidavitSelfGeneralContractor,
    handleAffidavitSelfGeneralContractorCancel,
    handleOptimizationSubmit,
  } = useClientDetailHook();

  const estimateData = [
    {
      key: "1",
      name: "Original Estimate",
      price: (
        <div className="d-flex align-items-center gap-2">
          <span>$</span>
          <LDInput
            id="originalEstimatePrice"
            dataTestId="originalEstimatePrice"
            name="originalEstimatePrice"
            value={optimizationData?.originalEstimatePrice}
            type="number"
            handleChange={handleInputChange}
            className={clsx()}
            isSmallCustomInput
            isNotBottomSpace
          // errorMessage={validateMessages?.email}
          />
        </div>
      ),
      addOnCost: (
        <div className="d-flex align-items-center gap-2">
          <span>$</span>
          <LDInput
            id="originalEstimateAddOnCost"
            dataTestId="originalEstimateAddOnCost"
            name="originalEstimateAddOnCost"
            value={optimizationData?.originalEstimateAddOnCost}
            type="number"
            handleChange={handleInputChange}
            className={clsx()}
            isSmallCustomInput
            isNotBottomSpace
          // errorMessage={validateMessages?.email}
          />
        </div>
      ),
      subTotal:
        optimizationData?.originalEstimatePrice +
        optimizationData?.originalEstimateAddOnCost,
    },
    {
      key: "2",
      name: "Ai2 Claim service cost",
      price: (
        <div className="d-flex align-items-center gap-2">
          <span>$</span>
          <LDInput
            id="ai2ClaimServiceCostPrice"
            dataTestId="ai2ClaimServiceCostPrice"
            name="ai2ClaimServiceCostPrice"
            value={optimizationData?.ai2ClaimServiceCostPrice}
            type="number"
            handleChange={handleInputChange}
            className={clsx()}
            isSmallCustomInput
            isNotBottomSpace
          // errorMessage={validateMessages?.email}
          />
        </div>
      ),
      addOnCost: (
        <div className="d-flex align-items-center gap-2">
          <span>$</span>
          <LDInput
            id="ai2ClaimServiceAddOnCost"
            dataTestId="ai2ClaimServiceAddOnCost"
            name="ai2ClaimServiceAddOnCost"
            value={optimizationData?.ai2ClaimServiceAddOnCost}
            type="number"
            handleChange={handleInputChange}
            className={clsx()}
            isSmallCustomInput
            isNotBottomSpace
          // errorMessage={validateMessages?.email}
          />
        </div>
      ),
      subTotal:
        optimizationData?.ai2ClaimServiceCostPrice +
        optimizationData?.ai2ClaimServiceAddOnCost,
    },
  ];
  // estimate table end
  return (
    <>
      <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
          <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
            <Link
              to="/client-list"
              className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2"
            >
              {svgIcons.backArrowFillIcon}
            </Link>
            <h4 className="text-bleu-de-france-one mb-0">About Client</h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <h4 className="mb-0">
              Client's<span className="ps-2"></span>
            </h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <h4 className="mb-0">
              {clientData?.firstName} {clientData?.lastName}
            </h4>
          </div>
        </div>
        <div className="w-100 mt-5">
          <div className="row mt-4">
            <div className="col-xxl-6 order-2 order-xxl-1">
              <div className="pendingProjectListCard aboutPendingProjectListCard h-100">
                <div className="pendingProjectLisRow w-100">
                  <div
                    className={
                      "pendingProjectListLeftCol text-center flex-0-auto"
                    }
                  >
                    <div className="ratio ratio-1x1">
                      <img
                        src={clientData?.profileimage}
                        className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                        alt=""
                      />
                    </div>
                    <h6 className="mt-4 mb-0 fw-bold word-break-word">
                      {" "}
                      {clientData?.username}
                    </h6>
                  </div>
                  <div
                    className={
                      "pendingProjectListRightCol d-flex flex-column gap-4 gap-5 gap-md-4 mt-5 mt-xl-0"
                    }
                  >
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Name <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word ps-3">
                        {clientData?.firstName} {clientData?.lastName}
                      </h6>
                    </div>
                    {/* <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Status <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word ps-3">
                        {clientData?.is_active ? "Active" : "Active"}
                      </h6>
                    </div> */}
                    {/* <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Active since <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word ps-3">
                        2015
                      </h6>
                    </div> */}
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Mobile <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word ps-3">
                        {clientData?.mobile}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Email <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word ps-3">
                        {clientData?.email}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Address <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word ps-3">
                        {clientData?.address}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 offset-xxl-1 text-end mb-5 mb-xxl-0 order-1 order-xxl-2">
              {/* <h6 className="fw-bold">Overall Rating:</h6> */}
              {/* <ul className="d-flex align-items-center justify-content-end gap-2 mb-4">
                <li className="text-aureolin">{svgIcons.starIcon}</li>
                <li className="text-aureolin">{svgIcons.starIcon}</li>
                <li className="text-aureolin">{svgIcons.starIcon}</li>
                <li className="text-aureolin">{svgIcons.starIcon}</li>
                <li className="text-aureolin">{svgIcons.starIcon}</li>
              </ul> */}

              {/* <LDButton
                type="fill"
                shape={"round"}
                iconPosition={"end"}
                isFillBtn
                customClass={clsx("w-50 w-100-md")}
                handleClick={() => { return false; }}
              >
                Enable/Disable Services
              </LDButton> */}
            </div>
          </div>
          <h4 className="mt-5 fw-semibold">List Projects :-</h4>
          <div className="d-flex flex-column gap-5 mt-4">
            {clientData?.projects &&
              clientData?.projects?.map((projectData, index) => {
                let insurance_company = projectData?.linkin?.insurance_company
                  ?.linkinId?._id
                  ? 25
                  : 0;
                let management =
                  projectData?.linkin?.management?.status == "accept" ? 25 : 0;
                let material = projectData?.linkin?.material?.brand ? 25 : 0;
                let crew =
                  projectData?.linkin?.crew?.status == "accept" ? 25 : 0;
                let total = insurance_company + crew + management + material;
                return (
                  <div className="w-100" key={index}>
                    <div className="pendingProjectListCard aboutListProjectListCard h-100">
                      <div className="pendingProjectLisRow row w-100 mx-0 h-100 align-items-center">
                        <div className="col-xxl-6 h-100 pb-5 pb-xxl-0">
                          <div
                            className={
                              "pendingProjectListRightCol ps-0 d-flex flex-column gap-4"
                            }
                          >
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Project {++index}{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.projectName}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Damage date{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.dateOfDamage}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Reason <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.reasonOfDamage}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Address <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.address}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Insurance Company <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                <div className="ratio ratio-1x1">
                                  <img
                                    src={projectData?.linkin?.insurance_company?.linkinId?.image}
                                    className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                                    alt=""

                                  />
                                </div>
                                {projectData?.linkin?.insurance_company?.linkinId?.name}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Uploaded docs{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <div className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.linkin?.insurance_company
                                  ?.files &&
                                  typeof projectData?.linkin?.insurance_company
                                    ?.files !== "string" &&
                                  projectData?.linkin?.insurance_company?.files
                                    ?.length > 0 ? (
                                  projectData?.linkin?.insurance_company?.files?.map(
                                    (fileItem, index) => {
                                      return (
                                        <Link
                                          to={`${projectData?.linkin?.insurance_company?.filePath}/${fileItem?.file}`}
                                          target={"_blank"}
                                          key={index}
                                        >
                                          <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                            {fileItem?.file}
                                          </label>
                                        </Link>
                                      );
                                    }
                                  )
                                ) : (
                                  <Link
                                    to={`${projectData?.linkin?.insurance_company?.filePath}/${projectData?.linkin?.insurance_company?.files}`}
                                    target={"_blank"}
                                    key={index}
                                  >
                                    <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {
                                        projectData?.linkin?.insurance_company
                                          ?.files
                                      }
                                    </label>
                                  </Link>
                                )}

                                {/* {projectData?.linkin?.optimation?.fileName && (
                                  <Link
                                    to={projectData?.linkin?.optimation?.file}
                                    target={"_blank"}
                                  >
                                    <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {
                                        projectData?.linkin?.optimation
                                          ?.fileName
                                      }
                                    </label>
                                  </Link>
                                )}
                                {projectData?.linkin?.signature?.fileName && (
                                  <Link
                                    to={projectData?.linkin?.signature?.file}
                                    target={"_blank"}
                                  >
                                    <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {projectData?.linkin?.signature?.fileName}
                                    </label>
                                  </Link>
                                )}
                                {projectData?.linkin?.payment?.fileName && (
                                  <Link
                                    to={projectData?.linkin?.payment?.file}
                                    target={"_blank"}
                                  >
                                    <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {projectData?.linkin?.payment?.fileName}
                                    </label>
                                  </Link>
                                )}
                                {projectData?.linkin?.certificate?.fileName && (
                                  <Link
                                    to={projectData?.linkin?.certificate?.file}
                                    target={"_blank"}
                                  >
                                    <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {
                                        projectData?.linkin?.certificate
                                          ?.fileName
                                      }
                                    </label>
                                  </Link>
                                )}
                                {projectData?.linkin?.final_estimate
                                  ?.fileName && (
                                    <Link
                                      to={
                                        projectData?.linkin?.final_estimate?.file
                                      }
                                      target={"_blank"}
                                    >
                                      <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                        {
                                          projectData?.linkin?.final_estimate
                                            ?.fileName
                                        }
                                      </label>
                                    </Link>
                                  )} */}
                                {/* <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                  {"-"}
                                </label> */}
                              </div>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Hired management{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0" onClick={() => navigate(`/management-detail/${projectData?.linkin?.management?.linkinId?._id}`)}>
                                <div className="ratio ratio-1x1">
                                  <img
                                    src={projectData?.linkin?.management?.linkinId?.image}
                                    className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                                    alt=""

                                  />
                                </div>
                                {projectData?.linkin?.management?.linkinId
                                  ?.company_name
                                  ? projectData?.linkin?.management?.linkinId
                                    ?.company_name
                                  : "-"}
                                {"  "}
                                {projectData?.linkin?.management?.status && (
                                  <span
                                    className={
                                      projectData?.linkin?.management?.status ==
                                        "accept"
                                        ? ""
                                        : ""
                                    }
                                  >
                                    (
                                    {projectData?.linkin?.management?.status ==
                                      "accept"
                                      ? "Hire"
                                      : projectData?.linkin?.management?.status}
                                    )
                                  </span>
                                )}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Hired crew{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                <div className="ratio ratio-1x1" onClick={() => navigate(`/crew-detail/${projectData?.linkin?.crew?.linkinId?._id}`)}>
                                  <img
                                    src={projectData?.linkin?.crew?.linkinId?.image}
                                    className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                                    alt=""

                                  />
                                </div>
                                {projectData?.linkin?.crew?.linkinId
                                  ?.company_name
                                  ? projectData?.linkin?.crew?.linkinId
                                    ?.company_name
                                  : "-"}{" "}
                                {projectData?.linkin?.crew?.status && (
                                  <span
                                    className={
                                      projectData?.linkin?.crew?.status ==
                                        "accept"
                                        ? ""
                                        : ""
                                    }
                                  >
                                    (
                                    {projectData?.linkin?.crew?.status ==
                                      "accept"
                                      ? "Hire"
                                      : projectData?.linkin?.crew?.status}
                                    )
                                  </span>
                                )}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Selected Material{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.linkin?.material?.brand
                                  ? `${projectData?.linkin?.material?.brand} >> ${projectData?.linkin?.material?.pick_your_singles} >> ${projectData?.linkin?.material?.single_color}`
                                  : "-"}
                              </h6>
                            </div>

                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Selected (estimate/optimization)
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.linkin?.optimation
                                  ?.originalEstimatePrice
                                  ? "optimization"
                                  : "-"}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Sign
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                -
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Affidavit
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                -
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Payment
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                -
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Crew Scheduled date
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                -
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 text-center d-flex flex-column gap-4 align-items-xxl-center h-100 pt-5 pt-xxl-0">
                          <h4 className="lh-base fw-medium mb-0">
                            Project was In progress.
                          </h4>
                          <h4 className="lh-base fw-medium mb-0">
                            The review will be updated when the project was
                            finished
                          </h4>
                          <LDButton
                            type="fill"
                            shape={"round"}
                            iconPosition={"end"}
                            isFillBtn
                            isOrangeBg={total < 99}
                            // isGreenBg={total >= 100}
                            disabled={total >= 100 ? false : true}
                            customClass={clsx("w-50 mx-auto")}
                            handleClick={() =>
                              showOptimizationModal(projectData?._id)
                            }
                          >
                            {total <= 100
                              ? ` Status ${total}%`
                              : "Send Optimization"}
                          </LDButton>
                          {projectData?.linkin?.optimation?.file &&
                            projectData?.linkin?.optimation?.file?.length > 0 &&
                            projectData?.linkin?.optimation?.file?.map(
                              (fileItem, index) => {
                                return (
                                  <Link
                                    to={`${projectData?.linkin?.insurance_company?.filePath}/${fileItem?.file}`}
                                    target={"_blank"}
                                    key={index}
                                  >
                                    <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {fileItem?.file}
                                    </label>
                                  </Link>
                                );
                              }
                            )}
                          {total >= 100 && (
                            <LDButton
                              type="fill"
                              shape={"round"}
                              iconPosition={"end"}
                              isFillBtn
                              disabled={total >= 100 ? false : true}
                              customClass={clsx("w-50 mx-auto")}
                              handleClick={() => {
                                return false;
                              }}
                            >
                              Send Estimate
                            </LDButton>
                          )}
                          {total >= 100 && (
                            <LDButton
                              type="fill"
                              shape={"round"}
                              iconPosition={"end"}
                              isFillBtn
                              // disabled={total >= 100 ? false : true}
                              customClass={clsx("w-50 mx-auto")}
                              handleClick={() => {
                                return false;
                              }}
                            >
                              Send Affidavit
                            </LDButton>
                          )}
                          {total >= 100 && (
                            <LDButton
                              type="fill"
                              shape={"round"}
                              iconPosition={"end"}
                              isFillBtn
                              customClass={clsx("w-50 mx-auto")}
                              handleClick={() => {
                                return false;
                              }}
                            >
                              Send Certificate And Warranty
                            </LDButton>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* <div className="w-100">
              <div className="pendingProjectListCard aboutListProjectListCard h-100">
                <div className="pendingProjectLisRow row w-100 mx-0 h-100 align-items-center">
                  <div className="col-md-6 h-100">
                    <div
                      className={
                        "pendingProjectListRightCol ps-0 d-flex flex-column gap-4"
                      }
                    >
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Project 1 <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          Drimo
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Damage date <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          12/7/2024
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Reason <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          12/7/2024
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Hired management{" "}
                          <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          MR. Roof
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Hired crew <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          Harris & Hyde
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Uploaded docs <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <div className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                            Insurance 1
                          </label>
                          <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                            Insurance 2
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-center d-flex flex-column gap-4 align-items-center h-100">
                    <h4 className="lh-base fw-medium mb-0">
                      Project was In progress.
                    </h4>
                    <h4 className="lh-base fw-medium mb-0">
                      The review will be updated when the project was finished
                    </h4>
                    <LDButton
                      type="fill"
                      shape={"round"}
                      iconPosition={"end"}
                      isFillBtn
                      isDarkBlueBg
                      customClass={clsx("w-35")}
                      handleClick={() => {
                        return false;
                      }}
                    >
                      Status :- 50% complete
                    </LDButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="pendingProjectListCard aboutListProjectListCard h-100">
                <div className="pendingProjectLisRow row w-100 mx-0 h-100 align-items-center">
                  <div className="col-md-6 h-100">
                    <div
                      className={
                        "pendingProjectListRightCol ps-0 d-flex flex-column gap-4"
                      }
                    >
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Project 1 <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          Drimo
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Damage date <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          12/7/2024
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Reason <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          12/7/2024
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Hired management{" "}
                          <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          MR. Roof
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Hired crew <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          Harris & Hyde
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100">
                        <h6 className="w-45 mb-0 lh-base fw-bold">
                          Uploaded docs <b className="d-none d-sm-inline">:-</b>
                        </h6>
                        <div className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                          <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                            Insurance 1
                          </label>
                          <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                            Insurance 2
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-center d-flex flex-column gap-4 align-items-center h-100">
                    <h4 className="lh-base fw-medium mb-0">
                      Project was In progress.
                    </h4>
                    <h4 className="lh-base fw-medium mb-0">
                      The review will be updated when the project was finished
                    </h4>
                    <LDButton
                      type="fill"
                      shape={"round"}
                      iconPosition={"end"}
                      isFillBtn
                      isGreenBg
                      customClass={clsx("w-50")}
                      handleClick={() => {
                        return false;
                      }}
                    >
                      Status :- 75% complete
                    </LDButton>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* Two modal just  view purpose modal start */}
        {/* <h6 className="pt-5 pb-4 fw-bold">Note :- (only design view purpose)</h6>
        <h6 onClick={showOptimizationModal} className="pb-4 cursor-pointer">Send Final Estimate (Optimization)</h6>
        <h6 onClick={showAffidavitSelfGeneralContractor} className="cursor-pointer">Affidavit of self general contractor status</h6> */}
        {/* Two modal just  view purpose modal end */}
      </div>
      {/* Send Final Estimate (Optimization) modal start */}
      <LDModal
        title="Send Final Estimate (Optimization)"
        open={isOptimizationModalOpen}
        onCancel={handleOptimizationModalCancel}
        width={800}
        modalContent={
          <div className={clsx(styles.optimizationBox)}>
            <h5 className="mb-5 mb-xl-4">Optimization :- </h5>
            <LDDocUpload
              accept=".docx, application/pdf"
              label="Please upload the document"
              supportLabel="Supported format: PDF or Doc"
              onFileUpload={handleFileUpload}
            />
            <LDTable
              columns={estimateColumn}
              data={estimateData}
              className={clsx(styles.optimizationTable, "mt-5 mt-xl-4")}
              pagination={false}
            />
            <div className="d-flex justify-content-center align-items-center pt-5 mt-3 mt-xl-0 pb-3">
              <h5 className="me-3 mb-0 fw-bold">Total :-</h5>
              <h5 className="mb-0 text-bleu-de-france-one">
                ${" "}
                {optimizationData?.originalEstimatePrice
                  ? optimizationData?.originalEstimatePrice +
                  optimizationData?.originalEstimateAddOnCost +
                  optimizationData?.ai2ClaimServiceCostPrice +
                  optimizationData?.ai2ClaimServiceAddOnCost
                  : 0}
              </h5>
            </div>
            <div className="text-center w-100 mt-5 mt-xl-3">
              <LDButton
                type="fill"
                shape={"round"}
                iconPosition={"end"}
                isFillBtn
                isGreenBg
                customClass={clsx("")}
                handleClick={handleOptimizationSubmit}
              >
                Send Final Estimate (with Optimization)
              </LDButton>
            </div>
          </div>
        }
      />
      {/* Send Final Estimate (Optimization) modal end */}
      {/* Affidavit of Self-General Contractor Status modal start */}
      <LDModal
        title="Affidavit of Self-General Contractor Status"
        open={isAffidavitSelfGeneralContractorOpen}
        onCancel={handleAffidavitSelfGeneralContractorCancel}
        width={800}
        modalContent={
          <div>
            <div className="mb-4 d-flex gap-3 gap-xxl-1 flex-column">
              <h6>Dick Hoskins </h6>
              <h6>14704 S 23 St.</h6>
              <h6>Bellevue, NE 68123 </h6>
              <h6>asianamazin12@gmail.com</h6>
              <h6>(402) 415-9496</h6>
              <h6>August 7, 2024</h6>
            </div>
            <div className="d-flex gap-4 flex-column mb-5">
              <h5 className="fw-bold mb-0">
                State of Nebraska County of Sarpy
              </h5>
              <h5 className="fw-semibold mb-0 lh-base">
                1. Dick Hoskins, being of sound mind and competent to testify,
                hereby depose and state as follows:
              </h5>
              <p className="h5 fw-normal lh-base gap-3 mb-0 d-flex ps-4">
                <span>1.</span> I am the owner of the property located at 14704
                5 23rd St. Bellevue. NE 68123 which is situated within the state
                of Nebraska.
              </p>
              <p className="h5 fw-normal lh-base gap-3 mb-0 d-flex ps-4">
                <span>2.</span> I am aware of the rights granted to homeowners
                in the state of Nebraska to act as their own general contractors
                on their property without the requirement of holding a general
                contractor's license, as provided by Nebraska law.
              </p>
              <p className="h5 fw-normal lh-base gap-3 mb-0 d-flex ps-4">
                <span>3.</span> I affirm that I am acting as my own general
                contractor on the aforementioned property for the purpose of
                repairs and replacement of my roof and other damaged structures
                resulting from storm damage.
              </p>
              <p className="h5 fw-normal lh-base gap-3 mb-0 d-flex ps-4">
                <span>4.</span> I understand and acknowledge that by acting as
                my own general contractor, I am responsible for ensuring that
                all work performed on the property complies with applicable
                local building codes, safety regulations, and other relevant
                laws.
              </p>
              <p className="h5 fw-normal lh-base gap-3 mb-0 d-flex ps-4">
                <span>5.</span> I have received the scope of work and estimates
                of repair from my homeowner's insurance provider, Farm Bureau
                Financial Services, and I hereby accept the scope of work as
                provided.
              </p>
              <p className="h5 fw-normal lh-base gap-3 mb-0 d-flex ps-4">
                <span>6.</span> I will file for my own building permit with the
                relevant local authority, and I will provide a copy of the
                issued permit alongside this affidavit as required.
              </p>
              <p className="h5 fw-normal lh-base gap-3 mb-0 d-flex ps-4">
                <span>7.</span> I declare under penalty of perjury that the
                information provided in this affidavit is true and correct to
                the best of my knowledge and belief.
              </p>
            </div>
            <div className="w-100 d-flex flex-column flex-md-row gap-4">
              <div className="w-50 w-100-md order-2 order-md-1 mt-4 mt-md-0">
                <h4>Signature</h4>
                <SignatureCanvas
                  ref={sigCanvas}
                  penColor="green"
                  canvasProps={{
                    width: 320,
                    height: 150,
                    className: "sigCanvas border border-2 mt-4",
                  }}
                />
                <div className="mt-5 mt-xl-3 gap-4 d-flex w-100">
                  <LDButton
                    type="fill"
                    shape={"round"}
                    iconPosition={"end"}
                    isSmallBtn
                    isFillBtn
                    customClass={clsx("")}
                    handleClick={handleReset}
                  >
                    Reset
                  </LDButton>
                  <LDButton
                    type="fill"
                    shape={"round"}
                    iconPosition={"end"}
                    isFillBtn
                    isSmallBtn
                    customClass={clsx("")}
                    handleClick={handleDownload}
                  >
                    Downalod
                  </LDButton>
                </div>
              </div>
              <h5 className="ms-md-auto mb-0 fw-semibold order-1 order-md-2">
                Date :-{" "}
                <span className="text-bleu-de-france-one">2/12/2024</span>
              </h5>
            </div>
          </div>
        }
      />
      {/* Affidavit of Self-General Contractor Status modal end */}
    </>
  );
};

export default AboutClient;
