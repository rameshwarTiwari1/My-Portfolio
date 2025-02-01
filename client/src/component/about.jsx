import React from "react";
import { motion, useAnimation, useInView } from 'framer-motion';
import imgabout from "../assets/121.png";

const About =()=> {

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
    transition={{ duration: 3.5 }}
      >
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
           I am a Software Developer with a solid understanding of Data Structures, Algorithms, and C++, along with practical experience working with the MERN Stack (MongoDB, Express.js, React.js, Node.js). I enjoy building scalable web applications using tools like ReactJS, AWS, and databases such as MongoDB, MySQL, and Firebase. While I’m still growing my skills, I’m confident in my ability to contribute to full-stack development projects and create efficient, user-friendly software solutions. <br></br>
            Feel free to reach out—I’m always open to connecting, collaborating, or discussing new opportunities!
            <br />
            <div className='information'>
              {/* <div className='info-box'>
                <span>Rameshwar Tiwari</span>
              </div> */}
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
                href='https://drive.google.com/uc?export=download&id=16s1UWMNifeyiBJmtQncG6PzP-6Kw1kx-'
                className='btnCV btn-hover color-6 extra-width'
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </motion.div>
  );
}

export default About;
