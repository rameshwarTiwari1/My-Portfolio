import React from "react";
import skillimg from "../assets/123.png"

function skills() {
  return (
    <div>
      <section className='skills' id='skills'>
        <div className='heading'>
          <h2>Skills</h2>
          <span>My Skills</span>
        </div>

        <div className='skills-container'>
          <div className='bars'>
            <div className='bars-box'>
              <h3>HTML</h3>
              <span>94%</span>
              <div className='light-bar'></div>
              <div className='percent-bar html-bar'></div>
            </div>

            <div className='bars-box'>
              <h3>CSS</h3>
              <span>84%</span>
              <div className='light-bar'></div>
              <div className='percent-bar css-bar'></div>
            </div>

            <div className='bars-box'>
              <h3>JavaScript</h3>
              <span>74%</span>
              <div className='light-bar'></div>
              <div className='percent-bar js-bar'></div>
            </div>

            <div className='bars-box'>
              <h3>React</h3>
              <span>70%</span>
              <div className='light-bar'></div>
              <div className='percent-bar react-bar'></div>
            </div>
          </div>
          <div className='skills-img'>
            <img src={skillimg} alt='123' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default skills;
