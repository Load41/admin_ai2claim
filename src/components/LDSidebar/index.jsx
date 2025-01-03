import React, { useState } from "react";
import { Layout, Menu, Modal, theme } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { svgIcons } from "../../constants/icons";
import { logo } from "../../constants/imageData";
import { clsx } from "clsx";
import { LDButton } from "../LDButton";
import styles from "./LDSidebar.module.css";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <>
      <Link to="/">Dashboard</Link>
    </>,
    "/",
    svgIcons.trackingDashbaord
  ),
  getItem(
    <>
      <h6 className="mb-0">Pending files</h6>
    </>,
    "pending",
    svgIcons.pendingListIcon,
    [
      getItem(
        <>
          <Link to="/management-list-pending">Management file</Link>
        </>,
        "/management-list-pending",
        svgIcons.directFreight
      ),
      getItem(
        <>
          <Link to="/crew-list-pending">Crew file</Link>
        </>,
        "/crew-list-pending",
        svgIcons.viewTruckPath
      ),
    ]
  ),
  getItem(
    <>
      <Link to="/check-files">Check Files(50+)</Link>
    </>,
    "/check-files",
    svgIcons.dat
  ),
  getItem(
    <>
      <Link to="/client-list">Client list</Link>
    </>,
    "/client-list",
    svgIcons.viewTruckStop
  ),
  getItem(
    <>
      <Link to="/crew-list">Crew list</Link>
    </>,
    "/crew-list",
    svgIcons.viewTruckPath
  ),
  getItem(
    <>
      <Link to="/management-list">Management list</Link>
    </>,
    "/management-list",
    svgIcons.directFreight
  ),
  getItem(
    <>
      <h6 className="mb-0">Rejected files</h6>
    </>,
    "rejected",
    svgIcons.fileFillIcon,
    [
      getItem(
        <>
          <Link to="/management-rejected">Management</Link>
        </>,
        "/management-rejected",
        svgIcons.crosshairFillIcon
      ),
      getItem(
        <>
          <Link to="/crew-rejected">Crew</Link>
        </>,
        "/crew-rejected",
        svgIcons.focusFillIcon
      ),
    ]
  ),
  getItem(
    <>
      <Link to="/transactions-report">Transactions</Link>
    </>,
    "/transactions-report",
    svgIcons.bulkPost
  ),
  getItem(
    <>
      <Link to="/complaints-queries">Complaints(70+)</Link>
    </>,
    "/complaints-queries",
    svgIcons.singlePost
  ),
  getItem(
    <>
      <Link to="/approved-things">Approved things</Link>
    </>,
    "/approved-things",
    svgIcons.shippersList
  ),
  getItem(
    <>
      <h6 className="mb-0">Account</h6>
    </>,
    "account",
    svgIcons.consigneeList,
    [
      getItem(
        <>
          <Link to="/edit-profile">Edit</Link>
        </>,
        "/edit-profile",
        svgIcons.editIcon
      ),
      getItem(
        <>
          <Link to="/change-password">Change password</Link>
        </>,
        "/change-password",
        svgIcons.changePasswordIcon
      ),
    ]
  ),
  getItem(
    <>
      <Link to="/about-us">About</Link>
    </>,
    "/about-us",
    svgIcons.history
  ),
  getItem(<>Logout</>, "logout", svgIcons.logOut),
];

export const LDSidebar = ({ mainContentWrap }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // logout modal js start
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClickMenu = (data) => {
    // console.log({ data });
    if (data?.key == "14") {
      showModal();
    }
  };
  const handleClickLogout = (data) => {
    setIsModalOpen(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.clear();
    navigate("/login");
  };
  // logout modal js end

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={"250"}
        className=""
        breakpoint="xl"
      >
        <div
          className={clsx(
            styles.sidebarHead,
            "d-flex align-items-center justify-content-center"
          )}
        >
          <img
            src={logo}
            className={clsx(styles.logo, "img-fluid sidebar-logo")}
            alt=""
          />
          <i
            className={clsx(
              styles.ai2Text,
              "fw-bold h2 mb-0 text-white ai2Text"
            )}
          >
            AI2
          </i>
        </div>
        <Menu
          selectedKeys={[location.pathname]} // Dynamically set active key
          mode="inline"
          items={items}
        />
      </Sider>
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
    </Layout>
  );
};
