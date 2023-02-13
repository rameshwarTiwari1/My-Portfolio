import React from "react";
import {
  BrowserRouter as router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./component/Navbar/navbar.jsx";
import Home from "./component/home.jsx";
import About from "./component/about.jsx";
import Skils from "./component/skills.jsx";
import Service from "./component/service.jsx";
import Contact from "./component/contactdb/contact.jsx";
import Footer from "./component/footer.jsx";
import Loader from "./component/contactdb/loader.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Skils />
              <Service />
              <Contact />
              <Footer />
            </>
          }
        ></Route>
        {/* <Route path='/loader' element={<Loader />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
