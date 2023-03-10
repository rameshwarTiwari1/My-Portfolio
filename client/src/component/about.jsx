import React from "react";
import imgabout from "../assets/121.png";

function about() {
  return (
    <div>
      <section className='about' id='about'>
        <div className='heading'>
          <h2>About Me</h2>
          <span>Introduction</span>
        </div>
        <div className='about-container'>
          <div className='about-img'>
            <img src={imgabout} alt='121' />
          </div>
          <div className='about-text'>
            <br />
            Currently, I am in my final semester of studying BSc.IT at KES
            Shroff College in "Mumbai", actively seeking an opportunity to
            utilize my skills in frontend and backend development and database
            management.
            <br />
            <div className='information'>
              <div className='info-box'>
                <span>Rameshwar Tiwari</span>
              </div>
              <div className='info-box'>
                <span>+91 9026767618</span>
              </div>
              {/* <div className='info-box'>
                <span>+91 8976558077</span>
              </div> */}
              <div className='info-box'>
                <span>rameshwar.kes@gmail.com</span>
              </div>
              <a
                href='https://drive.google.com/file/d/16s1UWMNifeyiBJmtQncG6PzP-6Kw1kx-/view?usp=share_link'
                className='btnCV btn-hover color-6'
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
