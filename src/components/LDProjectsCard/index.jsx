import { SwiperSlide } from "swiper/react";
import { projectCardSwiperBreakPoints } from "../../constants/data";
import {
  LDSwiper,
  LDButton,
  LDDeclineModal,
  LDApproveModal,
} from "./../../components";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { svgIcons } from "../../constants/icons";
import { formatPhoneNumber } from "../../constants/imageData";

export const LDProjectsCard = ({
  projectCardData,
  isNotSwiper,
  isBtn,
  type,
  handleClickStatusUpdate,
  handleClickRejected,
  redirectPath,
  isFullDetails,
  showApproveRejectedModal,
  isShowInfoMsg,
  isNotShowDeleteIcon
}) => {
  const navigate = useNavigate();
  console.log({ projectCardData });
  return (
    <>
      {isNotSwiper ? (
        <>
          <div
            className={clsx(
              isFullDetails && "isFullDetails",
              "pendingProjectListCard-not-slider-grid d-grid"
            )}
          >
            {projectCardData?.map((item, index) => {
              return (
                <div className="mt-4" key={index}>
                  <div className="pendingProjectListCard h-100 d-flex flex-column">
                    {isNotShowDeleteIcon ? ""
                    :
                    <div className="text-end cursor-pointer mb-4 hover-text-secondary" onClick={() => showApproveRejectedModal(item?.id)}>
                      {svgIcons.deleteIcon2}
                    </div>
                  }
                    <div
                      className="pendingProjectLisRow w-100"
                      onClick={() => navigate(`${redirectPath}/${item?.id}`)}
                    >
                      <div
                        className={
                          "pendingProjectListLeftCol text-center flex-0-auto"
                        }
                      >
                        <div className="ratio ratio-1x1">
                          <img
                            src={
                              item?.profileimage
                                ? item?.profileimage
                                : item?.createdBy?.profileimage
                            }
                            className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                            alt="Ai2claim inc"
                          />
                        </div>
                        <h6 className="mt-4 mb-0 fw-bold word-break-word p small pe-3">
                          {item?.username
                            ? item?.username
                            : item?.createdBy?.username
                              ? item?.createdBy?.username
                              : item?.company_name}
                        </h6>
                      </div>

                      {isFullDetails ? (
                        <div
                          className={"pendingProjectListRightCol mt-4 mt-xl-0"}
                        >
                          {/* <ul className="d-flex align-items-center gap-2 mb-4">
                            {item?.ratingProjectData?.map(
                              (ratingItem, ratingIndex) => {
                                return (
                                  <li
                                    className="text-aureolin"
                                    key={ratingIndex}
                                  >
                                    {ratingItem?.icon}
                                  </li>
                                );
                              }
                            )}
                          </ul> */}
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Company Name{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item?.company_name}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Manager Name{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item?.username
                                ? item?.username
                                : item?.createdBy?.username
                                  ? item?.createdBy?.username
                                  : item?.company_name}
                            </h6>
                          </div>
                          {/* <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Status <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.status}
                            </h6>
                          </div> */}
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Mobile <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item?.createdBy?.mobile}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Email <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <a
                              href={`mailto:${item?.createdBy?.email}`}
                              className="w-55 mb-0 lh-base p small word-break-word p small"
                            >
                              {item?.createdBy?.email}
                            </a>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Address <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.address}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Website <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <a
                              href={item.URL}
                              target="_blank"
                              className="w-55 mb-0 lh-base p small word-break-word p small"
                            >
                              {item.website}
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={"pendingProjectListRightCol mt-4 mt-xl-0"}
                        >
                          <ul className="d-flex align-items-center gap-2 mb-4">
                            {/* {item?.ratingProjectData.map((ratingItem, ratingIndex) => {
                                                    return (
                                                        <li className="text-aureolin" key={ratingIndex}>
                                                            {ratingItem?.icon}
                                                        </li>
                                                    );
                                                })} */}
                          </ul>
                          {/* <div className="d-flex w-100 mb-4">
                            <h6 className="w-50 mb-0 lh-base p small fw-bold">
                              Projects Done{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-50 mb-0 lh-base p small word-break-word p small">
                              {item?.projectsDone ? item?.projectsDone : 0}
                            </h6>
                          </div> */}
                          <div className="d-flex w-100 mb-4">
                            <h6 className="w-50 mb-0 lh-base p small fw-bold">
                              Projects Pending{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-50 mb-0 lh-base p small word-break-word p small">
                              {item?.projectCount ? item?.projectCount : 0}
                            </h6>
                          </div>
                          <div className="d-flex w-100 mb-4">
                            <h6 className="w-50 mb-0 lh-base p small fw-bold">
                              Mobile <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-50 mb-0 lh-base p small word-break-word p small">
                              {item?.mobile
                                ? formatPhoneNumber(item.mobile)
                                : formatPhoneNumber(item?.createdBy?.mobile)}
                            </h6>
                          </div>
                          <div className="d-flex w-100 mb-4">
                            <h6 className="w-50 mb-0 lh-base p small fw-bold">
                              Email <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-50 mb-0 lh-base p small word-break-word p small">
                              {item?.email
                                ? item.email
                                : item?.createdBy?.email}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-xxl-1900-row w-100 mb-4">
                            <h6 className="w-50 w-100-md mb-0 lh-base p small fw-bold">
                              Address <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-50 w-100-xxl-1899 mb-0 lh-base p small word-break-word p small mt-3 mt-xxl-0">
                              {item?.address}
                            </h6>
                          </div>
                        </div>
                      )}
                    </div>
                    {isBtn && (
                      <div className="d-flex align-items-centr gap-4 gap-xl-5 justify-content-center mt-auto pt-5">
                        <LDButton
                          type="fill"
                          shape={"round"}
                          iconPosition={"start"}
                          isGreenBg
                          isSmallBtn
                          customClass={clsx("w-50")}
                          icon={svgIcons.approveIcon}
                          handleClick={() =>
                            handleClickRejected(
                              true,
                              item?.createdBy?.id
                                ? item?.createdBy?.id
                                : item?.id,
                              item?.username
                                ? item?.username
                                : item?.createdBy?.username
                                  ? item?.createdBy?.username
                                  : item?.company_name
                            )
                          }
                        >
                          Approve
                        </LDButton>
                        <LDButton
                          type="fill"
                          shape={"round"}
                          iconPosition={"end"}
                          isRedBg
                          isSmallBtn
                          customClass={clsx("w-50")}
                          icon={svgIcons.declineIcon}
                          handleClick={() =>
                            handleClickRejected(
                              false,
                              item?.createdBy?.id
                                ? item?.createdBy?.id
                                : item?.id,
                              item?.username
                                ? item?.username
                                : item?.createdBy?.username
                                  ? item?.createdBy?.username
                                  : item?.company_name
                            )
                          }
                        >
                          Decline
                        </LDButton>
                        {/* <LDDeclineModal
                          title="Decline Management"
                          cardName="Management"
                        />
                        <LDApproveModal /> */}
                      </div>
                    )}
                    {isShowInfoMsg &&
                      <h6 className="d-flex gap-3 gap-xl-2 text-arcade-fire">
                        <span className="svg-icon-translateY--1">{svgIcons.infoIcon}</span>
                        Waiting for management and crew approval.
                      </h6>
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-12 mt-5 mt-xxl-4">
              <LDSwiper
                grabCursor={true}
                //   clsssName={clsx(styles.dashboardSwiperCardWrap)}
                breakpoints={projectCardSwiperBreakPoints}
                SwiperSlide={
                  <>
                    {projectCardData?.length > 0 &&
                      projectCardData?.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>

                            <div
                              className="pendingProjectListCard h-100"
                              key={index}

                            >
                              {isNotShowDeleteIcon ? ""
                              :
                              <div className="text-end cursor-pointer mb-4 hover-text-secondary" onClick={() => showApproveRejectedModal(item?.id, type)}>
                                {svgIcons.deleteIcon2}
                              </div>
                            }
                              <div className="pendingProjectLisRow w-100" onClick={() =>
                                navigate(`${redirectPath}/${item?.id}`)
                              }>
                                <div
                                  className={
                                    "pendingProjectListLeftCol text-center flex-0-auto"
                                  }
                                >
                                  <div className="ratio ratio-1x1">
                                    <img
                                      src={
                                        item?.profileimage
                                          ? item?.profileimage
                                          : item?.createdBy?.profileimage
                                      }
                                      className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                                      alt="Ai2claim inc"
                                    />
                                  </div>
                                  <h6 className="mt-4 mb-0 fw-bold word-break-word p small pe-3">
                                    {item?.username
                                      ? item?.username
                                      : item?.createdBy?.username
                                        ? item?.createdBy?.username
                                        : item?.company_name}
                                  </h6>
                                </div>
                                <div
                                  className={
                                    "pendingProjectListRightCol mt-4 mt-xl-0"
                                  }
                                >
                                  <ul className="d-flex align-items-center gap-2 mb-4">
                                    {/* {item?.ratingProjectData?.map((ratingItem, ratingIndex) => {
                                                                    return (
                                                                        <li className="text-aureolin" key={ratingIndex}>
                                                                            {ratingItem?.icon}
                                                                        </li>
                                                                    );
                                                                })} */}
                                  </ul>
                                  {/* <div className="d-flex w-100 mb-4">
                                    <h6 className="w-50 mb-0 lh-base p small fw-bold">
                                      Projects Done{" "}
                                      <b className="d-inline">:-</b>
                                    </h6>
                                    <h6 className="w-50 mb-0 lh-base p small word-break-word p small">
                                      {item?.projectsDone
                                        ? item?.projectsDone
                                        : 0}
                                    </h6>
                                  </div> */}
                                  <div className="d-flex w-100 mb-4">
                                    <h6 className="w-50 mb-0 lh-base p small fw-bold">
                                      Projects Pending{" "}
                                      <b className="d-inline">:-</b>
                                    </h6>
                                    <h6 className="w-50 mb-0 lh-base p small word-break-word p small">
                                      {item?.projectCount
                                        ? item?.projectCount
                                        : 0}
                                    </h6>
                                  </div>
                                  <div className="d-flex w-100 mb-4">
                                    <h6 className="w-50 mb-0 lh-base p small fw-bold">
                                      Mobile{" "}
                                      <b className="d-none d-lg-inline">:-</b>
                                    </h6>
                                    <h6 className="w-50 mb-0 lh-base p small word-break-word p small">
                                      {item?.mobile
                                        ? formatPhoneNumber(item.mobile)
                                        : formatPhoneNumber(item?.createdBy?.mobile)}
                                    </h6>
                                  </div>
                                  <div className="d-flex w-100 mb-4">
                                    <h6 className="w-50 mb-0 lh-base p small fw-bold">
                                      Email{" "}
                                      <b className="d-none d-lg-inline">:-</b>
                                    </h6>
                                    <h6 className="w-50 mb-0 lh-base p small word-break-word p small">
                                      {item?.email
                                        ? item.email
                                        : item?.createdBy?.email}
                                    </h6>
                                  </div>
                                  <div className="d-flex flex-column flex-xxl-1600-row w-100 mb-4">
                                    <h6 className="w-50 mb-0 lh-base p small fw-bold">
                                      Address <b className="d-inline">:-</b>
                                    </h6>
                                    <h6 className="w-50 w-100-xxl mb-0 lh-base p small word-break-word p small mt-3 mt-xxl-0">
                                      {item?.address}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </>
                }
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
