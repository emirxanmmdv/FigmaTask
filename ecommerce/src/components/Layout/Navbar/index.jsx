import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import "./index.scss";

const Navbar = () => {
  return (
    <nav id="navbarSection">
        <div className="navContents">
          <div className="logo">
            <h2>Exclusive</h2>
          </div>
          <div className="navMenus">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div className="Icons">
            <div className="searchBar">
              <form>
                <input type="text" placeholder="What are you looking for?" />
                <CiSearch />
              </form>
            </div>
            <div className="Shopping">
              <div className="wishListIcon">
                <CiHeart />
              </div>
              <div className="basketIcon">
                <IoCartOutline />
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
