// React
import React from "react";
// import { Route, Routes } from "react-router-dom";

// components
import { Navbar, Footer } from "./components";

// pages
import {
  Home,
  About,
  Services,
  Education,
  Projects,
  Illustrations,
} from "./pages";

import "./index.css";

const App = () => (
  <div className="App">
    <Navbar />
    <Home />
    <About />
    <Services />
    <Education />
    <Projects />
    <Illustrations />
    <Footer />
  </div>
);

export default App;
