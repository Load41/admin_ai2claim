import React from "react";
import { clsx } from "clsx";
import { Button, Dropdown } from "antd";
import { svgIcons } from "../../constants/icons";
import { approvedColumns, approvedData, checkFilesData, complaintsQueriesData } from "../../constants/data";
import { LDPagination, LDTable } from "../../components";
import styles from "./ApprovedThings.module.css";
import { Link } from "react-router-dom";
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
const ApprovedThings = () => {
  return (
    <div className={clsx("admin-content")}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
        <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
          <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
          <h4 className="text-bleu-de-france-one mb-0">Approved Things</h4>
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
      <LDTable className="my-5" columns={approvedColumns} data={approvedData}/>
   </div>
  );
};

export default ApprovedThings;
