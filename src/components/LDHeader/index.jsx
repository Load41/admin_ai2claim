import React, { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";
import {
  companyOne,
  companyTwo,
  logo,
  manWorkerFive,
  manWorkerSix,
} from "../../constants/imageData";
import { Link, useLocation } from "react-router-dom";
import { svgIcons } from "../../constants/icons";
import { LDInput } from "../LDInput";
import { Modal, Popover } from "antd";
import styles from "./LDHeader.module.css";
import { LDButton } from "../LDButton";
import { useNavigate } from "react-router-dom";
import { useAllUserNotificationListHook } from "../../hooks";
import moment from "moment";

export const LDHeader = ({ }) => {
  // logout modal js start
  const { notificationList } = useAllUserNotificationListHook()
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClickLogout = (data) => {
    setIsModalOpen(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {

    return () => {
      if (location?.pathname?.includes("client-detail")) {
        localStorage.setItem("backUrl", location?.pathname)
      }
    }
  }, [location])
  // logout modal js end

  const notificationPopoverData = useMemo(() => {
    return <div className={styles.popoverList}>
      {notificationList &&
        notificationList?.length > 0 &&
        notificationList?.map((items, index) => <Link
          to="/"
          className={clsx("d-flex align-items-center gap-4 text-black")}
          key={index}
        >
          <div
            className={clsx(
              styles.profileIcon,
              "ratio ratio-1x1 rounded-circle flex-0-auto"
            )}
          >
            <img
              src={manWorkerFive}
              className="w-100 h-100 radius-inherit object-fit-cover"
              alt="Ai2claim inc"
            />
          </div>
          <div>
            <h6 className="fw-noraml mb-0 word-break-word">
              <span className="fw-semibold text-bleu-de-france-two me-2 d-inline-flex">
                {items?.body}
              </span>
              {/* was waiting for approval */}
            </h6>
            <p className="mb-0">{moment(items?.createdAt).format(
              `YYYY-MM-DD hh:mm`
            )}</p>
          </div>
        </Link>)}
      {/* <Link
        to="/"
        className={clsx("d-flex align-items-center gap-4 text-black")}
      >
        <div
          className={clsx(
            styles.profileIcon,
            "ratio ratio-1x1 rounded-circle flex-0-auto"
          )}
        >
          <img
            src={companyOne}
            className="w-100 h-100 radius-inherit object-fit-cover"
            alt="Ai2claim inc"
          />
        </div>
        <div>
          <h6 className="fw-noraml mb-0 word-break-word">
            <span className="fw-semibold text-bleu-de-france-two me-2 d-inline-flex">
              Tom
            </span>
            uploaded insurance doc's
          </h6>
          <p className="mb-0">3 mins ago</p>
        </div>
      </Link>
      <Link
        to="/"
        className={clsx("d-flex align-items-center gap-4 text-black")}
      >
        <div
          className={clsx(
            styles.profileIcon,
            "ratio ratio-1x1 rounded-circle flex-0-auto"
          )}
        >
          <img
            src={manWorkerSix}
            className="w-100 h-100 radius-inherit object-fit-cover"
            alt="Ai2claim inc"
          />
        </div>
        <div>
          <h6 className="fw-noraml mb-0 word-break-word">
            <span className="fw-semibold text-bleu-de-france-two me-2 d-inline-flex">
              Rachel
            </span>
            raised a complaint
          </h6>
          <p className="mb-0">4 mins ago</p>
        </div>
      </Link> */}
      <Link to="/" className="text-center pt-4 d-block">
        View More
      </Link>
    </div>
  });
  const settingsPopoverData = (
    <div className={styles.popoverList}>
      <Link to="/" className={clsx("d-block mb-0 text-black h5")}>
        Profile
      </Link>
      <Link to="/" className={clsx("d-block mb-0 text-black h5")}>
        Change password
      </Link>
      <span
        onClick={showModal}
        className={clsx("d-block mb-0 text-black h5 a cursor-pointer")}
      >
        Log out
      </span>
    </div>
  );
  const columnPopoverData = (
    <div className={styles.popoverList}>
      <Link to="/" className={clsx("d-block mb-0 text-black h5")}>
        Contact us
      </Link>
      <Link to="/" className={clsx("d-block mb-0 text-black h5")}>
        Help
      </Link>
      <Link to="/" className={clsx("d-block mb-0 text-black h5")}>
        Rate us
      </Link>
    </div>
  );
  return (
    <>
      <header
        className={clsx(
          styles.header,
          "w-100 d-flex align-items-center justify-content-between position-sticky top-0"
        )}
      >
        {/* <img src={logo} className={clsx(styles.logo, "img-fluid")} alt="Ai2claim inc" /> */}
        {/* <h4 className='mb-0'>Christo Jr.</h4> */}
        {/* <LDInput
          id="searchData"
          dataTestId="searchData"
          name="searchData"
          // value="searchData"
          type="password"
          placeholder="Search"
          handleChange={() => {
            return false;
          }}
          className={clsx(styles.headerSearchBarWrap, "mb-0 search-min-300")}
          suffix={svgIcons.searchIcon}
          isNotBottomSpace
        /> */}
        <div className="d-flex align-items-center gap-5 ms-auto">
          <Popover content={notificationPopoverData} title="Notification">
            <Link to="/" className="text-black">
              {svgIcons.bellIcon}
            </Link>
          </Popover>
          <Popover content={settingsPopoverData}>
            <Link to="/" className="text-black">
              {svgIcons.settingIcon}
            </Link>
          </Popover>
          <Popover content={columnPopoverData}>
            <Link to="/" className="text-black">
              {svgIcons.columnIcon}
            </Link>
          </Popover>
        </div>
      </header>
      {/* logout modal modal start */}
      <Modal
        title=""
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        className="remove-footer-modal"
      >
        <div className="text-center d-flex flex-column gap-5 gap-xxl-4">
          <h2>Confirm</h2>
          <h4>
            Are you sure you want to{" "}
            <span className="text-bleu-de-france-one">logout your account</span>{" "}
            ?
          </h4>
          <div className="d-flex align-items-centr gap-5 justify-content-center mt-3 mt-xxl-2">
            <LDButton
              type="fill"
              shape={"round"}
              iconPosition={"end"}
              isGreenBg
              isSmallBtn
              customClass={clsx("w-50")}
              handleClick={handleClickLogout}
            >
              Yes
            </LDButton>
            <LDButton
              type="fill"
              shape={"round"}
              iconPosition={"end"}
              isRedBg
              isSmallBtn
              customClass={clsx("w-50")}
              handleClick={handleCancel}
            >
              No
            </LDButton>
          </div>
        </div>
      </Modal>
      {/* logout modal modal end */}
    </>
  );
};
