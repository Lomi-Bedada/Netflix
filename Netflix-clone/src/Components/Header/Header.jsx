import "./Header.css";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import natflixlogo from "../../assets/images/natflixlogo.png";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_lift">
          <ul>
            <li>
              <img
                src={natflixlogo}
                alt="netflix logo"
                width="80"
                height="30"
              />
            </li>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylists</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDownwardIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
