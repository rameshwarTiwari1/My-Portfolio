import React from "react";

function footer() {
  return (
    <section className="reveal">
      <footer className='footer'>
        <div className='footer__addr'>
          <h1 className='footer__logo'>Rameshwar Tiwari</h1>

          <h2>Contact</h2>

          <address>
            Mumabi Maharastra
            <br />
            <a
              className='footer__btn btn-hover color-6'
              href='mailto:rameshwar.kes@gmail.com'
            >
              Email Us
            </a>
          </address>
        </div>

        <ul className='footer__nav'>
          <li className='nav__item'>
            <h2 className='nav__title'>Skills</h2>

            <ul className='nav__ul'></ul>
          </li>

          <li className='nav__item nav__item--extra'>
            <h2 className='nav__title'>Technology</h2>

            <ul className='nav__ul nav__ul--extra'></ul>
          </li>

          <li className='nav__item'>
            <h2 className='nav__title'>About</h2>

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
          <p>&copy; 2023. All rights reserved.</p>
          &nbsp;
          <div className='footer-social'>
            <a
              href='https://www.instagram.com/tiwari_rameshwar1'
              target='_blank'
            >
              <i className='bx bxl-instagram'></i>
            </a>
            &nbsp;
            <a href='https://twitter.com/rameshwart10' target='_blank'>
              <i className='bx bxl-twitter'></i>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default footer;
