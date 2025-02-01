import React from "react";

function footer() {
  return (
    <section className="reveal">
      <footer className='footer'>
        <div className='footer__addr'>
          <h1 className='footer__logo'>Rameshwar Tiwari</h1>

          <h2>Address</h2>

          <address>
            Kandivali East, Thane<br></br>
            PinCode:400101<br></br>
            Mumabi Maharastra
            <br />
            Phone: +91 9026767618
            {/* <a
              className='footer__btn btn-hover color-6'
              href='mailto:rameshwar.kes@gmail.com'
            >
              Email Us
            </a> */}
          </address>
          <div className='footer-social right-section'>
            <a
              href='https://www.instagram.com/r_tiwari_0'
              target='_blank' rel="noreferrer"
            >
              <i className='bx bxl-instagram'></i>
            </a>
            &nbsp;
            <a href='https://twitter.com/rameshwart10' target='_blank' rel="noreferrer">
              <i className='bx bxl-twitter'></i>
            </a>
            &nbsp;
            <a href='mailto:rameshwar.kes@gmail.com'>
            <i className='bx bxl-gmail'></i>
          </a>
          </div>
        </div>

        <ul className='footer__nav footer-container'>
          <li className='nav__item'>
            <h2 className='nav__title'>Skills</h2>
            <div className="skillsSet">
             <p>Data Structure & Algorithm</p>
            <p>C++</p>
            <p>JavaScript</p>
            <p>MERN STACK</p>
            <p>MySQL, SQL,</p>
            <p>AWS</p>
            </div>

            <ul className='nav__ul'></ul>
          </li>
{/*           <li className='nav__item nav__item--extra'> */}
            {/* <h2 className='nav__title'>Technology</h2> */}
{/*             <div className="skillsSet">
            <p>Data Structure & Algorithm</p>
            <p>C++</p>
            <p>JavaScript</p>
            <p>MERN STACK</p>
            <p>MySQL, SQL,</p>
            <p>AWS</p>
            </div>
            <ul className='nav__ul nav__ul--extra'></ul>
          </li>
 */}
          <li className='nav__item'>
            {/* <h2 className='nav__title'></h2> */}

            <ul className='nav__ul'>
              <li>
                <a href='#'></a>
              </li>

              <li>
                <a href='#'></a>
              </li>
            </ul>
          </li>
        </ul>
        <div className='legal'>
          <p>&copy; 2025. All rights reserved.</p>
          &nbsp;
        </div>
      </footer>
    </section>
  );
}

export default footer;
