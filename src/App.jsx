// React
import React from "react";

// components
import { Navbar, Footer } from "./components";

// pages
import {
  Home,
  About,
  HireMe,
  Services,
  Education,
  Portfolio,
  Illustrations,
} from "./pages";

import "./index.css";

const App = () => (
  <div className="App">
    <Navbar />
    <Home />
    <About />
    <HireMe />
    <Services />
    <Education />
    <Portfolio />
    <Illustrations />
    <Footer />
  </div>
);

export default App;
