import React from "react";
import { clsx } from "clsx";
import { svgIcons } from "../../constants/icons";
import { LDButton } from "../../components";
import { useCrewDetailHook } from "../../hooks";
import { Link } from "react-router-dom";
import styles from "./AboutCrew.module.css";

const AboutCrew = () => {
  const { crewData, crewHandledList } = useCrewDetailHook();
  // projects-handled-management-list open page start

  return (
    <>
      <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
          <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
            <Link
              to={localStorage.getItem("backUrl") ? localStorage.getItem("backUrl") : "/crew-list"}
              className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2"
            >
              {svgIcons.backArrowFillIcon}
            </Link>
            <h4 className="text-bleu-de-france-one mb-0">About Crew</h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <h4 className="mb-0">
              Crew<span className="ps-2"></span>
            </h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <h4 className="mb-0">{crewData?.cewDetail?.createdBy?.username}</h4>
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
                        src={crewData?.cewDetail?.createdBy?.profileimage}
                        className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                        alt=""
                      />
                    </div>
                    <h6 className="mt-4 mb-0 fw-bold word-break-word">
                      {crewData?.cewDetail?.createdBy?.username}
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
                        {crewData?.cewDetail?.company_name}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Manager Name <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {"-"}
                      </h6>
                    </div>
                    {/* <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Status <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {crewData?.cewDetail?.createdBy?.is_active
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
                        {crewData?.cewDetail?.createdBy?.mobile}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Email <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {crewData?.cewDetail?.createdBy?.email}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Address <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {crewData?.cewDetail?.address}
                      </h6>
                    </div>
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Website <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 mb-0 lh-base word-break-word ps-3">
                        {crewData?.cewDetail?.website}
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
                  handleClick={crewHandledList}
                >
                  List of Projects Handled({crewData?.projectAccept})
                </LDButton>
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isFillBtn
                  customClass={clsx("")}
                  handleClick={crewHandledList}
                >
                  List of Pending Projects({crewData?.projectPending})
                </LDButton>
              </div>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-xxl-6 mt-5 mt-xxl-4">
              <div className="pendingProjectListCard d-flex flex-column gap-4">
                <h4 className="mb-0">About</h4>
                <p className="lh-base mb-0">
                  {crewData?.cewDetail?.description}
                </p>
              </div>
            </div>
            <div className="col-xxl-6 d-grid about-crew-management-img-grid gap-4 mt-5 mt-xxl-4">
              {crewData?.cewDetail?.images &&
                crewData?.cewDetail?.images?.map((imageItem, index) => (
                  <div className="ratio ratio-16x9" key={index}>
                    <img
                      src={imageItem}
                      className="w-100 h-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCrew;
