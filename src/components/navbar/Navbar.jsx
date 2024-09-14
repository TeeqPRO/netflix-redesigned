import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      setActive(true);
    } else {
      setActive(false);
    }
  })

  return (
    <div className="Navbar">
      <div className={active ? "activeNavbar":""}>
        <div className="Left-Navbar">
          <div className="Navbar-1">
            <div className="Navbar-1-Container">
              <a href="index.html" className="Logo-Btn">
                <img src={assets.Logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="Right-Navbar">
          <div className="Navbar-2">
            <div className="Navbar-2-Btn-Container selected">
              <div className="Text">
                <a href="Home.html">Home</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Movies.html">Movies</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Series.html">Series</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Mylist.html">My list</a>{" "}
                {/*Change to unfolding list later*/}
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
          </div>
          <div className="Navbar-3">
            <div className="Navbar-3-Container">
              <div className="Search-Button-Container">
                <a href="Search.html">
                  <img src={assets.Search} alt="Search" />
                </a>
              </div>
            </div>
            <div className="Navbar-3-Container">
              <div className="Notifications-Button-Container">
                <a href="Notifications.html">
                  <img src={assets.Notifications} alt="Notifications" />
                </a>
              </div>
            </div>
          </div>
          <div className="Navbar-4">
            <div className="Navbar-4-Container">
              <div className="Avatar-Container">
                <a href="Profile.html">
                  <img src={assets.Avatar} alt="Avatar" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
