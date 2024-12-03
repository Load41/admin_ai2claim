import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { svgIcons } from "../../constants/icons";
import styles from "./LDSidebar.module.css";
import { logo } from "../../constants/imageData";
import { clsx } from "clsx";
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
      <Link to="/coming-soon">Check Files(50+)</Link>
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
      <Link to="/coming-soon">Transactions</Link>
    </>,
    "7",
    svgIcons.bulkPost
  ),
  getItem(
    <>
      <Link to="/coming-soon">Complaints(70+)</Link>
    </>,
    "8",
    svgIcons.singlePost
  ),
  getItem(
    <>
      <Link to="/coming-soon">Approved things</Link>
    </>,
    "9",
    svgIcons.shippersList
  ),
  // getItem(<><Link to="/coming-soon">Account</Link></>, '10', svgIcons.consigneeList),
  getItem(
    <>
      <h6 className="mb-0">Account</h6>
    </>,
    "10",
    svgIcons.consigneeList,
    [
      getItem(
        <>
          <Link to="/coming-soon">Edit</Link>
        </>,
        "101",
        svgIcons.editIcon
      ),
      getItem(
        <>
          <Link to="/coming-soon">Change password</Link>
        </>,
        "102",
        svgIcons.changePasswordIcon
      ),
    ]
  ),
  getItem(
    <>
      <Link to="/coming-soon">About</Link>
    </>,
    "11",
    svgIcons.history
  ),
  // getItem(<><Link to="/coming-soon">Logout</Link></>, '12', svgIcons.history),
  // getItem(<><Link to="/coming-soon">Trucks</Link></>, '13', svgIcons.trucks),
  getItem(<>Logout</>, "14", svgIcons.logOut),
];

export const LDSidebar = ({ mainContentWrap }) => {
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
        breakpoint="lg"
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
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
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
    </Layout>
  );
};
