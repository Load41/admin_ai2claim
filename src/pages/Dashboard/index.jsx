import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { LDProjectsCard } from "../../components";
import { clientsCardData, crewCardData, managementCardData } from "../../constants/data";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
   <div className={clsx(styles.DashboardSection, "admin-content")}>
      <h3 className="text-bleu-de-france-one mb-0">Dashboard</h3>
      <div className="w-100 mt-5">
        <div className="d-flex align-items-center justify-content-between gap-4 w-100">
            <h4 className="mb-0">Management<span className="ps-2">(250)</span></h4>
            <Link to="/management-list" className="text-underline">View More</Link>
        </div>
        <div>
            <LDProjectsCard projectCardData={managementCardData}/>
        </div>
      </div>
      <div className="w-100 mt-5">
        <div className="d-flex align-items-center justify-content-between gap-4 w-100">
            <h4 className="mb-0">Crew<span className="ps-2">(350)</span></h4>
            <Link to="/crew-list" className="text-underline">View More</Link>
        </div>
        <div>
            <LDProjectsCard projectCardData={crewCardData}/>
        </div>
      </div>
      <div className="w-100 mt-5">
        <div className="d-flex align-items-center justify-content-between gap-4 w-100">
            <h4 className="mb-0">Clients<span className="ps-2">(900+)</span></h4>
            <Link to="/client-list" className="text-underline">View More</Link>
        </div>
        <div>
            <LDProjectsCard projectCardData={clientsCardData}/>
        </div>
      </div>
   </div>
  );
};

export default Dashboard;
