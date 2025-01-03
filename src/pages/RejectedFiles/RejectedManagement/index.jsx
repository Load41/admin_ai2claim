import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { svgIcons } from "../../../constants/icons";
import { LDPagination, LDRejectedProjectCard } from "../../../components";
import { useManagementRejectListHook } from "../../../hooks";
import styles from "./../RejectedFiles.module.css";

const RejectedManagement = () => {
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
  } = useManagementRejectListHook();
  return (
    <div className={clsx("admin-content")}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
        <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
          <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
          <h4 className="text-bleu-de-france-one mb-0">Rejected List</h4>
          <span>{svgIcons.doubleRightArrowIcon}</span>
          <h4 className="mb-0">
            Management<span className="ps-2">({managementList?.length > 0 ? paginationServerData?.totalRecords : 0})</span>
          </h4>
        </div>
      </div>
      {managementList?.length > 0 && (<LDRejectedProjectCard
        rejectedCardData={managementList}
        isApproveBtn
        handleClickStatusUpdate={handleClickStatusUpdate}
        handleClickRejected={handleClickRejected}
        redirectPath={"/management-detail"}
      />)}
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
  );
};

export default RejectedManagement;
