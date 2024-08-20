import React from "react";
import { motion, useAnimation, useInView } from 'framer-motion';
import skillimg from "../assets/123.png"

const Skills=()=> {

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
    transition={{ duration: 5 }}
      >
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
              <span>95%</span>
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
              <span>75%</span>
              <div className='light-bar'></div>
              <div className='percent-bar js-bar'></div>
            </div>

            <div className='bars-box'>
              <h3>ReactJs</h3>
              <span>85%</span>
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
    </motion.div>
  );
}

export default Skills;
