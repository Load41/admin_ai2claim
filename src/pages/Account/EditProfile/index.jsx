import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { svgIcons } from "../../../constants/icons";
import { LDButton, LDFileUpload } from "../../../components";
import { manWorkerThree } from "../../../constants/imageData";
import { LDInput } from "../../../components/LDInput";
import styles from "./../EditProfile.module.css";

const EditProfile = () => {
  return (
    <div className={clsx("admin-content")}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 gap-xxl-4">
            <div className="d-flex align-items-center flex-wrap gap-4 gap-xl-3">
                <Link to="/" className="back-next-arrow-wrap flex-0-auto d-flex align-items-center justify-content-center rounded-circle cursor-pointer hover-text-white me-2">{svgIcons.backArrowFillIcon}</Link>
                <h4 className="text-bleu-de-france-one mb-0">Account</h4>
                <span>{svgIcons.doubleRightArrowIcon}</span>
                <h4 className="mb-0">
                  Edit
                </h4>
            </div>
        </div>
        <div className={clsx(styles.profileUpdateContentWerap, "text-center d-flex w-100 mx-auto")}>
          <div className="m-auto w-100">
              <LDFileUpload handleFileChange={() => {return false}} profile={manWorkerThree} className="mb-5" />
              <LDInput
                  id="User name"
                  dataTestId="userName"
                  name="userName"
                  // value={loginData?.userName}
                  type="text"
                  placeholder="Enter user name"
                  handleChange={() => {return false}}
                  className={clsx(styles.authField)}
                  suffix={svgIcons.pencilIcon}
                  // errorMessage={validateMessages?.email}
              />
              <LDInput
                  id="Mobile number"
                  dataTestId="mobileNumber"
                  name="mobileNumber"
                  // value={loginData?.mobileNumber}
                  type="number"
                  placeholder="Enter mobile number"
                  handleChange={() => {return false}}
                  className={clsx(styles.authField)}
                  suffix={svgIcons.pencilIcon}
                  // errorMessage={validateMessages?.email}
              />
              <LDInput
                  id="Email"
                  dataTestId="email"
                  name="email"
                  // value={loginData?.email}
                  type="email"
                  placeholder="Enter email"
                  handleChange={() => {return false}}
                  className={clsx(styles.authField)}
                  suffix={svgIcons.pencilIcon}
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

export default EditProfile;
