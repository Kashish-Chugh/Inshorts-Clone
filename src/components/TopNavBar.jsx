import React from "react";
import "./topNavBar.css";
import SwipeableDrawer from "./SwipeableDrawer";
const TopNavBar = ({ setCategory }) => {
  return (
    <div>
      <div className="nav">
        <div className="icon">
          <SwipeableDrawer setCategory={setCategory} />
        </div>
        <img
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          alt="icon"
          height="80%"
        />
      </div>
    </div>
  );
};

export default TopNavBar;
