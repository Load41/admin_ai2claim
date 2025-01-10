import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { LDButton, LDModal, LDProjectsCard } from "../../components";
import { useDashboardHook } from "../../hooks";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const {
    clientList,
    crewList,
    isLoading,
    managementList,
    paginationData,
    approveRejectedModalCancel,
    handleUserDelete,
    isApproveRejectedModalOpen,
    showApproveRejectedModal
  } = useDashboardHook();
  return (
    <>
      <div className={clsx(styles.DashboardSection, "admin-content")}>
        <h3 className="text-bleu-de-france-one mb-0">Dashboard</h3>
        <div className="w-100 pt-4 pt-xl-0 mt-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 w-100">
            <h4 className="mb-0">
              Clients<span className="ps-2">({paginationData?.clientTotal})</span>
            </h4>
            <Link to="/client-list" className="text-underline">
              View More
            </Link>
          </div>
          <div>
            {clientList?.length > 0 && (
              <LDProjectsCard
                type="client"
                projectCardData={clientList}
                redirectPath={"/client-detail"}
                showApproveRejectedModal={showApproveRejectedModal}
              />
            )}
          </div>
        </div>
        <div className="w-100 pt-4 pt-xl-0 mt-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 w-100">
            <h4 className="mb-0">
              Management<span className="ps-2">({paginationData?.managementTotal})</span>
            </h4>
            <Link to="/management-list" className="text-underline">
              View More
            </Link>
          </div>
          <div>
            {managementList?.length > 0 && (
              <LDProjectsCard
                type="management"
                projectCardData={managementList}
                redirectPath={"/management-detail"}
                showApproveRejectedModal={showApproveRejectedModal}
                isNotShowDeleteIcon
              />
            )}
          </div>
        </div>
        <div className="w-100 pt-4 pt-xl-0 mt-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 w-100">
            <h4 className="mb-0">
              Crew<span className="ps-2">({paginationData?.crewTotal})</span>
            </h4>
            <Link to="/crew-list" className="text-underline">
              View More
            </Link>
          </div>
          <div>
            {crewList?.length > 0 && (
              <LDProjectsCard
                type="crew"
                projectCardData={crewList}
                redirectPath={"/crew-detail"}
                showApproveRejectedModal={showApproveRejectedModal}
                isNotShowDeleteIcon
              />
            )}
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

export default Dashboard;
