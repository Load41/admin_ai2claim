import React from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { svgIcons } from "../../../constants/icons";
import { Collapse } from "antd";
import { ImageTakenData } from "./ImageTakenData";
import { text } from "../../../constants/data";
const ManagementImageUpload = () => {
   // collapse start
   const onChange = (key) => {
    console.log(key);
  };

  const itemsNest = [
    {
      key: '1',
      label: 'Arriving to the property',
      children: <ImageTakenData/>,
    },
    {
      key: '2',
      label: 'Crew check in',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'Installation',
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: 'Pre-Installation',
      children: <p>{text}</p>,
    },
    {
      key: '5',
      label: 'Tear off inspection',
      children: <p>{text}</p>,
    },
  ];
  const items = [
    {
      key: '1',
      label: 'Siding Check list',
      children: <>
        <Collapse defaultActiveKey="1" items={itemsNest} />
      </>,
    },
    {
      key: '2',
      label: 'Soffit Check list ',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'Metal wraps Check List',
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: 'Fascia Check List',
      children: <p>{text}</p>,
    },
    {
      key: '5',
      label: 'Gutter Check List',
      children: <p>{text}</p>,
    },
    {
      key: '6',
      label: 'Roofing Check List',
      children: <p>{text}</p>,
    },
  ];
  // collapse end
  return (
    <div className={clsx("admin-content")}>
       <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
        <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
          <Link
            to="/client-detail/:id"
            className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2"
          >
            {svgIcons.backArrowFillIcon}
          </Link>
          <h4 className="text-bleu-de-france-one mb-0">Client List</h4>
          <b>{svgIcons.doubleRightArrowIcon}</b>
          <h4 className="mb-0">
            Thomas<span className="ps-2"></span>
          </h4>
          <b>{svgIcons.doubleRightArrowIcon}</b>
          <h4 className="mb-0">
            Drimo (Images uploaded by management)
          </h4>
        </div>
      </div>
      {/* collapse start */}
      <Collapse onChange={onChange} items={items} className="mt-5"/>
      {/* collapse end */}
   
    </div>
  );
};

export default ManagementImageUpload;
