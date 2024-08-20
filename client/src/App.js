import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/navbar.jsx";
import Home from "./component/home.jsx";
import About from "./component/about.jsx";
import Skils from "./component/skills.jsx";
import Service from "./component/service.jsx";
import Contact from "./component/contactdb/contact.jsx";
import Footer from "./component/footer.jsx";
import JobNoti from "./component/JobNotification/JobNoti.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <JobNoti/>
              <Navbar />
              <Home />
              <About />
              <Skils />
              <Service />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
