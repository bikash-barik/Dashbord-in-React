import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// pages import
import Dashboard from "./Pages/Dashboard";
import AddNewMagazin from "./Pages/AddNewMagazin";
import FreeCoupon from './Pages/FreeCoupan';
import SubAccount from "./Pages/SubAccount";
import LicenceeAccount from "./Pages/LicenceeAccount";
import DownloaadReporrts from "./Pages/DownloaadReporrts";
import UpdateBankDetails from "./Pages/UpdateBankDetails";
import Tutorials from "./Pages/Tutorials";
import Promote from "./Pages/Promote";



function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {/* {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))} */}

          <Switch>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path={"/AddNewMagazin"}>
              <AddNewMagazin />
            </Route>
            <Route path={"/AddNewNewspaper"}>
              <AddNewMagazin />
            </Route>
            <Route path={"/FreeCoupon"}>
              <FreeCoupon />
            </Route>
            <Route path={"/SubAccount"}>
              <SubAccount />
            </Route>
            <Route exact path={"/LicenceeAccount"}>
              <LicenceeAccount />
            </Route>
            <Route path={"/DownloaadReporrts"}>
              <DownloaadReporrts />
            </Route>
            <Route path={"/UpdateBankDetails"}>
              <UpdateBankDetails />
            </Route>
            <Route path={"/Tutorials"}>
              <Tutorials />
            </Route>
            <Route path={"/Promote"}>
              <Promote />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
