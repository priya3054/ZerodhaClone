import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div
      className="topbar-container"
      style={{
        position: "fixed",   // ✅ ensures it stays at top
        top: 0,
        left: 0,
        width: "100%",
        height: "10vh",
        background: "#fff",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* LEFT SIDE */}
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent">+0.25%</p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent">+0.30%</p>
        </div>
      </div>

      {/* RIGHT SIDE (MENU) */}
      <div style={{ marginRight: "20px" }}>
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;
