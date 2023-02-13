import React from "react";
import homeimg from "../assets/11.png"

function home() {
  return (
    <div>
      <section className='home' id='home'>
        <div className='social'>
          <a href='https://github.com/rameshwarTiwari1' target='_blank'>
            <i className='bx bxl-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/rameshwar-tiwari-b259401ba/'
            target='_blank'
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href='mailto:rameshwar.kes@gmail.com'>
            <i className='bx bxl-gmail'></i>
          </a>
        </div>
        <div className='home-img'>
          <img src={homeimg} alt='11' />
        </div>
        <div className='home-text'>
          <span>Hello, I'm</span>
          <h1>Rameshwar Tiwari</h1>
          <h2>Bsc.IT Student</h2>
          <p>
            Problem Solver, Collaborative, Critical Thinker, Determined,
            Adaptive Learner.
          </p>
          <a href='#contact' className='btn btn-hover color-6'>
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default home;
