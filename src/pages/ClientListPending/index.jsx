import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { LDPagination, LDProjectsCard } from "../../components";
import { clientListPendingData } from "../../constants/data";
import styles from "./ClientListPending.module.css";
import { Dropdown } from "antd";
import { useClientPendingHook } from "../../hooks";
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
const ClientListPending = () => {
  const {
    handleClickStatusUpdate,
    clientDataList,
    isLoading,
    paginationData,
    paginationServerData,
    handleKeyDownSearch,
    handleOrderTableChange,
  } = useClientPendingHook();
  return (
    <>
      <div className={clsx("admin-content")}>
        <h3 className="text-bleu-de-france-one mb-0">Pending List</h3>
        <div className="w-100 mt-5">
          <div className="d-flex align-items-center justify-content-between gap-4 w-100">
            <h4 className="mb-0">
              Client's
              <span className="ps-2">
                ({clientDataList?.length ? clientDataList?.length : 0})
              </span>
            </h4>
            {/* <Dropdown.Button menu={menuProps} onClick={handleButtonClick} className="w-auto">
              <h6 className="fw-medium mb-0">Sort by</h6>
            </Dropdown.Button> */}
          </div>
          <div>
            {clientDataList?.length > 0 && (
              <LDProjectsCard
                projectCardData={clientDataList}
                isNotSwiper
                isBtn
                handleClickStatusUpdate={handleClickStatusUpdate}
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

export default ClientListPending;
