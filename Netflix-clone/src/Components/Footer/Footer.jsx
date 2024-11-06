import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_outer-counter">
      <div className="footer_inner_counter">
        <div className="footer_icons">
          <ul>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Describtion</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jops</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gifts Card</li>
              <li>Terms of used</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media center</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy_write">&copy;1997-2024 Netflix,inc.</div>
      </div>
    </div>
  );
};

export default Footer;
