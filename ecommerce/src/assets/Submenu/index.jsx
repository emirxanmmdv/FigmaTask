import React from "react";
import "./index.scss";
import { IoIosArrowForward } from "react-icons/io";

const SubMenu = () => {
  return (
    <div className="container">
      <nav id="subMenu">
        <ul>
          <li>
            Woman’s Fashion
            <IoIosArrowForward />
          </li>
          <li>
            Men’s Fashion
            <IoIosArrowForward />
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </nav>
    </div>
  );
};

export default SubMenu;
