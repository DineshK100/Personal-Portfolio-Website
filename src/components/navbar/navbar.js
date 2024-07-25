import React, {useEffect} from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
          const navEl = document.querySelector(".navbar");
          if (window.scrollY >= 56) {
            navEl.classList.add("navbar-scrolled");
          } else {
            navEl.classList.remove("navbar-scrolled");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
        <div className="name">
          <p>Dinesh Karnati</p>
        </div>
        <div className="desktopmenu">
          <a href = "#intro-wrapper" className="desktopMenuListItem" >Home</a>
          <a className="desktopMenuListItem" >About</a>
          <a className="desktopMenuListItem">Projects</a>
          <a className="desktopMenuListItem">Skills</a>
          <a className="desktopMenuListItem">Experience</a>
          <a className="desktopMenuListItem">Social Media</a>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
