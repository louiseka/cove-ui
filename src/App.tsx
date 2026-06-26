import { Outlet } from "react-router";

import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteNav from "./components/SiteNav/SiteNav";
import SiteFooter from "./components/SiteFooter/SiteFooter";

const App = () => {
  return (
    <div className="app">
      <SiteHeader />
      <div className="app__body">
        <SiteNav />
        <main className="wrapper">
          <Outlet />
        </main>
      </div>
      <SiteFooter />
    </div>
  );
};

export default App;
