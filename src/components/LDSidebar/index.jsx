import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Modal, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { svgIcons } from "../../constants/icons";
import { logo } from "../../constants/imageData";
import { clsx } from "clsx";
import styles from "./LDSidebar.module.css";
import { LDButton } from "../LDButton";
const { Header, Content, Footer, Sider } = Layout;
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
    "1",
    svgIcons.trackingDashbaord
  ),
  // getItem(<><Link to="/coming-soon">Pending files</Link></>, '2', svgIcons.pendingListIcon),
  getItem(
    <>
      <h6 className="mb-0">Pending files</h6>
    </>,
    "2",
    svgIcons.pendingListIcon,
    [
      getItem(
        <>
          <Link to="/management-list-pending">Management</Link>
        </>,
        "20",
        svgIcons.directFreight
      ),
      getItem(
        <>
          <Link to="/crew-list-pending">Crew list</Link>
        </>,
        "21",
        svgIcons.viewTruckPath
      ),
      // getItem(<><Link to="/client-list-pending">Client list</Link></>, '22', svgIcons.viewTruckStop),
    ]
  ),
  //   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem(
    <>
      <Link to="/check-files">Check Files(50+)</Link>
    </>,
    "3",
    svgIcons.dat
  ),
  getItem(
    <>
      <Link to="/client-list">Client list</Link>
    </>,
    "4",
    svgIcons.viewTruckStop
  ),
  getItem(
    <>
      <Link to="/crew-list">Crew list</Link>
    </>,
    "5",
    svgIcons.viewTruckPath
  ),
  getItem(
    <>
      <Link to="/management-list">Management list</Link>
    </>,
    "6",
    svgIcons.directFreight
  ),
  getItem(
    <>
      <h6 className="mb-0">Rejected files</h6>
    </>,
    "7",
    svgIcons.fileFillIcon,
    [
      getItem(
        <>
          <Link to="/management-rejected">Management</Link>
        </>,
        "71",
        svgIcons.crosshairFillIcon
      ),
      getItem(
        <>
          <Link to="/crew-rejected">Crew</Link>
        </>,
        "72",
        svgIcons.focusFillIcon
      ),
    ]
  ),

  getItem(
    <>
      <Link to="/coming-soon">Transactions</Link>
    </>,
    "8",
    svgIcons.bulkPost
  ),
  getItem(
    <>
      <Link to="/complaints-queries">Complaints(70+)</Link>
    </>,
    "9",
    svgIcons.singlePost
  ),
  getItem(
    <>
      <Link to="/approved-things">Approved things</Link>
    </>,
    "10",
    svgIcons.shippersList
  ),
  // getItem(<><Link to="/coming-soon">Account</Link></>, '10', svgIcons.consigneeList),
  getItem(
    <>
      <h6 className="mb-0">Account</h6>
    </>,
    "11",
    svgIcons.consigneeList,
    [
      getItem(
        <>
          <Link to="/edit-profile">Edit</Link>
        </>,
        "111",
        svgIcons.editIcon
      ),
      getItem(
        <>
          <Link to="/change-password">Change password</Link>
        </>,
        "112",
        svgIcons.changePasswordIcon
      ),
    ]
  ),
  getItem(
    <>
      <Link to="/about-us">About</Link>
    </>,
    "12",
    svgIcons.history
  ),
  // getItem(<><Link to="/coming-soon">Logout</Link></>, '12', svgIcons.history),
  // getItem(<><Link to="/coming-soon">Trucks</Link></>, '13', svgIcons.trucks),
  getItem(<>Logout</>, "13", svgIcons.logOut),
];

export const LDSidebar = ({ mainContentWrap }) => {
  const navigate = useNavigate();
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

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
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
        <div className="demo-logo-vertical" />
        <Menu
          onClick={handleClickMenu}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      {/* <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
            asdas
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
        
      </Layout> */}
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
