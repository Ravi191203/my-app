import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Materials from "./pages/Material";
import Announcements from "./pages/Announcements";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'  // or './App.css'
const App = () => {
  return (
    <Router>
      <div className="container my-4">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
