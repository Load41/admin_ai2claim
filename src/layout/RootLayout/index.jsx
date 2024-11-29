import { Outlet } from "react-router-dom";
import { LDHeader, LDSidebar } from "../../components";
import { LDFooter } from "../../components/LDFooter";

export const RootLayout = () => {
  return (
    <div className="d-flex vw-100">
      <LDSidebar />
      <main className="w-100 overflow-y-auto">
        <LDHeader />
        <Outlet />
        <LDFooter />
      </main>
    </div>
  );
};
