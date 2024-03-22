import React from "react";
import portfolioDetails from "../constants/store";

const footer = () => {
  return (
    <section className="mt-1 bg-transparent flex flex-row justify-center text-xl font-mono font-medium">
      <div className="text-white">
        &lt; Created with 💌 by {portfolioDetails.name} / &gt;
      </div>
    </section>
  );
};

export default footer;
