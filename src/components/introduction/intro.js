import React from "react";
import './intro.css';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introInfo">
                <span className="hi">Hi, my name is</span>
                <h1 className="introName">Dinesh Karnati.</h1>
                <h2 className="introTagline">Passionate Software Engineer</h2>
                <p className="introDescription">
                    I'm a software engineer
                </p>
                <a href="#course" className="introButton">Check out my Github!</a>
            </div>
        </section>
    );
}

export default Intro;
