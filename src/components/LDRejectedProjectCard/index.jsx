import { LDButton } from "..";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import styles from "./LDRejectedProjectCard.module.css";
export const LDRejectedProjectCard = ({
  rejectedCardData,
  isApproveBtn,
  isRejectedBtn,
}) => {
  return (
    <>  
      <div className="row w-100">
          {rejectedCardData.map((item, index) => {
            return (
              <div className="col-lg-6 col-xl-12 col-xxl-6">
                <div className="mt-5" key={index}>
                  <div className={clsx(styles.pendingProjectListCard, "pendingProjectListCard h-100 d-flex flex-column cursor cursor-auto")}>
                    <div
                      className="pendingProjectLisRow w-100"
                    >
                      <div
                        className={
                          "pendingProjectListLeftCol text-center flex-0-auto"
                        }
                      >
                        <div className="ratio ratio-1x1">
                          <img
                            src={
                              item.img
                            }
                            className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                            alt=""
                          />
                        </div>
                        <h6 className="mt-4 pt-4 pt-xs-2 mb-0 fw-bold word-break-word p small">
                          {item.projectName}
                        </h6>
                        <ul className="d-flex align-items-center justify-content-center gap-2 mt-4">
                            {item.ratingProjectData.map((ratingItem, ratingIndex) => {
                                return (
                                  <li className="text-aureolin" key={ratingIndex}>
                                      {ratingItem.icon}
                                  </li>
                              );
                            })}
                        </ul>
                      </div>
                      <div className={"pendingProjectListRightCol mt-5 pt-sm-3 pt-xl-0 mt-xl-0"}>
                        <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                          <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                            Declined reason&nbsp;
                            <b className="d-none d-lg-inline">:-</b>
                          </h6>
                          <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2">
                            {item.projectsReason}
                          </h6>
                        </div>
                        <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                          <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                            Projects Done&nbsp;
                            <b className="d-none d-lg-inline">:-</b>
                          </h6>
                          <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2">
                            {item.projectDone}
                          </h6>
                        </div>
                        <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                          <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                            Projects Pending&nbsp;
                            <b className="d-none d-lg-inline">:-</b>
                          </h6>
                          <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2">
                            {item.projectPending}
                          </h6>
                        </div>
                        <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                          <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                            Address&nbsp;<b className="d-none d-lg-inline">:-</b>
                          </h6>
                          <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2 mt-3 mt-xxl-0">
                            {item.address}
                          </h6>
                        </div>
                        {isApproveBtn && (
                            <LDButton
                              type="fill"
                              shape={"round"}
                              iconPosition={"end"}
                              isGreenBg
                              isSmallBtn
                              customClass={clsx("w-35 w-100-md mt-4")}
                              handleClick={() => {return false}}
                            >
                              Approve
                            </LDButton>
                          )}
                          {isRejectedBtn && 
                          <LDButton
                            type="fill"
                            shape={"round"}
                            iconPosition={"end"}
                            isRedBg
                            isSmallBtn
                            customClass={clsx("w-35 w-100-md mt-4")}
                            handleClick={() => {return false}}
                          >
                            Reject
                          </LDButton>
                          }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
