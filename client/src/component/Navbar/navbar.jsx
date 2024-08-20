import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import sun from "../../assets/sun1.png";
import moon from "../../assets/moon1.png";
import "./jquery.js";

const Navbar = () => {
  const header = useRef(null);
  const hamburger = useRef(null);
  const navBar = useRef(null);
  const iconRef = useRef(null);

  // Load saved dark mode preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });  


  // Apply or remove dark mode class on body
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    if (iconRef.current) {
      iconRef.current.src = isDarkMode ? sun : moon;
    }
  }, [isDarkMode]);

  // Handle dark mode toggle and save preference to localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Handle hamburger menu toggle
  const handleham = () => {
    hamburger.current.classList.toggle("active");
    navBar.current.classList.toggle("active");
  };

  useEffect(() => {
    const handleScroll = () => {
      header.current.classList.toggle("shadow", window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    const navLinks = document.querySelectorAll(".nav-link");
    if (navLinks) {
      navLinks.forEach((navLink) => {
        navLink.addEventListener("click", () => {
          hamburger.current.classList.remove("active");
          navBar.current.classList.remove("active");
        });
      });
    }

    window.onscroll = () => {
      navBar.current.classList.remove("active");
      hamburger.current.classList.remove("active");
    };

    const filled = document.querySelector(".filled");
    const updateProgress = () => {
      filled.style.width = `${
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100
      }%`;
      requestAnimationFrame(updateProgress);
    };
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/*============= Progress Bar=========== */}
      <div className="progress-bar">
        <div className="filled"></div>
      </div>
      {/*============= Navbar=========== */}
      <header ref={header}>
        <a href="#" className="logo">
          Rameshwar Tiwari
        </a>
        {/* <!-- Menu bar --> */}
        <div className="hamburger" ref={hamburger} onClick={handleham}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/* <!-- navbar  --> */}
        <ul className="navbar" ref={navBar}>
          <li>
            <a href="#home" className="nav-link active">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
          <a href="#services" className="nav-link">
              Service
            </a>
          </li>
          <li>
           <a href="#contact" className="nav-link">Contact</a>
          </li>
          <img
            id="icon"
            alt="DarkIcon"
            ref={iconRef}
            onClick={toggleDarkMode}
            src={isDarkMode ? sun : moon}
            style={{ cursor: "pointer" }}
          />
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
