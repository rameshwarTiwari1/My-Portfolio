import { dataRef } from "./firebaseConfig.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import loader from "./loader.jsx";
import "./loader.css";
// import { Oval } from "react-loader-spinner";
// import img from "../../assets/loading.gif";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("hiiloader");
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.info("Fill all details !!!", {
        position: "top-center",
        theme: "dark",
      });
    } else if (!name.match(/^[a-zA-Z ]+$/)) {
      toast.info("Please enter correct name", {
        position: "top-center",
        theme: "dark",
      });
    } else {
      try {
        fetchLoading();
        const response = await axios.post(
          "https://backend-beryl-alpha.vercel.app/send",
          {
            name,
            email,
            message,
          }
        );
        console.log(name, email, message);
        console.log(response.data);
        setShowAlert(true, fetchLoading());

        setTimeout(() => {
          setShowAlert(false);
          resetForm();
        }, 1000);
        saveMessage(name, email, message);
      } catch (error) {
        console.error(error);

        toast.error("Could not send message", {
          position: "top-center",
          theme: "dark",
        });
      }
    }
  };
  //Reset input filled or clear input from form
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const saveMessage = (name, email, message) => {
    var newContactForm = dataRef.ref("contactus").push();
    newContactForm.set({
      name: name,
      email: email,
      message: message,
    });
  };

  const fetchLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  };

  return (
    <div>
      <section className='contact' id='contact'>
        <ToastContainer />
        <div className='heading'>
          <h2>Contact</h2>
          <span>Connect With Us</span>
        </div>
        <div className='contact-form'>
          <form id='contactus' onSubmit={handleSubmit} name='contactus'>
            <div
              className='alert'
              style={{ display: showAlert ? "block" : "none" }}
            >
              Your message sent.
            </div>
            <input
              type='text'
              placeholder='Name'
              id='name'
              name='name'
              // pattern='[a-zA-Z]+'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              id='email'
              value={email}
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='Message'
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {isLoading ? (
              ""
            ) : (
              <button
                type='submit'
                className='contact-button send-btn btn-hover color-6'
              >
                Send
              </button>
            )}
            {isLoading ? (
              <div>
                <div class='lds-ring contact-button'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
