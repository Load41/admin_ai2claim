import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { LDProjectsCard } from "../../components";
import {
  clientsCardData,
  crewCardData,
  managementCardData,
} from "../../constants/data";
import styles from "./Dashboard.module.css";
import { useDashboardHook } from "../../hooks";

const Dashboard = () => {
  const { clientList, crewList, isLoading, managementList, paginationData } =
    useDashboardHook();
  return (
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
              projectCardData={clientList}
              redirectPath={"/client-detail"}
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
              projectCardData={managementList}
              redirectPath={"/management-detail"}
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
              projectCardData={crewList}
              redirectPath={"/crew-detail"}
            />
          )}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
