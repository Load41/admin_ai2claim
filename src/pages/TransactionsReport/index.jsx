import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { svgIcons } from "../../constants/icons";
import { Collapse } from "antd";
import { ThisMonth } from "./TransactionsAmount/ThisMonth";
import { LastWeek } from "./TransactionsAmount/LastWeek";
import { FifthMonth } from "./TransactionsAmount/FifthMonth";
import styles from "./TransactionsReport.module.css";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
// Transaction amount
export const transactionAmountData = [
  {
    key: '1',
    label: 
    <div className="d-flex align-items-center gap-4">
        <div className="w-50 text-start">
            <h4 className="fw-semibold mb-0">This week</h4>
        </div>
        <div className="w-50 text-end">
            <h4 className="fw-bold mb-0">$71,996.00</h4>
        </div>
    </div>,
    children: <ThisMonth/>,
  },
  {
    key: '2',
    label: 
    <div className="d-flex align-items-center gap-4">
      <div className="w-50 text-start">
          <h4 className="fw-semibold mb-0">Last month</h4>
      </div>
      <div className="w-50 text-end">
          <h4 className="fw-bold mb-0">$01,996.00</h4>
      </div>
    </div>
    ,
    children: <LastWeek/>,
  },
  {
    key: '3',
    label: 
    <div className="d-flex align-items-center gap-4">
      <div className="w-50 text-start">
          <h4 className="fw-semibold mb-0">Fifth month</h4>
      </div>
      <div className="w-50 text-end">
          <h4 className="fw-bold mb-0">$19,996.00</h4>
      </div>
    </div>
    ,
    children: <FifthMonth/>,
  },
];
// Highest Transaction Place
export const highestTransactionPlaceData = [
  {
    key: '1',
    label: 
    <div className="d-flex align-items-center gap-4">
        <div className="w-50 text-start">
            <h4 className="fw-semibold mb-0">This week</h4>
        </div>
        <div className="w-50 text-end">
            <h4 className="fw-bold mb-0">New York $24k</h4>
        </div>
    </div>,
    children: <ThisMonth/>,
  },
  {
    key: '2',
    label: 
    <div className="d-flex align-items-center gap-4">
      <div className="w-50 text-start">
          <h4 className="fw-semibold mb-0">Last month</h4>
      </div>
      <div className="w-50 text-end">
          <h4 className="fw-bold mb-0">New York $25k</h4>
      </div>
    </div>
    ,
    children: <LastWeek/>,
  },
  {
    key: '3',
    label: 
    <div className="d-flex align-items-center gap-4">
      <div className="w-50 text-start">
          <h4 className="fw-semibold mb-0">Fifth month</h4>
      </div>
      <div className="w-50 text-end">
          <h4 className="fw-bold mb-0">New York $27k</h4>
      </div>
    </div>
    ,
    children: <FifthMonth/>,
  },
];
// graph js start
function getData() {
  return [
    { month: "New York", min: 2 },
    { month: "Los Angeles", min: 4 },
    { month: "Chicago", min: 5.5 },
    { month: "Houstan", min: 3 },
    { month: "Phoenix", min:  7 },
    { month: "Philadelphia", min: 1 },
    { month: "San Antonio", min: 8 },
  ];
}
// graph js end
const TransactionsReport = () => {
  // graph js start
  const [options, setOptions] = useState({
    title: {
      text: "Transactions",
    },
    subtitle: {
      text: "Place",
    },
    data: getData(),
    series: [
      {
        type: "line",
        xKey: "month",
        xName: "Month",
        yKey: "min",
        yName: "Transactions",
        interpolation: { type: "smooth" },
        marker: {
          fill: '#3dbb42',
          size: 17,
          stroke: '#000000',
          strokeWidth: 1,
          shape: 'diamond',
      },
      },
    ],
  });
  // graph js end
  return (
    <div className={clsx("admin-content")}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
        <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
          <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
          <h4 className="text-bleu-de-france-one mb-0">Transactions Report</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5 overflow-x-auto">
        <AgCharts options={options} />
        </div>
        <div className="col-lg-6 col-xxl-8 mt-5">
          <div className={clsx(styles.transactionsReportBoxWrap, "h-100")}>
              <h4>Transaction amount :-</h4>
              <Collapse accordion items={transactionAmountData} className="mt-4 bg-white" expandIconPosition="end"/>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5">
          <div className={clsx(styles.transactionsReportBoxWrap, "h-100")}>
              <h4>Highest Transaction Place :-</h4>
              <Collapse accordion items={highestTransactionPlaceData} className="mt-4 bg-white" expandIconPosition="end"/>
          </div>
        </div>
      </div>
   </div>
  );
};

export default TransactionsReport;
