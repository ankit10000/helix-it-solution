import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Blog from "./pages/Blog";
import NavBar from "./layouts/NavBar";
import Header from "./layouts/Header";
import OurServices from "./components/OurServices";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<OurServices />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;