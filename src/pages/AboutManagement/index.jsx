import React from "react";
import { clsx } from "clsx";
import { svgIcons } from "../../constants/icons";
import { LDButton } from "../../components";
import { useManagementDetailHook } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AboutManagement.module.css";

const AboutManagement = () => {
  const { isLoading, managementData, managementHandledList } = useManagementDetailHook();

  // management list pending open page start
  const managementPendingFile = () => {
    // navigate("/management-list-pending");
  };
  // management list pending open page end
  return (
    <>
      <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
          <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
            <Link
              to="/management-list"
              className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2"
            >
              {svgIcons.backArrowFillIcon}
            </Link>
            <h4 className="text-bleu-de-france-one mb-0">About Management</h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <h4 className="mb-0">
              Management<span className="ps-2"> </span>
            </h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <h4 className="mb-0">
              {managementData?.managementDetail?.createdBy?.username}
            </h4>
          </div>
        </div>
        <div className="w-100 mt-5">
          <div className="row mt-4">
            <div className="col-xxl-6">
              <div className="pendingProjectListCard aboutPendingProjectListCard h-100">
                <div className="pendingProjectLisRow w-100">
                  <div
                    className={
                      "pendingProjectListLeftCol text-center flex-0-auto"
                    }
                  >
                    <div className="ratio ratio-1x1">
                      <img
                        src={
                          managementData?.managementDetail?.createdBy
                            ?.profileimage
                        }
                        className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                        alt=""
                      />
                    </div>
                    <h6 className="mt-4 mb-0 fw-bold word-break-word">
                      {managementData?.managementDetail?.createdBy?.username}
                    </h6>
                  </div>
                  <div
                    className={
                      "pendingProjectListRightCol d-flex flex-column gap-5 gap-md-4 mt-5 mt-xl-0"
                    }
                  >
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Company Name <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {managementData?.managementDetail?.company_name}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Manager Name <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        Michael
                      </h6>
                    </div>
                    {/* <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Status <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {managementData?.managementDetail?.createdBy?.is_active
                          ? "Active"
                          : "De-Active"}
                      </h6>
                    </div> */}
                    {/* <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Active Since <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {"-"}
                      </h6>
                    </div> */}
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Mobile <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {managementData?.managementDetail?.createdBy?.mobile}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Email <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {managementData?.managementDetail?.createdBy?.email}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Address <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {managementData?.managementDetail?.address}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Website <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {managementData?.website}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 ps-xxl-5 mt-5 mt-xxl-0">
              <div className="d-flex align-items-center gap-4 justify-content-between">
                {/* <h6 className="fw-bold">Overall Rating:</h6>
                <ul className="d-flex align-items-center justify-content-end gap-2 mb-4">
                  <li className="text-aureolin">{svgIcons.starIcon}</li>
                  <li className="text-aureolin">{svgIcons.starIcon}</li>
                  <li className="text-aureolin">{svgIcons.starIcon}</li>
                  <li className="text-aureolin">{svgIcons.starIcon}</li>
                  <li className="text-aureolin">{svgIcons.starIcon}</li>
                </ul> */}
              </div>
              <div className="d-flex align-items-center flex-wrap gap-4 mt-xxl-4">
                {/* <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isFillBtn
                  customClass={clsx("")}
                  handleClick={() => {
                    return false;
                  }}
                >
                  Enable/Disable Services
                </LDButton> */}
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isFillBtn
                  customClass={clsx("")}
                  handleClick={managementHandledList}
                >
                  List of Projects Handled({managementData?.projectAccept})
                </LDButton>
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isFillBtn
                  customClass={clsx("")}
                  handleClick={managementHandledList}
                >
                  List of Pending Projects({managementData?.projectPending})
                </LDButton>
              </div>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-xxl-6 mt-5 mt-xxl-4">
              <div className="pendingProjectListCard d-flex flex-column gap-4">
                <h4 className="mb-0">About</h4>
                <p className="lh-base mb-0">
                  {managementData?.managementDetail?.description}
                </p>
              </div>
            </div>
            <div className="col-xxl-6 d-grid about-crew-management-img-grid gap-4 mt-5 mt-xxl-4">
              {managementData &&
                managementData?.managementDetail?.images &&
                managementData?.managementDetail?.images?.map(
                  (imageItem, index) => (
                    <div className="ratio ratio-16x9" key={index}>
                      <img
                        src={imageItem}
                        className="w-100 h-100 object-fit-cover"
                        alt=""
                      />
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutManagement;
