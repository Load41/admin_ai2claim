import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { LDPagination, LDProjectsCard } from "../../components";
import { crewListData } from "../../constants/data";
import { Dropdown } from "antd";
import styles from "./CrewList.module.css";
import { useCrewListHook } from "../../hooks";
import { LDInput } from "../../components/LDInput";
import { svgIcons } from "../../constants/icons";
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
const CrewList = () => {
  const {
    crewDataList,
    paginationData,
    paginationServerData,
    handleKeyDownSearch,
    handleOrderTableChange,
  } = useCrewListHook();
  return (
    <>
      <div className={clsx("admin-content")}>
        <h3 className="text-bleu-de-france-one mb-0">Crew List</h3>
        <div className="w-100 mt-5">
          <div className="d-flex align-items-center justify-content-between gap-4 w-100">
            <h4 className="mb-0">
              Crew<span className="ps-2">({crewDataList?.length})</span>
            </h4>
            <div className="ms-auto">
              <LDInput
                id="searchData"
                dataTestId="searchData"
                name="searchData"
                type="text"
                placeholder="Search"
                handleChange={handleKeyDownSearch}
                className={clsx(styles.headerSearchBarWrap, "mb-0 search-min-300")}
                suffix={svgIcons.searchIcon}
              />
            </div>
            {/* <Dropdown.Button
              menu={menuProps}
              onClick={handleButtonClick}
              className="w-auto"
            >
              <h6 className="fw-medium mb-0">Sort by</h6>
            </Dropdown.Button> */}
          </div>
          <div>
            {crewDataList?.length > 0 && (
              <LDProjectsCard
                projectCardData={crewDataList}
                isNotSwiper
                redirectPath={"/crew-detail"}
              />
            )}
            <div className="w-100 d-flex justify-content-center mt-4 pt-3">
              {crewDataList?.length > 0 && (
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
    </>
  );
};

export default CrewList;
