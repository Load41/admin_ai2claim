import React from "react";
import { clsx } from "clsx";
import { svgIcons } from "../../constants/icons";
import { companyOne } from "../../constants/imageData";
import { LDButton } from "../../components";
import styles from "./AboutClient.module.css";
import { useClientDetailHook } from "../../hooks";
import { Link } from "react-router-dom";

const AboutClient = () => {
  const { clientData } = useClientDetailHook();
  return (
    <>
      <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
          <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
            <Link to="/client-list-pending" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
            <h4 className="text-bleu-de-france-one mb-0">About Client</h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <Link to="/client-list-pending" className="h4 mb-0">
              Client's<span className="ps-2">(150)</span>
            </Link>
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
                    <div className="d-flex w-100">
                      <h6 className="w-35 mb-0 lh-base fw-bold">
                        Status <b className="d-none d-sm-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word ps-3">
                        {clientData?.is_active ? "Active" : "Active"}
                      </h6>
                    </div>
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
              <LDButton
                type="fill"
                shape={"round"}
                iconPosition={"end"}
                isFillBtn
                customClass={clsx("w-50 w-100-md")}
                handleClick={() => {
                  return false;
                }}
              >
                Enable/Disable Services
              </LDButton>
            </div>
          </div>
          <h4 className="mt-5 fw-semibold">List Projects :-</h4>
          <div className="d-flex flex-column gap-5 mt-4">
            {clientData?.projects &&
              clientData?.projects?.map((projectData, index) => {
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
                                {projectData?.dateOfDamage}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Hired management{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.linkin?.management?.linkinId?.company_name}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Hired crew{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.linkin?.crew?.linkinId?.company_name}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Hired Material{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <h6 className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {`${projectData?.linkin?.material?.brand} >> ${projectData?.linkin?.material?.pick_your_singles} >> ${projectData?.linkin?.material?.single_color}`}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-sm-row w-100">
                              <h6 className="w-45 mb-0 lh-base fw-bold">
                                Uploaded docs{" "}
                                <b className="d-none d-sm-inline">:-</b>
                              </h6>
                              <div className="w-55 mb-0 lh-base word-break-word ps-sm-3 mt-3 mt-sm-0">
                                {projectData?.linkin?.insurance_company
                                  ?.fileName && (
                                    <Link
                                      to={
                                        projectData?.linkin?.insurance_company
                                          ?.file
                                      }
                                      target={"_blank"}
                                    >
                                      <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                        {
                                          projectData?.linkin?.insurance_company
                                            ?.fileName
                                        }
                                      </label>
                                    </Link>
                                  )}
                                {projectData?.linkin?.material?.fileName && (
                                  <Link
                                    to={projectData?.linkin?.material?.file}
                                    target={"_blank"}
                                  >
                                    <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {projectData?.linkin?.material?.fileName}
                                    </label>
                                  </Link>
                                )}
                                {projectData?.linkin?.optimation?.fileName && (
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
                                  )}
                                {/* <label className="py-4 px-4 py-md-1 px-md-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                  {"-"}
                                </label> */}
                              </div>
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
                          {/* <LDButton
                            type="fill"
                            shape={"round"}
                            iconPosition={"end"}
                            isFillBtn
                            isOrangeBg
                            customClass={clsx("w-35")}
                            handleClick={() => {
                              return false;
                            }}
                          >
                            Status :- 25% complete
                          </LDButton> */}
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
      </div>
    </>
  );
};

export default AboutClient;
