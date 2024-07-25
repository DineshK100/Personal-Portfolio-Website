import React from "react";
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="desktopmenu">
                <Link className="desktopMenuListItem" to="home">Home</Link>
                <Link className="desktopMenuListItem" to="about">About</Link>
                <Link className="desktopMenuListItem" to="projects">Projects</Link>
            </div>
            <button className="desktopMenubtn"> Contact Me
            </button>
        </nav>
    );
};

export default Navbar;
