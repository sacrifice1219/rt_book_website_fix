import React from "react";
import { FootersLinksData } from "../../Data/Data";
import './Copyright.css'

const Copyright = () => {
  return (
    <div className="footer-copyright">
      <div className="container copyright-container">
        <p>2024 &copy;. All rights reserved</p>
        <div className="footer-socials">
          {FootersLinksData.socials.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Copyright;
