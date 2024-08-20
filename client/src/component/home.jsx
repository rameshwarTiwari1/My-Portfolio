import React from "react";
import { motion, useAnimation, useInView } from 'framer-motion';
import profile from "../assets/Profile.png";
import "../allcompo.js";
import "../App.css";

const Home=()=> {

  const controls = useAnimation();
  const ref = React.useRef();
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [inView, controls]);

  return (
    <motion.div
    ref={ref}
    className="box"
    initial={{ opacity: 0, y: 10 }}
    animate={controls}
    transition={{ duration: 4 }}
      >
    <div>
      <section className='home' id='home'>
        <div className='social'>
          <a href='https://github.com/rameshwarTiwari1' target='_blank' rel="noreferrer">
            <i className='bx bxl-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/rameshwar-tiwari-b259401ba/'
            target='_blank' rel="noreferrer"
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href='mailto:rameshwar.kes@gmail.com'>
            <i className='bx bxl-gmail'></i>
          </a>
        </div>
        <div className='home-img'>
          <img src={profile} alt='11' />
        </div>
        <div className='home-text'>
          <span className='transition-fade'>Hello, I'm</span>
          <h1>Rameshwar Tiwari</h1>
          <h2>BSc. IT Graduate | Web Developer</h2>
          <p>
            Problem Solver, Collaborative, Critical Thinker, Determined,
            Adaptive Learner.
          </p>
          {/* <a href='#contact' className='btn btn-hover color-6'>
           Hire me
          </a> */}
          <a href='mailto:rameshwar.kes@gmail.com'>
            <i className='btn btn-hover color-6' style={{fontStyle:"normal"}}>
            Hire me
            </i>
            
          </a>
        </div>
      </section>
    </div>
     </motion.div>
  );
}

export default Home;


