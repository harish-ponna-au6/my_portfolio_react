import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Skills from "../Components/Skills";
import Portfolio from "../Components/Portfolio";
import AboutMe from "../Components/AboutMe";
import Quote from "../Components/Quote";
import { connect } from "react-redux";

const PortfolioWebPage = () => {
  const heroRef = useRef();
  const serviceRef = useRef();
  const quoteRef = useRef();
  const portfolioRef = useRef();
  const aboutMeRef = useRef();
  const skillsRef = useRef();
  const JobPortal = useRef();
  const currencyConverter = useRef();
  const stickyNotebook = useRef();
  const gityFinder = useRef();
  const shoppingCart = useRef();
  const shortener = useRef();

  return (
    <div className="PortfolioWebPage">
      <Navbar
        all_refs={{
          heroRef,
          serviceRef,
          quoteRef,
          portfolioRef,
          aboutMeRef,
          skillsRef
        }}
        projectRefs={[
          JobPortal,
          stickyNotebook,
          gityFinder,
          shoppingCart,
          shortener,
          currencyConverter
        ]}
      />
      <Hero heroRef={heroRef} />
      <Service serviceRef={serviceRef} />
      <Skills skillsRef={skillsRef} />
      <Portfolio
        portfolioRef={portfolioRef}
        projectRefs={[
          JobPortal,
          stickyNotebook,
          gityFinder,
          shoppingCart,
          shortener,
          currencyConverter
        ]}
      />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Quote quoteRef={quoteRef} />
    </div>
  );
};


export default PortfolioWebPage;
