import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { svgIcons } from "../../../constants/icons";
import { LDButton } from "../../../components";
import { LDInput } from "../../../components/LDInput";
import styles from "./../EditProfile.module.css";

const ChangePassword = () => {
  return (
    <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
            <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
                <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
                <h4 className="text-bleu-de-france-one mb-0">Account</h4>
                <span>{svgIcons.doubleRightArrowIcon}</span>
                <h4 className="mb-0">
                  Change password
                </h4>
            </div>
        </div>
        <div className={clsx(styles.profileUpdateContentWerap, "text-center d-flex w-100 mx-auto")}> 
          <div className="m-auto w-100">
              <LDInput
                  id="Old password"
                  dataTestId="oldPassword"
                  name="oldPassword"
                  // value={loginData?.oldPassword}
                  type="password"
                  placeholder="Enter old password"
                  handleChange={() => {return false}}
                  className={clsx(styles.authField)}
                  suffix={svgIcons.eyeIcon}
                  // errorMessage={validateMessages?.email}
              />
              <LDInput
                  id="New password"
                  dataTestId="newPassword"
                  name="newPassword"
                  // value={loginData?.newPassword}
                  type="password"
                  placeholder="Enter new password"
                  handleChange={() => {return false}}
                  className={clsx(styles.authField)}
                  suffix={svgIcons.eyeIcon}
                  // errorMessage={validateMessages?.email}
              />
              <LDButton
                type="fill"
                shape={"round"}
                iconPosition={"end"}
                isSmallBtn
                isFillBtn
                customClass={clsx("w-100")}
                handleClick={() => {return false}}
            >
                Save
            </LDButton>
          </div>
        </div>
   </div>
  );
};

export default ChangePassword;
