import React from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Introduction from "./Introduction";
import RulesANDguidelines from "./RulesANDguidelines";
import Judgingcriteria from "./Judgingcriteria";
import FQA from "./FQA";
import Timeline from "./Timeline";
import PrizesANDrewards from "./PrizesANDrewards";
import PartnersANDsponsors from "./PartnersANDsponsors";
import PrivacypolicyANDterms from "./PrivacypolicyANDterms";
import Footer from './Footer';
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Introduction />
      <RulesANDguidelines />
      <Judgingcriteria />
      <FQA />
      <Timeline />
      <PrizesANDrewards />
      <PartnersANDsponsors />
      <PrivacypolicyANDterms />
      <Footer/>
    </>
  );
}

export default Home;
