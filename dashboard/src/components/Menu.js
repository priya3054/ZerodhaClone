import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" alt="logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link to="/dashboard" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* 👤 PROFILE SECTION */}
        <div style={{ position: "relative" }}>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">
              {user?.username?.slice(0, 2).toUpperCase() || "U"}
            </div>
            <p className="username">{user?.username || "USERID"}</p>
          </div>

          {/* 🔽 DROPDOWN */}
          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                background: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                zIndex: 1000,
                minWidth: "150px",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/dashboard/profile")}
              >
                Profile
              </div>

              <div
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  color: "red",
                }}
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
