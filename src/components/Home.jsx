import React from "react";
import Slider from "./Slider";
import MouseSlider from "./MouseSlider";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import PricingTable from "./PricingTable";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Slider />
      <InfoSection />
      <MouseSlider />
      <PricingTable />
    </>
  );
};

export default Home;
