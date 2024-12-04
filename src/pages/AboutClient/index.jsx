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
        <h3 className="text-bleu-de-france-one mb-0"> Client</h3>
        <div className="w-100 mt-5">
          <div className="d-flex align-items-center gap-2 w-100">
            <h4 className="mb-0">
              Client's<span className="ps-2">(150)</span>
            </h4>
            <b>{svgIcons.doubleRightArrowIcon}</b>
            <h4 className="mb-0">
              {clientData?.firstName} {clientData?.lastName}
            </h4>
          </div>
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
                    <h6 className="mt-3 mb-0 fw-bold word-break-word">
                      {" "}
                      {clientData?.username}
                    </h6>
                  </div>
                  <div
                    className={
                      "pendingProjectListRightCol d-flex flex-column gap-4 ps-5 ps-xxl-0"
                    }
                  >
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Name <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {clientData?.firstName} {clientData?.lastName}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Status <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {clientData?.is_active ? "Active" : "Active"}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Active since <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        2015
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Mobile <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {clientData?.mobile}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Email <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
                        {clientData?.email}
                      </h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row w-100">
                      <h6 className="w-35 w-100-md mb-0 lh-base">
                        Address <b className="d-none d-lg-inline">:-</b>
                      </h6>
                      <h6 className="w-65 w-100-md mb-0 lh-base word-break-word">
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
                customClass={clsx("w-50")}
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
                            <div className="d-flex flex-column flex-lg-row w-100">
                              <h6 className="w-50 w-100-md mb-0 lh-base">
                                Project {++index}{" "}
                                <b className="d-none d-lg-inline">:-</b>
                              </h6>
                              <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                                {projectData?.projectName}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-lg-row w-100">
                              <h6 className="w-50 w-100-md mb-0 lh-base">
                                Damage date{" "}
                                <b className="d-none d-lg-inline">:-</b>
                              </h6>
                              <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                                {projectData?.dateOfDamage}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-lg-row w-100">
                              <h6 className="w-50 w-100-md mb-0 lh-base">
                                Reason <b className="d-none d-lg-inline">:-</b>
                              </h6>
                              <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                                {projectData?.dateOfDamage}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-lg-row w-100">
                              <h6 className="w-50 w-100-md mb-0 lh-base">
                                Hired management{" "}
                                <b className="d-none d-lg-inline">:-</b>
                              </h6>
                              <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                                {"-"}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-lg-row w-100">
                              <h6 className="w-50 w-100-md mb-0 lh-base">
                                Hired crew{" "}
                                <b className="d-none d-lg-inline">:-</b>
                              </h6>
                              <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                                {"-"}
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-lg-row w-100">
                              <h6 className="w-50 w-100-md mb-0 lh-base">
                                Uploaded docs{" "}
                                <b className="d-none d-lg-inline">:-</b>
                              </h6>
                              <div className="w505 w-100-md mb-0 d-flex flex-wrap gap-2">
                                {projectData?.linkin?.insurance_company
                                  ?.fileName && (
                                  <Link
                                    to={
                                      projectData?.linkin?.insurance_company
                                        ?.file
                                    }
                                    target={"_blank"}
                                  >
                                    <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
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
                                    <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {projectData?.linkin?.material?.fileName}
                                    </label>
                                  </Link>
                                )}
                                {projectData?.linkin?.optimation?.fileName && (
                                  <Link
                                    to={projectData?.linkin?.optimation?.file}
                                    target={"_blank"}
                                  >
                                    <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
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
                                    <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {projectData?.linkin?.signature?.fileName}
                                    </label>
                                  </Link>
                                )}
                                {projectData?.linkin?.payment?.fileName && (
                                  <Link
                                    to={projectData?.linkin?.payment?.file}
                                    target={"_blank"}
                                  >
                                    <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {projectData?.linkin?.payment?.fileName}
                                    </label>
                                  </Link>
                                )}
                                {projectData?.linkin?.certificate?.fileName && (
                                  <Link
                                    to={projectData?.linkin?.certificate?.file}
                                    target={"_blank"}
                                  >
                                    <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
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
                                    <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                      {
                                        projectData?.linkin?.final_estimate
                                          ?.fileName
                                      }
                                    </label>
                                  </Link>
                                )}
                                {/* <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                                  {"-"}
                                </label> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 text-center d-flex flex-column gap-4 align-items-xxl-center h-100 pt-5 pt-xxl-0">
                          <h4 className="lh-base fw-medium">
                            Project was In progress.
                          </h4>
                          <h4 className="lh-base fw-medium">
                            The review will be updated when the project was
                            finished
                          </h4>
                          {/* <LDButton
                            type="fill"
                            shape={"round"}
                            iconPosition={"end"}
                            isFillBtn
                            isOrangeBg
                            customClass={clsx("w-50")}
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
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Project 1 <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          Drimo
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Damage date <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          12/7/2024
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Reason <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          12/7/2024
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Hired management{" "}
                          <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          MR. Roof
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Hired crew <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          Harris & Hyde
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Uploaded docs <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <div className="w505 w-100-md mb-0 d-flex flex-wrap gap-2">
                          <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                            Insurance 1
                          </label>
                          <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                            Insurance 2
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-center d-flex flex-column gap-4 align-items-center h-100">
                    <h4 className="lh-base fw-medium">
                      Project was In progress.
                    </h4>
                    <h4 className="lh-base fw-medium">
                      The review will be updated when the project was finished
                    </h4>
                    <LDButton
                      type="fill"
                      shape={"round"}
                      iconPosition={"end"}
                      isFillBtn
                      isDarkBlueBg
                      customClass={clsx("w-50")}
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
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Project 1 <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          Drimo
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Damage date <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          12/7/2024
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Reason <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          12/7/2024
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Hired management{" "}
                          <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          MR. Roof
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Hired crew <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-50 w-100-md mb-0 lh-base word-break-word">
                          Harris & Hyde
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-lg-row w-100">
                        <h6 className="w-50 w-100-md mb-0 lh-base">
                          Uploaded docs <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <div className="w505 w-100-md mb-0 d-flex flex-wrap gap-2">
                          <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                            Insurance 1
                          </label>
                          <label className="py-1 px-2 bg-fortress-grey text-black p sm mb-0 text-center">
                            Insurance 2
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-center d-flex flex-column gap-4 align-items-center h-100">
                    <h4 className="lh-base fw-medium">
                      Project was In progress.
                    </h4>
                    <h4 className="lh-base fw-medium">
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
