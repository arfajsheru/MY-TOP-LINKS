import React from "react";
import Header from "../component/Header";
import OfferLine from "../component/OfferLine";
import Hero from "../component/Hero";
import Services from "../component/Services";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="bghome mb-[68px]">
      
      <OfferLine />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
