import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <main className="w-full app_theme poppins-semibold opacity-90">
      <div className="">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
};

export default App;
