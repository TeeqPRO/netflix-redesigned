import React from "react";
import "./Navbar.css";
import "./MobileNavbar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Desktop-Navbar">
        <div className="Left-Desktop-Navbar">
          <div className="Desktop-Navbar-1">
            <div className="Desktop-Navbar-1-Container">
              <a href="index.html" className="Logo-Btn">
                <img src={assets.Logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="Right-Desktop-Navbar">
          <div className="Desktop-Navbar-2">
            <div className="Desktop-Navbar-2-Btn-Container selected">
              <div className="Text">
                <a href="Home.html">Home</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Desktop-Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Movies.html">Movies</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Desktop-Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Series.html">Series</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Desktop-Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Mylist.html">My list</a>{" "}
                {/*Change to unfolding list later*/}
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
          </div>
          <div className="Desktop-Navbar-3">
            <div className="Desktop-Navbar-3-Container">
              <div className="Search-Button-Container">
                <a href="Search.html">
                  <img src={assets.Search} alt="Search" />
                </a>
              </div>
            </div>
            <div className="Desktop-Navbar-3-Container">
              <div className="Notifications-Button-Container">
                <a href="Notifications.html">
                  <img src={assets.Notifications} alt="Notifications" />
                </a>
              </div>
            </div>
          </div>
          <div className="Desktop-Navbar-4">
            <div className="Desktop-Navbar-4-Container">
              <div className="Avatar-Container">
                <a href="Profile.html">
                  <img src={assets.Avatar} alt="Avatar" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version of Mobile-Navbar */}

      <div className="Mobile-Navbar">
        <div className="Left-Mobile-Navbar">
          <div className="Mobile-Navbar-1">
            <div className="Mobile-Navbar-1-Container">
              <a href="index.html" className="Logo-Btn">
                <img src={assets.LogoN} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="Right-Mobile-Navbar">
          <div className="Mobile-Navbar-2">
            <div className="Mobile-Navbar-2-Btn-Container selected">
              <div className="Text">
                <a href="Home.html">Home</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Mobile-Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Movies.html">Movies</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Mobile-Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Series.html">Series</a>
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
            <div className="Mobile-Navbar-2-Btn-Container">
              <div className="Text">
                <a href="Mylist.html">My list</a>{" "}
                {/*Change to unfolding list later*/}
                <div className="dot">
                  <img src={assets.SelectedDot} alt="Dot" />
                </div>
              </div>
            </div>
          </div>
          <div className="Mobile-Navbar-3">
            <div className="Mobile-Navbar-3-Container">
              <div className="Search-Button-Container">
                <a href="Search.html">
                  <img src={assets.Search} alt="Search" />
                </a>
              </div>
            </div>
            <div className="Mobile-Navbar-3-Container">
              <div className="Notifications-Button-Container">
                <a href="Notifications.html">
                  <img src={assets.Notifications} alt="Notifications" />
                </a>
              </div>
            </div>
          </div>
          <div className="Mobile-Navbar-4">
            <div className="Mobile-Navbar-4-Container">
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
