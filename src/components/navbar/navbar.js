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
              >
                About
              </Link>
              <Link
                className="desktopMenuListItem"
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
              <Link
                className="desktopMenuListItem"
                to="experience"
                smooth={true}
                duration={500}
              >
                Experience
              </Link>
              <Link
                className="desktopMenuListItem"
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </div>
          </div>
          <button className="dropdown-toggle" aria-label="Toggle menu">
            &#9776;
          </button>
        </div>
        <div className="dropdown-menu">
          <Link
            className="dropdownMenuItem"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="dropdownMenuItem"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="dropdownMenuItem"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="dropdownMenuItem"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="dropdownMenuItem"
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
