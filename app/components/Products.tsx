import React from "react";
import DiscoverProcess from "./DiscoverProcess";

const Products = () => {
  return (
    <div className="p-5 md:p-24">
      <div className="flex items-center flex-col gap-5">
        <div className="font-extrabold md:text-5xl text-2xl text-center">
          <div>How it works:</div>
          <div>from product discovery to closed deal</div>
        </div>
        <div className="text-center">
          <div className="md:text-xl md:max-w-[700px]">
            We assist you in discovering new products, matching with potential
            qualified manufacturers, and making the deals happens
          </div>
        </div>
      </div>
      <div className="py-5 md:py-24">
        <DiscoverProcess />
      </div>
    </div>
  );
};

export default Products;
