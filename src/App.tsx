import { Outlet } from "react-router";

import Components from "./pages/Components/Components";
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
