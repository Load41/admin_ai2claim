import React, { useState } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { USFlag } from "../../constants/imageData";
import { svgIcons } from "../../constants/icons";
import styles from "./LDFooter.module.css";

export const LDFooter = ({}) => {
  const items = [
    {
      label: (
        <div className="d-flex align-items-center gap-4">
          <h5 className="h5 mb-0">USA</h5>
          <img src={USFlag} className="" alt="Ai2claim inc" />
        </div>
      ),
      key: "0",
    },
  ];
  return (
    <>
      <footer
        className={clsx(
          "d-flex align-items-center flex-column flex-md-row w-100 gap-4 gap-md-3"
        )}
      >
        <h5 className="text-black mt-2 mb-md-0 order-2 order-md-1">
          &copy; 2024 Ai2claim inc
        </h5>
        <div
          className={clsx(
            styles.footerOption,
            "d-flex align-items-center justify-content-between justify-content-md-start ms-md-auto order-1 order-md-2 pb-3 pb-md-0"
          )}
        >
          <Link
            to="/coming-soon"
            className="text-black h5 mb-0 text-center text-sm-start"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/coming-soon"
            className="text-black h5 mb-0 text-center text-sm-start"
          >
            Privacy policy
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="cursor-pointer"
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="text-black h5 mb-0 d-flex align-items-center gap-3"
            >
              <img src={USFlag} className="" alt="Ai2claim inc" />
              US
              <span className={clsx(styles.dropDownIcon)}>
                {svgIcons.downArrowIcon}
              </span>
            </a>
          </Dropdown>
        </div>
      </footer>
    </>
  );
};
