import { SwiperSlide } from "swiper/react";
import { projectCardSwiperBreakPoints } from "../../constants/data";
import { LDSwiper, LDButton, LDDeclineModal, LDApproveModal } from "./../../components";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";

export const LDProjectsCard = ({
  projectCardData,
  isNotSwiper,
  isBtn,
  handleClickStatusUpdate,
  handleClickRejected,
  redirectPath,
  isFullDetails
}) => {
  const navigate = useNavigate();
  return (
    <>
      {isNotSwiper ? (
        <>
          <div className={clsx(
            isFullDetails && "isFullDetails",
            "pendingProjectListCard-not-slider-grid d-grid"
          )}>
            {projectCardData?.map((item, index) => {
              return (
                <div className="mt-4" key={index}>
                  <div className="pendingProjectListCard h-100 d-flex flex-column">
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
                            alt=""
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
                      
                      {
                        isFullDetails ?
                        <div className={"pendingProjectListRightCol mt-4 mt-xl-0"}>
                          <ul className="d-flex align-items-center gap-2 mb-4">
                            {item?.ratingProjectData.map((ratingItem, ratingIndex) => {
                                return (
                                    <li className="text-aureolin" key={ratingIndex}>
                                        {ratingItem?.icon}
                                    </li>
                                );
                            })}
                          </ul>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Company Name{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.companyName}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Manager Name{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.managerName}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Status{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.status}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Mobile{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.mobileNumber}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Email{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <a href={item.emailUrl} className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.email}
                            </a>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Address{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <h6 className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.address}
                            </h6>
                          </div>
                          <div className="d-flex flex-column flex-sm-row w-100 mb-4">
                            <h6 className="w-45 mb-0 lh-base p small fw-bold">
                              Website{" "}
                              <b className="d-none d-lg-inline">:-</b>
                            </h6>
                            <a href={item.URL} target="_blank" className="w-55 mb-0 lh-base p small word-break-word p small">
                              {item.website}
                            </a>
                          </div>
                        </div>
                        :
                      <div className={"pendingProjectListRightCol mt-4 mt-xl-0"}>
                        <ul className="d-flex align-items-center gap-2 mb-4">
                          {/* {item?.ratingProjectData.map((ratingItem, ratingIndex) => {
                                                    return (
                                                        <li className="text-aureolin" key={ratingIndex}>
                                                            {ratingItem?.icon}
                                                        </li>
                                                    );
                                                })} */}
                        </ul>
                        <div className="d-flex w-100 mb-4">
                          <h6 className="w-75-xs w-50 mb-0 lh-base p small fw-bold">
                            Projects Done{" "}
                            <b className="d-none d-lg-inline">:-</b>
                          </h6>
                          <h6 className="w-25-xs w-50 mb-0 lh-base p small word-break-word p small">
                            {item?.projectsDone ? item?.projectsDone : 0}
                          </h6>
                        </div>
                        <div className="d-flex w-100 mb-4">
                          <h6 className="w-75-xs w-50 mb-0 lh-base p small fw-bold">
                            Projects Pending{" "}
                            <b className="d-none d-lg-inline">:-</b>
                          </h6>
                          <h6 className="w-25-xs w-50 mb-0 lh-base p small word-break-word p small">
                            {item?.projectCount ? item?.projectCount : 0}
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
                      }

                    </div>
                    {isBtn && (
                      <div className="d-flex align-items-centr gap-4 gap-xl-5 justify-content-center mt-auto pt-5">
                        <LDButton
                          type="fill"
                          shape={"round"}
                          iconPosition={"end"}
                          isGreenBg
                          isSmallBtn
                          customClass={clsx("w-50")}
                          handleClick={() =>
                            handleClickStatusUpdate(
                              true,
                              item?.createdBy?.id
                                ? item?.createdBy?.id
                                : item?.id
                            )
                          }
                        >
                          Accept
                        </LDButton>
                        <LDButton
                          type="fill"
                          shape={"round"}
                          iconPosition={"end"}
                          isRedBg
                          isSmallBtn
                          customClass={clsx("w-50")}
                          handleClick={() =>
                            handleClickRejected(
                              false,
                              item?.createdBy?.id
                                ? item?.createdBy?.id
                                : item?.id
                            )
                          }
                        >
                          Decline
                        </LDButton>
                        {/* <LDDeclineModal title="Decline Management" cardName="Management"/>
                        <LDApproveModal isApproveBtn/> */}
                      </div>
                    )}
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
                              onClick={() =>
                                navigate(`${redirectPath}/${item?.id}`)
                              }
                            >
                              <div className="pendingProjectLisRow w-100">
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
                                      alt=""
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
                                <div className={"pendingProjectListRightCol mt-4 mt-xl-0"}>
                                  <ul className="d-flex align-items-center gap-2 mb-4">
                                    {/* {item?.ratingProjectData?.map((ratingItem, ratingIndex) => {
                                                                    return (
                                                                        <li className="text-aureolin" key={ratingIndex}>
                                                                            {ratingItem?.icon}
                                                                        </li>
                                                                    );
                                                                })} */}
                                  </ul>
                                  <div className="d-flex w-100 mb-4">
                                    <h6 className="w-75-xs w-50 mb-0 lh-base p small fw-bold">
                                      Projects Done{" "}
                                      <b className="d-inline">:-</b>
                                    </h6>
                                    <h6 className="w-25-xs w-50 mb-0 lh-base p small word-break-word p small">
                                      {item?.projectsDone
                                        ? item?.projectsDone
                                        : 0}
                                    </h6>
                                  </div>
                                  <div className="d-flex w-100 mb-4">
                                    <h6 className="w-75-xs w-50 mb-0 lh-base p small fw-bold">
                                      Projects Pending{" "}
                                      <b className="d-inline">:-</b>
                                    </h6>
                                    <h6 className="w-25-xs w-50 mb-0 lh-base p small word-break-word p small">
                                      {item?.projectCount
                                        ? item?.projectCount
                                        : 0}
                                    </h6>
                                  </div>
                                  <div className="d-flex flex-column flex-xxl-1600-row w-100 mb-4">
                                    <h6 className="w-50 mb-0 lh-base p small fw-bold">
                                      Address{" "}
                                      <b className="d-inline">:-</b>
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
