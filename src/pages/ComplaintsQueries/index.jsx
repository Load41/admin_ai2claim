import React, { useState } from "react";
import { clsx } from "clsx";
import { Button, Dropdown } from "antd";
import { svgIcons } from "../../constants/icons";
import { complaintsQueriesData } from "../../constants/data";
import { LDButton, LDModal } from "../../components";
import { Link } from "react-router-dom";
import { LDInput } from "../../components/LDInput";
import styles from "./ComplaintsQueries.module.css";
const items  = [
  {
    key: '1',
    label: (
      "Client"
    ),
  },
  {
    key: '2',
    label: (
      "Management"
    ),
  },
  {
    key: '3',
    label: (
      "Crew"
    ),
  },
  {
    key: '4',
    label: (
      "All"
    ),
  },
]
const ComplaintsQueries = () => {
  // response modal js start
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const showResponseModal = () => {
    setIsResponseModalOpen(true);
  };

  const handleResponseModalCancel = () => {
    setIsResponseModalOpen(false);
  };
  // response modal js end
  return (
    <div className={clsx("admin-content")}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
        <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
          <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
          <h4 className="text-bleu-de-france-one mb-0">Complaints/Queries</h4>
        </div>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          className="sort-dropdown-wrap d-flexa align-items-center gap-3"
        >
          <Button className="fw-semibold">
            {svgIcons.sortIcon}
            Sort By
            <span className="down-icon">{svgIcons.downArrowLineIcon}</span>
          </Button>
        </Dropdown>
      </div>
      {/* <div className="queries-list-wrap my-5">
        {complaintsQueriesData.map((cqItem, cqIndex) => {
          return(
          <div className="queries-list-box w-100 d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 gap-md-4" key={cqIndex}>
            <div className="d-flex align-items-center gap-5">
              <div className="ratio ratio-1x1 rounded-circle queries-profile-box flex-0-auto">
                  <img src={cqItem.img} className="img-fluid radius-inherit object-fit-cover bg-ma-white p-1" alt="" />
              </div>
              <h5 className="mb-0">{cqItem.queries}</h5>
            </div>
            <h5 className="mb-0 text-clear-blue">{cqItem.date}</h5>
          </div>
          )
        })}
      </div> */}
      <div className="row w-100">
        {complaintsQueriesData.map((cqItem, cqIndex) => {
          return(
          <div className="col-lg-6 col-xl-12 col-xxl-6 mt-5">
              <div className={clsx("pendingProjectListCard pendingProjectListCardBig  h-100 d-flex flex-column cursor cursor-auto")}>
                <div
                  className="pendingProjectLisRow w-100 h-100"
                >
                  <div
                    className={
                      "pendingProjectListLeftCol text-center flex-0-auto"
                    }
                  >
                    <div className="ratio ratio-1x1">
                      <img
                        src={cqItem.img}
                        className="img-fluid w-100 h-100 radius-inherit object-fit-cover"
                        alt=""
                      />
                    </div>
                    <h6 className="mt-4 pt-4 pt-xs-2 mb-0 fw-bold word-break-word p small pe-3">
                      {cqItem.name}
                    </h6>
                  </div>
                  <div className={"pendingProjectListRightCol mt-5 pt-sm-3 pt-xl-0 mt-xl-0 d-flex flex-column"}>
                    <div className="mb-4">
                      <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                        <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                          Message&nbsp;
                          <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2">
                          {cqItem.message}
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                        <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                          Time&nbsp;
                          <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2">
                          {cqItem.time}
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                        <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                          Date&nbsp;
                          <b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2">
                          {cqItem.date}
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                        <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                          Company name&nbsp;<b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2 mt-3 mt-xxl-0">
                          {cqItem.companyName}
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                        <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                          Email&nbsp;<b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2 mt-3 mt-xxl-0">
                          {cqItem.email}
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                        <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                          Mobile&nbsp;<b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2 mt-3 mt-xxl-0">
                          {cqItem.mobile}
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-sm-row w-100 mb-5 mb-sm-4">
                        <h6 className="w-35 w-100-xs mb-sm-0 lh-base p small fw-bold">
                          Address&nbsp;<b className="d-none d-lg-inline">:-</b>
                        </h6>
                        <h6 className="w-65 w-100-xs mb-0 lh-base p small word-break-word p small ps-2 mt-3 mt-xxl-0">
                          {cqItem.address}
                        </h6>
                      </div>
                    </div>
                      <LDButton
                        type="fill"
                        shape={"round"}
                        iconPosition={"end"}
                        isGreenBg
                        isSmallBtn
                        customClass={clsx("w-max-content")}
                        handleClick={showResponseModal}
                      >
                        Message back
                      </LDButton>
                  </div>
                </div>
              </div>
          </div>
          )
        })}
      </div>
      {/* <LDPagination className="justify-content-center pt-4 px-xxl-2" total="15" defaultPageSize="5"/> */}
      <LDModal
        title="Response"
        open={isResponseModalOpen} 
        onCancel={handleResponseModalCancel}
        modalContent={
            <>
            <div className="d-flex flex-column gap-5 gap-xl-4">
              <LDInput
                id="User name"
                dataTestId="userName"
                name="userName"
                // value={loginData?.userName}
                type="text"
                placeholder="Enter user name"
                handleChange={() => {return false}}
                className={clsx()}
                isNotBottomSpace
                // errorMessage={validateMessages?.email}
            />
            <LDInput
                id="Mobile number"
                dataTestId="mobileNumber"
                name="mobileNumber"
                // value={loginData?.mobileNumber}
                type="number"
                placeholder="Enter mobile number"
                handleChange={() => {return false}}
                className={clsx()}
                isNotBottomSpace
                // errorMessage={validateMessages?.email}
            />
            <LDInput
                id="Email"
                dataTestId="email"
                name="email"
                // value={loginData?.email}
                type="email"
                placeholder="Enter email address"
                handleChange={() => {return false}}
                className={clsx()}
                isNotBottomSpace
                // errorMessage={validateMessages?.email}
            />
            <LDInput isTextarea placeholder="Enter your message here...."/>
            </div>
            <div className="d-flex align-items-centr gap-5 justify-content-center mt-5 mt-xxl-3">
                <LDButton
                type="fill"
                shape={"round"}
                iconPosition={"start"}
                isGreenBg
                isSmallBtn
                icon={svgIcons.approveIcon}
                customClass={clsx("w-50")}
                handleClick={handleResponseModalCancel}
                >
                Send mail
                </LDButton>
                <LDButton
                type="fill"
                shape={"round"}
                iconPosition={"start"}
                isRedBg
                isSmallBtn
                icon={svgIcons.declineIcon}
                customClass={clsx("w-50")}
                handleClick={handleResponseModalCancel}
                >
                Cancel
                </LDButton>
            </div>
            </>
        }
      />
    </div>
  );
};

export default ComplaintsQueries;
