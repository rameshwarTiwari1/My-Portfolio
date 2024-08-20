import React from "react";
import { motion, useAnimation, useInView } from 'framer-motion';

const Service=()=> {
  const controls = useAnimation();
  const ref = React.useRef();
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    console.log("Service component rendered");
  }, []);
  

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
      <section className='services' id='services'>
        <div className='heading'>
          <h2>Projects</h2>
        </div>
        <div className='services-content'>
          <div className='services-box'>
            <h3>Noting App</h3>
            <p>
              Developed a web application which saves and keep tracks of our
              notes, it is based on HTML, CSS, and ReactJs.
            </p>
            <a href='https://github.com/rameshwarTiwari1?tab=repositories'>Learn More</a>
          </div>

          <div className='services-box'>
            <h3>Ethereum-pay</h3>
            <p>
              Developed a ether-pay app using ReactJs, blockchain technology and
              metamask wallet, goerli faucet. 
              we can transfer ethereum one account
              to another account.
            </p>
            <a href='https://github.com/rameshwarTiwari1/Ethereum-Pay-web-app-'>Learn More</a>
          </div>

          <div className='services-box'>
            <h3>URL Shortener</h3>
            <p>
              Create a React based web application for simplify complex/long
              URLs, it is based on tech like HTML, CSS, and ReactJs.
            </p>
            <a href='https://github.com/rameshwarTiwari1?tab=repositories'>Learn More</a>
          </div>
          <div className='services-box'>
            <h3>Railway Reservation System</h3>
            <p>
              Designed a sample console application for railway management
              system containing user and admin mode.
            </p>
            <a href='#'>Learn More</a>
          </div>
        </div>
      </section>
    </div>
    </motion.div>
  );
}

export default Service;
