import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";
import SiteFooter from "./SiteFooter";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <div className={isHome ? "" : "pt-16"}>
        <Outlet />
      </div>
      <SiteFooter />
    </>
  );
};

export default Layout;
