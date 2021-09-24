import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";


const App = () => {
  return (
    <div className="app">
     <Navbar/>
     <Routing/>
     <Footer/>
    </div>
  );
};

export default App;
