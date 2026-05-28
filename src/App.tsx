import { Outlet } from "react-router";

import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteNav from "./components/SiteNav/SiteNav";
import SiteFooter from "./components/SiteFooter/SiteFooter";

const App = () => {
  return (
    <>
      <SiteHeader />
      <div className="wrapper">
        <SiteNav />
        <Outlet />
      </div>
      <SiteFooter />
    </>
  );
};

export default App;
