import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { LDButton, LDModal, LDPagination, LDProjectsCard } from "../../components";
import { useManagementListHook } from "../../hooks";
import { LDInput } from "../../components/LDInput";
import { svgIcons } from "../../constants/icons";
import styles from "./ManagementListInfo.module.css";
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
const ManagementListInfo = () => {
  const {
    managementList,
    paginationData,
    paginationServerData,
    isApproveRejectedModalOpen,
    handleKeyDownSearch,
    handleOrderTableChange,
    showApproveRejectedModal,
    approveRejectedModalCancel,
    handleUserDelete,
  } = useManagementListHook();
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
            <h4 className="text-bleu-de-france-one mb-0">Management List</h4>
            <span>{svgIcons.doubleRightArrowIcon}</span>
            <h4 className="mb-0">
              Management
              <span className="ps-2">
                (
                {managementList?.length
                  ? paginationServerData?.totalRecords
                  : 0}
                )
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
              className={clsx(
                styles.headerSearchBarWrap,
                "mb-0 search-min-300"
              )}
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
                projectCardData={managementList}
                isNotSwiper
                redirectPath={"/management-detail"}
                showApproveRejectedModal={showApproveRejectedModal}
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
      {/* confirm modal js start */}
      <LDModal
        title=""
        open={isApproveRejectedModalOpen}
        onCancel={approveRejectedModalCancel}
        modalContent={
          <>
            <div className="text-center d-flex flex-column gap-5 gap-xxl-4">
              <h2>Confirm</h2>
              <h4 className="lh-base mb-0">
                Are you sure you want to&nbsp;
                <span className="text-bleu-de-france-one">"Delete"</span>&nbsp;?
              </h4>
              <div className="d-flex align-items-centr gap-5 justify-content-center mt-5 mt-xxl-3">
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isGreenBg
                  isSmallBtn
                  customClass={clsx("w-50")}
                  handleClick={() => handleUserDelete()}
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
                  handleClick={approveRejectedModalCancel}
                >
                  No
                </LDButton>
              </div>
            </div>
          </>
        }
      />
      {/* confirm modal js end */}
    </>
  );
};

export default ManagementListInfo;
