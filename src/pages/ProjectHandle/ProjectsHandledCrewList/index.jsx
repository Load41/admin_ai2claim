import React from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { svgIcons } from "../../../constants/icons";
import { LDButton, LDModal, LDTable } from "../../../components";
import { useCrewProjectListHook } from "../../../hooks";

const ProjectsHandledCrewList = () => {
  const {
    crewData,
    id,
    crewProjectsHandledColumns,
    isApproveRejectedModalOpen,
    crewStatusData,
    approveRejectedModalCancel,
    handleUserProjectStatusUpdate
  } = useCrewProjectListHook();
  return (
    <>
      <div className={clsx("admin-content")}>

        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
          <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
            <Link
              to={`/crew-detail/${id}`}
              className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2"
            >
              {svgIcons.backArrowFillIcon}
            </Link>
            <h4 className="text-bleu-de-france-one mb-0">
              List of Crew Project Handle
            </h4>
            <span>{svgIcons.doubleRightArrowIcon}</span>
            <h4 className="mb-0">
              {crewData?.cewDetail?.company_name
                ? crewData?.cewDetail?.company_name
                : crewData?.cewDetail?.email}
            </h4>
            <span>{svgIcons.doubleRightArrowIcon}</span>
            <h4 className="mb-0">Projects</h4>
          </div>
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
        <div className="w-100 mt-5">
          <h4>List of Projects :-</h4>
          <LDTable
            className="mt-4 mb-5"
            columns={crewProjectsHandledColumns}
            data={crewData?.projectList}
          />
        </div>
      </div>
      {/* confirm modal js start */}
      {/* <div onClick={showApproveRejectedModal}>Confirm delete modal</div> */}
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
                <span className="text-bleu-de-france-one">"{crewStatusData?.status}"</span>&nbsp; Status Update?
              </h4>
              <div className="d-flex align-items-centr gap-5 justify-content-center mt-5 mt-xxl-3">
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isGreenBg
                  isSmallBtn
                  customClass={clsx("w-50")}
                  handleClick={handleUserProjectStatusUpdate}
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

export default ProjectsHandledCrewList;
