import React from "react";
import { clsx } from "clsx";
import { svgIcons } from "../../constants/icons";
import {
  companyOne,
  companyTwo,
  manWorkerFive,
  manWorkerSix,
  manWorkerThree,
} from "../../constants/imageData";
import { LDButton } from "../../components";
import styles from "./AboutCrew.module.css";
import { useCrewDetailHook } from "../../hooks";

const AboutCrew = () => {
  const { crewData } = useCrewDetailHook();
  return (
    <>
      <div className={clsx("admin-content")}>
        <h3 className="text-bleu-de-france-one mb-0">About Crew</h3>
        <div className="w-100 mt-5">
          <div className="d-flex align-items-center gap-2 w-100">
            <h4 className="mb-0">
              Crew<span className="ps-2"></span>
            </h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <h4 className="mb-0"> {crewData?.createdBy?.username}</h4>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="pendingProjectListCard aboutPendingProjectListCard h-100">
                <div className="pendingProjectLisRow w-100">
                  <div
                    className={
                      "pendingProjectListLeftCol text-center flex-0-auto"
                    }
                  >
                    <div className="ratio ratio-1x1">
                      <img
                        src={crewData?.createdBy?.profileimage}
                        className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                        alt=""
                      />
                    </div>
                    <h6 className="mt-3 mb-0 fw-bold word-break-word">
                      {crewData?.createdBy?.username}
                    </h6>
                  </div>
                  <div
                    className={
                      "pendingProjectListRightCol d-flex flex-column gap-4"
                    }
                  >
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Company Name <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {crewData?.company_name}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Manager Name <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {"-"}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Status <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {crewData?.createdBy?.is_active
                          ? "Active"
                          : "De-Active"}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Active Since <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {"-"}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Mobile <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {crewData?.createdBy?.mobile}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Email <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {crewData?.createdBy?.email}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Address <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {crewData?.address}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Website <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {crewData?.website}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-5">
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
              <div className="d-flex align-items-center flex-wrap gap-4 mt-4">
                <LDButton
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
                </LDButton>
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isFillBtn
                  customClass={clsx("")}
                  handleClick={() => {
                    return false;
                  }}
                >
                  List of projects handled({crewData?.projectCount})
                </LDButton>
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isFillBtn
                  customClass={clsx("")}
                  handleClick={() => {
                    return false;
                  }}
                >
                  List of pending projects({crewData?.projectCount})
                </LDButton>
              </div>
            </div>
          </div>
          <div className="row mt-4 align-items-start">
            <div className="col-md-6">
              <div className="pendingProjectListCard d-flex flex-column gap-4">
                <h4 className="mb-0">About</h4>
                <p className="lh-base mb-0">{crewData?.description}</p>
              </div>
            </div>
            <div className="col-md-6 d-grid about-crew-management-img-grid gap-4">
              {crewData?.images &&
                crewData?.images?.map((imageItem, index) => (
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
