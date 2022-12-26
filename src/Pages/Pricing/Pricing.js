import React from "react";
import FreeTrail from "./FreeTrail";
import PriceBanner from "./PriceBanner";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div>
      <PriceBanner></PriceBanner>
      <PricingCard></PricingCard>
      <FreeTrail></FreeTrail>
    </div>
  );
};

export default Pricing;
