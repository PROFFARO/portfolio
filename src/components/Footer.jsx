import React from "react";
import portfolioDetails from "../constants/store";

const footer = () => {
  return (
    <section className="mt-1 bg-transparent flex flex-row justify-center text-sm font-mono font-medium lg:text-xl">
      <div className="text-white">
        &lt; Created with 💌 by {portfolioDetails.name} / &gt;
      </div>
    </section>
  );
};

export default footer;
