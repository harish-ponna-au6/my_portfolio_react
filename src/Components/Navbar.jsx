import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";
import { logoVariants, navVariants } from "../variants/NavbarVariants";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const {
    all_refs: { heroRef, serviceRef, portfolioRef, aboutMeRef, skillsRef }
  } = props;
  const [activeLink, setActiveLink] = useState("home");
  const [navStatus, setNavStatus] = useState(false);
  const [hamburgerStatus, setHamburgerStatus] = useState(false);

  const handleOnClick = (ref, link) => {
    setActiveLink(link);
    setHamburgerStatus(false);
    window.scrollTo({ top: ref.current.offsetTop - 60 });
  };

  useEffect(() => {
    const scroll = window.addEventListener("scroll", (e) => {
      const scrollY = window.pageYOffset;
      scrollY > 70 ? setNavStatus(true) : setNavStatus(false);
      if (
        scrollY >= heroRef.current.offsetTop &&
        scrollY < heroRef.current.offsetHeight - 60
      ) {
        setActiveLink("hero");
      } else if (
        scrollY >= serviceRef.current.offsetTop - 60 &&
        scrollY <
          serviceRef.current.offsetHeight + serviceRef.current.offsetTop - 60
      ) {
        setActiveLink("service");
      } else if (
        scrollY >= skillsRef.current.offsetTop - 60 &&
        scrollY <
          skillsRef.current.offsetHeight + skillsRef.current.offsetTop - 60
      ) {
        setActiveLink("skills");
      } else if (
        scrollY >= portfolioRef.current.offsetTop - 60 &&
        scrollY <
          portfolioRef.current.offsetHeight +
            portfolioRef.current.offsetTop -
            60
      ) {
        setActiveLink("portfolio");
      } else if (
        scrollY >= aboutMeRef.current.offsetTop - 60 &&
        scrollY <
          aboutMeRef.current.offsetHeight + aboutMeRef.current.offsetTop - 60
      ) {
        setActiveLink("aboutMe");
      }
    });

    return window.removeEventListener("scroll", scroll);
  });

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`Navbar ${navStatus && "active"}`}
    >
      <div className="container">
        <div className="name">
          <motion.div
            variants={logoVariants}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={1}
            className="logo"
          >
            HP
          </motion.div>
          Harish Ponna
        </div>
        <ul className={`nav_links ${hamburgerStatus && "active"}`}>
          <li>
            <Link
              className={`${activeLink === "hero" && "active"}`}
              onClick={() => handleOnClick(heroRef, "hero")}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${activeLink === "service" && "active"}`}
              onClick={() => handleOnClick(serviceRef, "sevice")}
              to="/"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              className={`${activeLink === "skills" && "active"}`}
              onClick={() => handleOnClick(skillsRef, "skills")}
              to="/"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className={`${activeLink === "portfolio" && "active"}`}
              onClick={() => handleOnClick(portfolioRef, "portfolio")}
              to="/"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={`${activeLink === "aboutMe" && "active"}`}
              onClick={() => handleOnClick(aboutMeRef, "about")}
              to="/"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.open("/resume/HarishPonnaResumeUpdated.pdf");
              }}
              to="/"
              className="download-resume"
            >
              Download Resume
            </Link>
          </li>
        </ul>
        <motion.div
          onClick={() => setHamburgerStatus(!hamburgerStatus)}
          className={`hamburger ${hamburgerStatus && "active"}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
