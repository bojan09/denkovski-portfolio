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
  Projects,
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
    <Projects />
    <Illustrations />
    <Footer />
  </div>
);

export default App;
