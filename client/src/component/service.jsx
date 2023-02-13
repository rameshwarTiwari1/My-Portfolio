import React from "react";

function service() {
  return (
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
            <a href='#'>Learn More</a>
          </div>

          <div className='services-box'>
            <h3>Ethereum-pay</h3>
            <p>
              Developed a ether-pay app using ReactJs, blockchain technology and
              metamask wallet, goerli faucet. we can transfer ether one account
              to another account.
            </p>
            <a href='#'>Learn More</a>
          </div>

          <div className='services-box'>
            <h3>URL Shortener</h3>
            <p>
              Create a React based web application for simplify complex/long
              URLs, it is based on tech like HTML, CSS, and ReactJs.
            </p>
            <a href='#'>Learn More</a>
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
  );
}

export default service;
