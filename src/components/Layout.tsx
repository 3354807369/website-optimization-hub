import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SiteFooter from "./SiteFooter";

const Layout = () => (
  <>
    <NavBar />
    <div className="pt-16">
      <Outlet />
    </div>
    <SiteFooter />
  </>
);

export default Layout;
