import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="name">Dinesh Karnati</div>
          <div className="desktopmenu-container">
            <div className="desktopmenu">
              <Link
                className="desktopMenuListItem"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
              <Link
                className="desktopMenuListItem"
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
              >
                About
              </Link>
              <Link
                className="desktopMenuListItem"
                to="skills"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Skills
              </Link>
              <Link
                className="desktopMenuListItem"
                to="experience"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Experience
              </Link>
              <Link
                className="desktopMenuListItem"
                to="projects"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Projects
              </Link>
            </div>
          </div>
          <button
            className="dropdown-toggle"
            aria-label="Toggle menu"
            onClick={toggleDropdown}
          >
            &#9776;
          </button>
        </div>
        <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
          <Link
            className="dropdownMenuItem"
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsDropdownOpen(false)}
          >
            Home
          </Link>
          <Link
            className="dropdownMenuItem"
            to="about"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => setIsDropdownOpen(false)}
          >
            About
          </Link>
          <Link
            className="dropdownMenuItem"
            to="skills"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => setIsDropdownOpen(false)}
          >
            Skills
          </Link>
          <Link
            className="dropdownMenuItem"
            to="experience"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => setIsDropdownOpen(false)}
          >
            Experience
          </Link>
          <Link
            className="dropdownMenuItem"
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => setIsDropdownOpen(false)}
          >
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
