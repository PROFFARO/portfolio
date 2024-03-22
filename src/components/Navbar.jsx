import React, { useState, useEffect } from "react";
import gsap from "gsap";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile_logo from "../assets/profile-logo.png";
import github_logo from "../assets/github-logo.png";
import instagram_logo from "../assets/instagram-logo.webp";
import linkdin_logo from "../assets/linkdin-logo.webp";
import email_logo from "../assets/gmail-logo.webp";

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navbarHeight = 80; // Adjust the height of the Navbar accordingly

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavbarFixed(scrollPosition > 0);
      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundPositionY: -scrollY * 0.5 + "px", // Adjust the multiplier for desired parallax effect
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Scroll to the top of the Navbar
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const open_in_win_github = () => {
    scrollTo("githubSection");
    window.open("https://github.com/PROFFARO", "_blank");
  };

  const open_in_win_instagram = () => {
    scrollTo("instagramSection");
    window.open("https://www.instagram.com/cehprofessor/", "_blank");
  };

  const open_in_win_linkedin = () => {
    scrollTo("linkedinSection");
    window.open(
      "https://in.linkedin.com/in/dayananda-bindhani-b05920250?trk=people-guest_people_search-card",
      "_blank"
    );
  };

  const open_in_win_gmail = () => {
    scrollTo("gmailSection");
    window.open("mailto:dayabindhani2005@gmail.com", "_blank");
  };

  return (
    <nav
      className={`w-full bg-black sm:bg-opacity-95 overflow-hidden z-50 ${
        isNavbarFixed ? "fixed top-0 sm:fixed sm:top-0 sm:w-full" : ""
      }`}
      style={navbarStyle}
    >
      <div className="flex flex-col sm:flex sm:flex-col md:flex md:gap-3 md:flex-col lg:flex lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center p-3 w-full rounded-md text-sm">
        <div className="flex flex-row items-center gap-5">
          <Avatar>
            <AvatarImage src={profile_logo} alt="profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <a
            href="/"
            className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl bg-gradient-to-r from-red-500 to-lime-400 md:bg-gradient-to-r md:from-amber-500 md:via-yellow-600 md:to-red-600 text-transparent bg-clip-text"
          >
            Dayananda Bindhani
          </a>
        </div>
        <div className="grid grid-cols-2 md:mb-3 justify-between items-center gap-5 mt-4 md:mt-3">
          <button
            className="flex flex-row  gap-1 border p-1.5 text-center border-none rounded-lg bg-gradient-to-r from-amber-400 to-red-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-fuchsia-400 text-black transition duration-200 ease-in-out transform hover:scale-105"
            onClick={open_in_win_github}
          >
            <img src={github_logo} width={20} height={20} alt="github_logo" />
            Github
          </button>
          <button
            className="flex flex-row gap-1 border p-1.5 text-center border-none rounded-lg bg-gradient-to-r from-amber-400 to-red-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-fuchsia-400 text-black transition duration-200 ease-in-out transform hover:scale-105"
            onClick={open_in_win_instagram}
          >
            <img
              src={instagram_logo}
              width={20}
              height={20}
              alt="instagram_logo"
            />
            Instagram
          </button>
          <button
            className="flex flex-row gap-1 border p-1.5 text-center border-none rounded-lg bg-gradient-to-r from-amber-400 to-red-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-fuchsia-400 text-black transition duration-200 ease-in-out transform hover:scale-105"
            onClick={open_in_win_linkedin}
          >
            <img src={linkdin_logo} width={20} height={20} alt="linkdin_logo" />
            LinkedIn
          </button>
          <button
            className="flex flex-row gap-1 border p-1.5 items-center text-center border-none rounded-lg bg-gradient-to-r from-amber-400 to-red-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-fuchsia-400 text-black transition duration-200 ease-in-out transform hover:scale-105"
            onClick={open_in_win_gmail}
          >
            <img src={email_logo} width={20} height={20} alt="email_logo" />
            Gmail
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
