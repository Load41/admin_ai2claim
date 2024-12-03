import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { LDButton, LDPagination, LDProjectsCard } from "../../components";
import { crewListPendingData } from "../../constants/data";
import styles from "./CrewListPending.module.css";
import { Dropdown, Modal } from "antd";
import { useCrewPendingListHook } from "../../hooks";
import { LDInput } from "../../components/LDInput";
import { svgIcons } from "../../constants/icons";

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items = [
  {
    label: "Neweast",
    key: "1",
  },
  {
    label: "Oldest",
    key: "2",
  },
  {
    label: "Alphabetical",
    key: "3",
  },
  {
    label: "Rating",
    key: "4",
  },
  {
    label: "Finest",
    key: "5",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const CrewListPending = () => {
  const {
    crewDataList,
    paginationData,
    handleClickStatusUpdateSubmit,
    crewData,
    paginationServerData,
    handleCloseModal,
    handleKeyDownSearch,
    handleOrderTableChange,
    handleClickRejected,
    handleInputChange,
    rejectedReasonModal,
  } = useCrewPendingListHook();
  return (
    <>
      <div className={clsx("admin-content")}>
        <h3 className="text-bleu-de-france-one mb-0">Pending List</h3>
        <div className="w-100 mt-5">
          <div className="d-flex align-items-center justify-content-between gap-4 w-100">
            <h4 className="mb-0">
              Crew<span className="ps-2">({crewDataList?.length})</span>
            </h4>
            <LDInput
              id="searchData"
              dataTestId="searchData"
              name="searchData"
              type="text"
              placeholder="Search"
              handleChange={handleKeyDownSearch}
              className={clsx(styles.headerSearchBarWrap, "mb-0")}
              suffix={svgIcons.searchIcon}
            />
            {/* <Dropdown.Button menu={menuProps} onClick={handleButtonClick} className="w-auto">
              <h6 className="fw-medium mb-0">Sort by</h6>
            </Dropdown.Button> */}
          </div>
          <div>
            {crewDataList?.length > 0 && (
              <LDProjectsCard
                projectCardData={crewDataList}
                isNotSwiper
                isBtn
                handleClickStatusUpdate={handleClickStatusUpdateSubmit}
                handleClickRejected={handleClickRejected}
                redirectPath={"/crew-detail"}
              />
            )}
            <div className="w-100 d-flex justify-content-center mt-4 pt-3">
              {crewDataList?.length > 0 && (
                <LDPagination
                  defaultCurrent={paginationData?.currentPage}
                  showTotal={paginationData?.pageSize}
                  total={paginationServerData?.totalRecords}
                  onChange={handleOrderTableChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        title=""
        open={rejectedReasonModal}
        onCancel={handleCloseModal}
        centered
        className="remove-footer-modal"
      >
        <div className="text-center d-flex flex-column gap-4">
          <h2>Reject User Reason</h2>
          <h4></h4>
          <div>
            <LDInput
              id="reason"
              dataTestId="reason"
              name="reason"
              type="text"
              value={crewData?.reason}
              placeholder="reason"
              handleChange={handleInputChange}
              className={clsx(styles.headerSearchBarWrap, "mb-0")}
            />
          </div>
          <div className="d-flex align-items-centr gap-5 justify-content-center mt-3 mt-xxl-2">
            <LDButton
              type="fill"
              shape={"round"}
              iconPosition={"end"}
              isGreenBg
              isSmallBtn
              customClass={clsx("w-50")}
              handleClick={() =>
                handleClickStatusUpdateSubmit(crewData?.status, crewData?.id)
              }
            >
              Submit
            </LDButton>
            <LDButton
              type="fill"
              shape={"round"}
              iconPosition={"end"}
              isRedBg
              isSmallBtn
              customClass={clsx("w-50")}
              handleClick={handleCloseModal}
            >
              Close
            </LDButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CrewListPending;
