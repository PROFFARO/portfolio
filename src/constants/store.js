// store.js

const portfolioDetails = {
  name: "Dayananda Bindhani",
  title:
    " Hii, I am a Computer Science Engineer | Software Developer | Programmer",
  about:
    "I'm a Computer Science Student, deeply passionate about innovation and problem-solving. I thrive on unraveling complex technical challenges and crafting effective solutions. Driven by a curiosity to explore the latest advancements in technology, I continuously push the boundaries of what's achievable. My expertise lies in architecting scalable systems and optimizing algorithms for enhanced performance.",
  about1:
    "I'm also adept at devising intuitive user interfaces that enhance the user experience.Each challenge I encounter is met with enthusiasm and a commitment to excellence. With a meticulous attention to detail, I specialize in translating abstract concepts into practical solutions that have a tangible impact. Beyond being a skilled coder, I consider myself an architect of digital experiences, dedicated to shaping the future through innovation and ingenuity.",
  skills: {
    languages: [
      { name: "C", image: "c_logo.png" },
      { name: "C++", image: "cpp_logo.png" },
      { name: "Java", image: "java.png" },
      { name: "HTML", image: "html.png" },
      { name: "CSS", image: "css-logo.png" },
      { name: "JS", image: "javascript.png" },
      { name: "Tailwind", image: "tailwindcss_logo.png" },
      { name: "ReactJS", image: "reactjs_logo.png" },
    ],
    tools: [
      { name: "Git", image: "git_logo.png" },
      { name: "Github", image: "github_logo.png" },
      { name: "Bash Scripting", image: "bash_logo.png" },
      { name: "MySQL", image: "MySQL_logo.png" },
      { name: "Cloud Technology", image: "cloud_logo.png" },
    ],
  },
  languages: ["Hindi", "English", "Odia"],
  projects: [
    {
      title: "Web Scrapper",
      description:
        "A Web Scrapping tool is an program where it requests a html URL and on this basis it parse the content from the desired URL. This is a Python program based Fully functional User friendly an efficient tool for Web Scrapping. It contains various options to choose the User on his/her own way that's how to Scrap a webpage. It requires the necessary python tools and dependencies to run successively.",
      technologies: ["Python"],
      url: "https://github.com/PROFFARO/WEB_SCRAPPING-TOOL",
    },
    {
      title: "Text Encryption and Decryption",
      description:
        "Text Encryption and Decryption is the process of converting the Plain text to the Cipher text which is unreadable normally for a human being. generally this technique used for end to end Encryption when any secure message transferring will happens. So, to ensure the security and for the concern of privacy this technique used. Here this tool will help you to encrypt your normal text into a random join of different literals [cipher text]. It provides different types of features and encryption technique by so that the user will customise him/herself accordingly.",
      technologies: ["Python"],
      url: "https://github.com/PROFFARO/TEXT_ENCRYPTION_DECRYPTION_TOOL",
    },
  ],
  contact: {
    email: "dayananda.btmtcs22218@nfsu.ac.in",
    phone: "+91 933-715-XXXX",
    socialMedia: {
      linkedin:
        "https://in.linkedin.com/in/dayananda-bindhani-b05920250?trk=people-guest_people_search-card",
      github: "https://github.com/PROFFARO",
      instagram: "https://www.instagram.com/cehprofessor/",
      youtube: "https://www.youtube.com/@padhodilse9994",
      // Add more social media links if available
    },
  },
};

export default portfolioDetails;
