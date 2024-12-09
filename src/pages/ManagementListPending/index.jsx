import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { LDButton, LDPagination, LDProjectsCard } from "../../components";
import {
  managementListData,
  managementListPendingData,
} from "../../constants/data";
import styles from "./ManagementListPending.module.css";
import { Dropdown, Modal } from "antd";
import { useManagementPendingListHook } from "../../hooks";
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
const ManagementListPending = () => {
  const {
    isLoading,
    paginationData,
    managementList,
    paginationServerData,
    managementData,
    rejectedReasonModal,
    handleClickStatusUpdate,
    handleOrderTableChange,
    handleKeyDownSearch,
    handleCloseModal,
    handleClickRejected,
    handleInputChange,
  } = useManagementPendingListHook();
  return (
    <>
      <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
          <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
              <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
              <h4 className="text-bleu-de-france-one mb-0">Pending List</h4>
              <span>{svgIcons.doubleRightArrowIcon}</span>
              <h4 className="mb-0">
                Management<span className="ps-2">({managementList?.length})</span>
              </h4>
          </div>
          <LDInput
            id="searchData"
            dataTestId="searchData"
            name="searchData"
            type="text"
            placeholder="Search"
            handleChange={handleKeyDownSearch}
            className={clsx("mb-0 search-min-300")}
            suffix={svgIcons.searchIcon}
            isNotBottomSpace
            isSearchBarInputWrap="w-100-sm"
          />
        </div>
        <div className="w-100 mt-5">
          <div>
            {managementList?.length > 0 && (
              <LDProjectsCard
                projectCardData={managementList}
                isNotSwiper
                isBtn
                handleClickStatusUpdate={handleClickStatusUpdate}
                handleClickRejected={handleClickRejected}
                redirectPath={"/management-detail"}
              />
            )}
            <div className="w-100 d-flex justify-content-center mt-4 pt-3">
              {managementList?.length > 0 && (
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
        title="Reject User Reason"
        open={rejectedReasonModal}
        onCancel={handleCloseModal}
        centered
        className="remove-footer-modal"
      >
        <div className="text-center d-flex flex-column gap-5 gap-xxl-4">
          <div>
            <LDInput
              id="reason"
              dataTestId="reason"
              name="reason"
              type="text"
              value={managementData?.reason}
              placeholder="Reason"
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
                handleClickStatusUpdate(
                  managementData?.status,
                  managementData?.id
                )
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

export default ManagementListPending;
