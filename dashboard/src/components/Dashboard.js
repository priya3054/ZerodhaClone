import React from "react";
import { Route, Routes } from "react-router-dom";

import TopBar from "./TopBar";   // ✅ ADD THIS
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div>
      {/* ✅ TOP NAVBAR */}
      <TopBar />

      {/* ✅ PUSH CONTENT BELOW FIXED TOPBAR */}
      <div style={{ marginTop: "10vh" }}>
        <div className="dashboard-container">
          
          {/* LEFT SIDE */}
          <WatchList />

          {/* RIGHT SIDE */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="orders" element={<Orders />} />
              <Route path="holdings" element={<Holdings />} />
              <Route path="positions" element={<Positions />} />
              <Route path="funds" element={<Funds />} />
              <Route path="apps" element={<Apps />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;