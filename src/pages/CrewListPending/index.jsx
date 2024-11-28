import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { LDPagination, LDProjectsCard } from "../../components";
import { crewListPendingData } from "../../constants/data";
import styles from "./CrewListPending.module.css";
import { Dropdown } from "antd";
const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: 'Neweast',
    key: '1',
  },
  {
    label: 'Oldest',
    key: '2',
  },
  {
    label: 'Alphabetical',
    key: '3',
  },
  {
    label: 'Rating',
    key: '4',
  },
  {
    label: 'Finest',
    key: '5',
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const CrewListPending = () => {
  return (
   <>
     <div className={clsx("admin-content")}>
      <h3 className="text-bleu-de-france-one mb-0">Pending List</h3>
      <div className="w-100 mt-5">
        <div className="d-flex align-items-center justify-content-between gap-4 w-100">
            <h4 className="mb-0">Crew<span className="ps-2">(15)</span></h4>
            <Dropdown.Button menu={menuProps} onClick={handleButtonClick} className="w-auto">
              <h6 className="fw-medium mb-0">Sort by</h6>
            </Dropdown.Button>
        </div>
        <div>
            <LDProjectsCard projectCardData={crewListPendingData} isNotSwiper isBtn/>
            <div className="w-100 d-flex justify-content-center mt-4 pt-3">
                <LDPagination defaultCurrent={1} total={40}/>
            </div>
        </div>
      </div>
   </div>
   </>
  );
};

export default CrewListPending;
