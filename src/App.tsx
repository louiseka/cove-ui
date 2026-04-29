import { Outlet } from "react-router";

import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteNav from "./components/SiteNav/SiteNav";

const App = () => {
  return (
    <>
      <SiteHeader />
      <div className="wrapper">
        <SiteNav />
        <Outlet />
      </div>
    </>
  );
};

export default App;
