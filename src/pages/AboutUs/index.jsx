import React from "react";
import { clsx } from "clsx";
import { svgIcons } from "../../constants/icons";
import { Link } from "react-router-dom";
import { aboutUs } from "../../constants/imageData";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={clsx("admin-content")}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
        <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
          <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
          <h4 className="text-bleu-de-france-one mb-0">About Us</h4>
        </div>
      </div>
      <div className={clsx(styles.aboutUsRow, "row mt-4 mt-xxl-0")}>
        <div className="col-6 col-md-3 col-xxl-2 mt-5">
          <h4 className="mb-0 fw-semibold">Version :-</h4>
        </div>
        <div className="col-6 col-md-9 col-xxl-10 mt-5">
          <p className="mb-0 h5 fw-semibold text-clear-blue">1.0.00</p>
        </div>
        <div className="col-6 col-md-3 col-xxl-2 mt-5">
          <h4 className="mb-0 fw-semibold">Launch date :-</h4>
        </div>
        <div className="col-6 col-md-9 col-xxl-10 mt-5">
          <p className="mb-0 h5 fw-normal">25/12/2024</p>
        </div>
        <div className="col-md-3 col-xxl-2 mt-5">
          <h4 className="mb-0 fw-semibold">Mission :-</h4>
        </div>
        <div className="col-md-9 col-xxl-10 mt-3 mt-md-5">
          <p className="mb-0 h5 fw-normal lh-base">Our Mission is to build a relation between  client, crew & management company for a hastle free  processing.</p>
        </div>
      </div>
      <div className="text-center w-100 mt-5">
        <img src={aboutUs} className="img-fluid" alt="Ai2claim inc" />
      </div>
    </div>
  );
};

export default AboutUs;
