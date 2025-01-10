import React from "react";
import { clsx } from "clsx";
import { Button, Dropdown } from "antd";
import { svgIcons } from "../../constants/icons";
import { checkFilesData } from "../../constants/data";
import { LDPagination } from "../../components";
import { Link } from "react-router-dom";
import styles from "./CheckFiles.module.css";
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
const CheckFiles = () => {
  return (
    <div className={clsx("admin-content")}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
        <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
          <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
          <h4 className="text-bleu-de-france-one mb-0">Check Files</h4>
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
      <div className="queries-list-wrap my-5">
        {checkFilesData.map((cqItem, cqIndex) => {
          return(
          <div className="queries-list-box w-100 d-flex flex-column flex-md-row justify-content-between gap-5 gap-md-4" key={cqIndex}>
            <div className="d-flex align-items-center gap-5">
              <div className="ratio ratio-1x1 rounded-circle queries-profile-box flex-0-auto">
                  <img src={cqItem.img} className="img-fluid radius-inherit object-fit-cover bg-ma-white p-1" alt="Ai2claim inc" />
              </div>
              <h5 className="mb-0">{cqItem.queries}</h5>
            </div>
            <div className="d-flex align-items-center gap-5">
              <a href={cqItem.docURL} className="mb-0 text-clear-blue" target="_blank">{cqItem.docName}</a>
              <b>|</b>
              <h5 className="mb-0 text-clear-blue">{cqItem.date}</h5>
            </div>
          </div>
          )
        })}
      </div>
      <LDPagination className="justify-content-center pt-4 px-xxl-2" total="25" defaultPageSize="6"/>
    </div>
  );
};

export default CheckFiles;
