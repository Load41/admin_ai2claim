import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import {
  LDButton,
  LDModal,
  LDPagination,
  LDProjectsCard,
} from "../../components";
import {
  managementListData,
  managementListPendingData,
} from "../../constants/data";
import styles from "./ManagementListPending.module.css";
import { Button, Dropdown, Modal, Radio } from "antd";
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
    isApproveRejectedModalOpen,
    handleCancel,
    showApproveRejectedModal,
  } = useManagementPendingListHook();
  return (
    <>
      <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
          <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
            <Link
              to="/"
              className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2"
            >
              {svgIcons.backArrowFillIcon}
            </Link>
            <h4 className="text-bleu-de-france-one mb-0">Pending List</h4>
            <span>{svgIcons.doubleRightArrowIcon}</span>
            <h4 className="mb-0">
              Management
              <span className="ps-2">
                ({paginationServerData?.totalRecords})
              </span>
            </h4>
          </div>
          <div className="d-flex align-items-center gap-4 flex-wrap">
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
            {/* <Dropdown
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
            </Dropdown> */}
          </div>
        </div>
        <div className="w-100 mt-5">
          <div>
            {managementList?.length > 0 && (
              <LDProjectsCard
                // projectCardData={managementList}
                projectCardData={managementList}
                isNotSwiper
                isBtn
                isFullDetails
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
        <div className=" ">
          <h4 className="lh-base mb-0 fw-medium">
            name<b className="px-2">:-</b>
            <span className="text-bleu-de-france-one">
              {managementData?.name}
            </span>
          </h4>
          <Radio.Group
            name="reason"
            onChange={handleInputChange}
            value={managementData?.reason}
            className={clsx("declineList d-flex flex-column")}
          >
            <Radio
              name="reason"
              className="w-100 h5 fw-normal"
              value={"Already taken by the name"}
              onClick={handleInputChange}
            >
              Already taken by the name
            </Radio>
            <Radio
              name="reason"
              className="w-100 h5 fw-normal"
              value={"Insufficient Data"}
              onClick={handleInputChange}
            >
              Insufficient Data
            </Radio>
            <Radio
              className="w-100 h5 fw-normal"
              value={"Others"}
              onClick={handleInputChange}
            >
              Others
            </Radio>
          </Radio.Group>
          {managementData?.reason === "Others" && (
            <LDInput
              id="other_reason"
              name="other_reason"
              isTextarea
              value={managementData?.other_reason}
              placeholder="Other reason...."
              handleChange={handleInputChange}
            />
          )}
          {/* <div>
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
          </div> */}
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
              icon={svgIcons.approveIcon}
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
              icon={svgIcons.declineIcon}
            >
              Close
            </LDButton>
          </div>
        </div>
      </Modal>
      <LDModal
        title="Confirm"
        open={isApproveRejectedModalOpen}
        onCancel={handleCancel}
        modalContent={
          <>
            <div className="text-center d-flex flex-column gap-5">
              <h4 className="lh-base mb-0">
                Are you sure you want to Approve&nbsp;
                <span className="text-bleu-de-france-one">
                  "{managementData?.name}"
                </span>{" "}
                &nbsp;to use ai2claim services?
              </h4>
              <div className="d-flex align-items-centr gap-5 justify-content-center mt-5 mt-xxl-3">
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
                  Yes
                </LDButton>
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isRedBg
                  isSmallBtn
                  customClass={clsx("w-50")}
                  handleClick={handleCancel}
                >
                  No
                </LDButton>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default ManagementListPending;
