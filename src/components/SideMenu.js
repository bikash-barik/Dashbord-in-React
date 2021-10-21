import React, { useEffect, useState } from "react";
import logo from "../assets/logo/540.png";
import user from "../assets/userimg.png";

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-house-door",
  },
  {
    name: "Magazines",
    exact: true,
    to: `/Magazines`,
    iconClassName: "bi bi-book",
    subMenus: [
      { name: "Add New Magazines", to: "/AddNewMagazin" },
      { name: "Add New Newspaper", to: "/AddNew" },
      { name: "Add New ", to: "/Add" },
    ],
  },
  {
    name: "Coupon",
    exact: true,
    to: `/Coupan`,
    iconClassName: "bi bi-cash",
    subMenus: [
      { name: "Free Coupon", to: "/FreeCoupon" },
    ],
  },
  
  
  {
    name: "Accounts",
    exact: true,
    to: `/Accounts`,
    iconClassName: "bi bi-people",
    subMenus: [
      { name: "Sub Account", to: "/SubAccount" },
      { name: "Licencee Account", to: "/LicenceeAccount" },
    ],
  },
  {
    name: "Reports",
    exact: true,
    to: `/content-3`,
    iconClassName: "bi bi-clipboard-data",
    subMenus: [
      { name: "Sale Reports", to: "/Sale Report" },
      { name: "Download Reports", to: "/DownloaadReporrts" },
    ],
  },
  { name: "Update Bank Details", to: `/UpdateBankDetails`, iconClassName: "bi bi-cash" },
  { name: "Tutorials", to: `/Tutorials`, iconClassName: "bi bi-book-half" },
  {
    name: "Promotions",
    exact: true,
    to: `/Promotions`,
    iconClassName: "bi bi-bell",
    subMenus: [
      { name: "Promote", to: "/Promote" },
      { name: "Custom Banners", to: "/CustomBanners" },
    ],
  },

  {
    name: "Analytics",
    exact: true,
    to: `/Analytics`,
    iconClassName: "bi bi-clipboard-data",
    subMenus: [
      { name: "Reading Section", to: "/ReadingSection" },
      { name: "Page Reads", to: "/PageReads" },
      { name: "Events", to: "/Events" },
    ],
  },
  { name: "Help & Support", to: `/design-6`, iconClassName: "bi bi-briefcase" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Avinash Dash</h5>
          <p>avinashdash@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
