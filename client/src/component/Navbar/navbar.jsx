import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-scroll";
import sun from "../../assets/sun1.png";
import moon from "../../assets/moon1.png";
import "./jquery.js";

const Navbar = () => {
  const header = React.useRef(null);
  const hamburger = React.useRef(null);
  const navBar = React.useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // for darkmode handele
  const iconRef = useRef();
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
  }, [isDarkMode]);

  //this is for hamburger menu nav
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
    // when click on hamburger after scroll hamburger will hide.
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
      <div className='progress-bar'>
        <div className='filled'></div>
      </div>
      {/*============= Navbar=========== */}
      <header ref={header}>
        <a href='#' className='logo'>
          Rameshwar Tiwari
        </a>
        {/* <!-- Menu bar --> */}
        <div className='hamburger' ref={hamburger} onClick={handleham}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        {/* <!-- navbar  --> */}
        <ul className='navbar' ref={navBar}>
          <li>
            <a href='#home' className='nav-link active'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='nav-link'>
              About
            </a>
          </li>
          <li>
            <a href='#skills' className='nav-link'>
              Skills
            </a>
          </li>
          <li>
            <Link
              to='service'
              smooth={true}
              duration={100}
              delay={0}
              className='nav-link'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={100}
              delay={0}
              className='nav-link'
            >
              Contact
            </Link>
          </li>
          <img
            id='icon'
            ref={iconRef}
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              iconRef.current.src = isDarkMode ? moon : sun;
            }}
            src={moon}
          />
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
