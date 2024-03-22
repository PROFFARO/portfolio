import React from "react";
import portfolioDetails from "../constants/store";

import cLogo from "../assets/c_logo.png";
import cppLogo from "../assets/cpp_logo.png";
import javaLogo from "../assets/java.png";
import htmlCssJsLogo from "../assets/html.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/javascript.png";
import tailwindcssLogo from "../assets/tailwindcss_logo.png";
import reactjsLogo from "../assets/reactjs_logo.png";
import gitLogo from "../assets/git_logo.png";
import bashLogo from "../assets/bash_logo.png";
import mysqlLogo from "../assets/MySQL_logo.png";
import cloudLogo from "../assets/cloud_logo.png";
import githubLogo from "../assets/github-logo.png";

const ProfileTitle = ({ title }) => {
  const firstLetterStyle = {
    C: "text-orange-500",
    S: "text-amber-400",
    E: "text-green-500",
    D: "text-purple-500",
    P: "text-indigo-500",
  };

  return (
    <div className="mb-[7%] flex flex-row gap-0 font-mono justify-center items-center mt-2">
      <h3
        id="profileTitle"
        className="p-4 px-9 text-start font-medium mb-1 text-white md:text-xl lg:text-3xl "
      >
        {title.split(" ").map((word, index) => {
          const firstLetter = word.charAt(0);
          const restOfWord = word.slice(1);
          return (
            <span key={index}>
              <span className={firstLetterStyle[firstLetter]}>
                {firstLetter}
              </span>
              {restOfWord}{" "}
            </span>
          );
        })}
      </h3>
    </div>
  );
};

const Hero = () => {
  const getImage = (imageName) => {
    switch (imageName) {
      case "c_logo.png":
        return cLogo;
      case "cpp_logo.png":
        return cppLogo;
      case "java.png":
        return javaLogo;
      case "html.png":
        return htmlCssJsLogo;
      case "css-logo.png":
        return cssLogo;
      case "javascript.png":
        return jsLogo;
      case "tailwindcss_logo.png":
        return tailwindcssLogo;
      case "reactjs_logo.png":
        return reactjsLogo;
      case "git_logo.png":
        return gitLogo;
      case "bash_logo.png":
        return bashLogo;
      case "MySQL_logo.png":
        return mysqlLogo;
      case "cloud_logo.png":
        return cloudLogo;
      case "github_logo.png":
        return githubLogo;
      default:
        return null;
    }
  };

  return (
    <section className="py-16">
      <div className=" items-center justify-center flex flex-row md:w-[100%] md:text-center md:px-14">
        <h1 className="text-4xl text-center w-[90%] sm:text-center  md:text-center md:w-[100%] md:text-5xl lg:text-6xl font-bold mb-8 lg:w-full">
          <span className="gradient-text transition duration-500 gradient-hover_text">
            Welcome to {portfolioDetails.name}'s Portfolio
          </span>
        </h1>
      </div>
      <ProfileTitle title={portfolioDetails.title} />
      <div className="text-left ml-4 mb-12 px-7 ">
        <h2 className="text-4xl font-semibold text-left mb-2 text-white">
          About Me
        </h2>
        <p className="flex md:text-lg flex-col overflow-x-hidden overflow-hidden gap-4 font-mono text-[14.5px] w-[100%] mt-6 color4 font-normal">
          <span className="">{portfolioDetails.about}</span>{" "}
          <span>{portfolioDetails.about1}</span>
        </p>
      </div>
      <div className="text-left ml-4 px-7">
        <h2 className="text-4xl font-semibold mt-0 text-white">Skills</h2>
        <div className="font-mono text-xl w-[80%] mt-6 color4 font-normal">
          <h3 className="text-lg font-normal mb-2 mt-2 text-teal-400">
            Programming Languages:
          </h3>
          <ul className="pl-5 grid grid-cols-2 md:grid md:flex-row gap-3 md:gap-7 lg:flex lg:flex-row">
            {portfolioDetails.skills.languages.map((language, index) => (
              <li
                key={index}
                className="flex flex-row items-center hover:scale-110 transform transition duration-300"
              >
                <img
                  src={getImage(language.image)}
                  alt={language.name}
                  width={25}
                  height={25}
                  className="mr-2 md:ml-3"
                />
                <span className="text-amber-500">{language.name}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-normal mb-2 mt-4 text-teal-400">
            Tools:
          </h3>
          <ul className=" pl-5 grid grid-cols-2 md:flex md:flex-shrink- gap-3 md:gap-10">
            {Array.isArray(portfolioDetails.skills.tools) &&
              portfolioDetails.skills.tools.map((tool, index) => {
                if (typeof tool === "object" && tool.name && tool.image) {
                  return (
                    <li
                      key={index}
                      className="flex flex-row items-center hover:scale-110 transform transition duration-300"
                    >
                      <img
                        src={getImage(tool.image)}
                        alt={tool.name}
                        width={25}
                        height={25}
                        className="mr-2 md:ml-3"
                      />
                      <span className="text-amber-500">{tool.name}</span>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
          </ul>
        </div>
      </div>
      {/* Languages section */}
      <div className="text-left ml-4 px-7">
        <h3 className="font-mono text-xl w-[80%] mt-3 mb-2 text-teal-400 font-normal">
          Languages:
        </h3>
        <ul className="pl-9 flex flex-row gap-3 font-medium text-lg">
          {portfolioDetails.languages.map((language, index) => (
            <li
              key={index}
              className="flex flex-row items-center hover:scale-110 transform transition duration-300"
            >
              <span className="text-amber-500 mr-2 font-mono">{language}</span>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-4xl font-semibold mb-5 mt-8 text-white text-left ml-4 px-7">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioDetails.projects.map((project, index) => (
          <div
            key={index}
            className=" border-[1.6px] border-l-lime-400 border-t-red-600 border-r-yellow-400 border-b-indigo-700 rounded-[11%] overflow-hidden shadow-2xl shadow-black p-6 ml-4 mr-4 transform hover:scale-95 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 px-9 card_gradient-text ">
              {project.title}
            </h2>
            <p className="text-white text-md font-medium font-mono mb-3">
              {project.description}
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 mr-1 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}

        <div className="text-left ml-4 px-7 mt-7 w-[90%] lg:w-[70%] justify-center items-center md:w-[120%] md:justify-center md:items-center">
          <h3 className="text-3xl font-semibold mt-0 text-white mb-6 lg:text-3xl">
            Contact Details
          </h3>
          <div className="bg-black bg-opacity-30 p-6 rounded-lg shadow-2xl bg-clip-border border-[1.5px] text-sm lg:text-lg w-[110%] lg:w-[100%]">
            <p className="mb-4 font-normal text-gray-600">
              <strong className="text-white font-medium font-mono">
                Email:{" "}
              </strong>
              {portfolioDetails.contact.email}
            </p>
            <p className="mb-4 font-normal text-gray-600">
              <strong className="text-white font-medium font-mono">
                Phone:{" "}
              </strong>
              {portfolioDetails.contact.phone}
            </p>
            <div className="grid grid-cols-2 gap-4 font-mono text-sm w-[90%] text-center lg:flex lg:flex-wrap lg:w-[100%]">
              <a
                href={portfolioDetails.contact.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 border-2 p-2 hover:border-orange-500 rounded-md hover:text-orange-300 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href={portfolioDetails.contact.socialMedia.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 border-2 hover:border-amber-400 p-2 rounded-md hover:text-amber-600 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={portfolioDetails.contact.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 border-2 p-2 hover:border-pink-600 rounded-md hover:text-pink-400 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href={portfolioDetails.contact.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 border-2 p-2 hover:border-red-500 rounded-md hover:text-red-300 transition-colors duration-300"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
