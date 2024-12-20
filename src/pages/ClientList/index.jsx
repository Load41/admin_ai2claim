import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { LDPagination, LDProjectsCard } from "../../components";
import { clientListData } from "../../constants/data";
import { Button, Dropdown } from "antd";
import styles from "./ClientList.module.css";
import { useClientHook } from "../../hooks";
import { LDInput } from "../../components/LDInput";
import { svgIcons } from "../../constants/icons";

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
const ClientList = () => {
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const {
    clientDataList,
    paginationData,
    paginationServerData,
    handleOrderTableChange,
    handleKeyDownSearch,
  } = useClientHook();
  return (
    <>
      <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
          <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
            <Link
              to="/"
              className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2"
            >
              {svgIcons.backArrowFillIcon}
            </Link>
            <h4 className="text-bleu-de-france-one mb-0">Client List</h4>
            <span>{svgIcons.doubleRightArrowIcon}</span>
            <h4 className="mb-0">
              Client's<span className="ps-2">({clientDataList?.length})</span>
            </h4>
          </div>
          <div className="d-flex align-items-center gap-4 flex-wrap">
            <LDInput
              id="searchData"
              dataTestId="searchData"
              name="searchData"
              type="text"
              placeholder="Search"
              handleChange={handleKeyDownSearch}
              className={clsx(
                styles.headerSearchBarWrap,
                "mb-0 search-min-300"
              )}
              suffix={svgIcons.searchIcon}
              isNotBottomSpace
              isSearchBarInputWrap="w-100-sm"
            />
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
        </div>
        <div className="w-100 mt-5">
          <div>
            {clientDataList?.length > 0 && (
              <LDProjectsCard
                projectCardData={clientDataList}
                isNotSwiper
                redirectPath={"/client-detail"}
              />
            )}
            <div className="w-100 d-flex justify-content-center mt-4 pt-3">
              {clientDataList?.length > 0 && (
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

export default ClientList;
