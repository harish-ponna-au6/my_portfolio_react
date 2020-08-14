import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useViewportScroll, motion } from "framer-motion";
import "../styles/Navbar.css";
import { logoVariants, navVariants } from "../variants/NavbarVariants";

const Navbar = (props) => {
  const {
    all_refs: {
      heroRef,
      serviceRef,
      portfolioRef,
      aboutMeRef,
      skillsRef,
      quoteRef
    },
    history: { push },
    location: { pathname }
  } = props;

  const [navStatus, setNavStatus] = useState(false);
  const [activeLink, setActiveLink] = useState("/home");
  const [hamburgerStatus, setHamburgerStatus] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const scrolling = (refElement) => {
    return window.scrollTo({ top: refElement.current.offsetTop - 60 });
  };

  const { scrollYProgress } = useViewportScroll();
  useEffect(() => {
    scrollYProgress.onChange(() => {
      window.pageYOffset > 70 ? setNavStatus(true) : setNavStatus(false);
      const all_refs_array = [
        heroRef,
        serviceRef,
        portfolioRef,
        aboutMeRef,
        skillsRef,
        quoteRef
      ];
      const paths = [
        "/home",
        "/service",
        "/portfolio",
        "/aboutme",
        "/skills",
        "/quote"
      ];

      for (let i = 0; i < all_refs_array.length; i++) {
        if (
          window.pageYOffset >= all_refs_array[i].current.offsetTop - 70 &&
          window.pageYOffset <= all_refs_array[i].current.offsetTop + 70
        ) {
          push(paths[i]);
        }
      }
    });
  }, [
    scrollYProgress,
    heroRef,
    serviceRef,
    quoteRef,
    skillsRef,
    portfolioRef,
    aboutMeRef,
    push
  ]);

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
              className={`${activeLink === "/home" && "active"}`}
              onClick={() => {
                setHamburgerStatus(!hamburgerStatus);
                scrolling(heroRef);
              }}
              to="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${activeLink === "/service" && "active"}`}
              onClick={() => {
                setHamburgerStatus(!hamburgerStatus);
                scrolling(serviceRef);
              }}
              to="/service"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              className={`${activeLink === "/skills" && "active"}`}
              onClick={() => {
                setHamburgerStatus(!hamburgerStatus);
                scrolling(skillsRef);
              }}
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className={`${activeLink === "/portfolio" && "active"}`}
              onClick={() => {
                setHamburgerStatus(!hamburgerStatus);
                scrolling(portfolioRef);
              }}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={`${activeLink === "/aboutme" && "active"}`}
              onClick={() => {
                setHamburgerStatus(!hamburgerStatus);
                scrolling(aboutMeRef);
              }}
              to="/aboutme"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setHamburgerStatus(!hamburgerStatus)}
              to="/resume/HarishPonnaResume.pdf"
              className="download-resume"
              download
              target="_blank"
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

export default withRouter(Navbar);
