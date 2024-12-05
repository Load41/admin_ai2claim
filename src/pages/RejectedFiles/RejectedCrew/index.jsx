import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { svgIcons } from "../../../constants/icons";
import { LDRejectedProjectCard } from "../../../components";
import { crewRejectedListData } from "../../../constants/data";
import styles from "./../RejectedFiles.module.css";

const RejectedCrew = () => {
  return (
    <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
            <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
                <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
                <h4 className="text-bleu-de-france-one mb-0">Rejected List</h4>
                <span>{svgIcons.doubleRightArrowIcon}</span>
                <h4 className="mb-0">
                  Crew<span className="ps-2">(3)</span>
                </h4>
            </div>
        </div>
        <LDRejectedProjectCard rejectedCardData={crewRejectedListData} isApproveBtn/>
   </div>
  );
};

export default RejectedCrew;
