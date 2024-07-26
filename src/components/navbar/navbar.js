import React, { useEffect } from "react";
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
      <nav class="navbar">
        <div class="navbar-content">
          <div class="name">Dinesh Karnati</div>
          <div class="desktopmenu">
            <a class="desktopMenuListItem" href="#home">
              Home
            </a>
            <a class="desktopMenuListItem" href="#about">
              About
            </a>
            <a class="desktopMenuListItem" href="#projects">
              Projects
            </a>
            <a class="desktopMenuListItem" href="#skills">
              Skills
            </a>
            <a class="desktopMenuListItem" href="#experience">
              Experience
            </a>
            <a class="desktopMenuListItem" href="#social-media">
              Social Media
            </a>
          </div>
          <button class="dropdown-toggle" aria-label="Toggle menu">
            &#9776;
          </button>
        </div>
        <div class="dropdown-menu">
          <a class="dropdownMenuItem" href="#home">
            Home
          </a>
          <a class="dropdownMenuItem" href="#about">
            About
          </a>
          <a class="dropdownMenuItem" href="#projects">
            Projects
          </a>
          <a class="dropdownMenuItem" href="#skills">
            Skills
          </a>
          <a class="dropdownMenuItem" href="#experience">
            Experience
          </a>
          <a class="dropdownMenuItem" href="#social-media">
            Social Media
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
