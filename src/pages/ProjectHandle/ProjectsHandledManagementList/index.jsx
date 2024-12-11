import React from "react";
import { clsx } from "clsx";
import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { managementProjectsHandledColumns, managementProjectsHandledData } from "../../../constants/data";
import { svgIcons } from "../../../constants/icons";
import { LDTable } from "../../../components";
const items  = [
  {
    key: '1',
    label: (
      "Finished projects"
    ),
  },
  {
    key: '2',
    label: (
      "Pending Projects"
    ),
  },
  {
    key: '3',
    label: (
      "Take up date"
    ),
  },
]
const ProjectsHandledManagementList = () => {
  return (
    <div className={clsx("admin-content")}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
        <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
          <Link to="/management-detail/:id" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
          <h4 className="text-bleu-de-france-one mb-0">List of Management Project Handle</h4>
          <span>{svgIcons.doubleRightArrowIcon}</span>
          <h4 className="mb-0">MR.Roof</h4>
          <span>{svgIcons.doubleRightArrowIcon}</span>
          <h4 className="mb-0">Projects</h4>
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
      <div className="w-100 mt-5">
        <h4>List of Projects :-</h4>
        <LDTable className="mt-4 mb-5" columns={managementProjectsHandledColumns} data={managementProjectsHandledData}/>
      </div>
   </div>
  );
};

export default ProjectsHandledManagementList;
