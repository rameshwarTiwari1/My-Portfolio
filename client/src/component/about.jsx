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
            I'm Currently pursuing my final sem in Bachelor of Science in
            department of Information Technology from Kes Shroff College,
            Mumbai. My current CGPA till now is 9.10.
            <br />
            <div className='information'>
              <div className='info-box'>
                <span>Rameshwar Tiwari</span>
              </div>
              <div className='info-box'>
                <span>+91 9026767618 or</span>
              </div>
              <div className='info-box'>
                <span>+91 8976558077</span>
              </div>
              <div className='info-box'>
                <span>rameshwar.kes@gmail.com</span>
              </div>
              <a href='target=' className='btnCV btn-hover color-6'>
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
