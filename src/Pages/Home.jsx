import React from "react";
import Header from "../component/Header";
import OfferLine from "../component/OfferLine";
import Hero from "../component/Hero";
import Services from "../component/Services";

const Home = () => {
  return (
    <div className="mb-10">
      
      <OfferLine />
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
