import React from "react";

const Section = () => {
  return (
    <div className="bg-neutral-100 p-5 md:p-24">
      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="flex flex-col gap-2 md:border-r border-neutral-300 p-5">
          <div className="font-bold text-center text-3xl">83 100+</div>
          <div className="text-center">
            finished dosage formulation products
          </div>
        </div>
        <div className="flex flex-col gap-2 md:border-r border-neutral-300 p-5">
          <div className="font-bold text-center text-3xl">100+</div>
          <div className="text-center">countries of production</div>
        </div>
        <div className="flex flex-col gap-2 md:border-r border-neutral-300 p-5">
          <div className="font-bold text-center text-3xl">600+</div>
          <div className="text-center">EU GMP manufacturers</div>
        </div>
        <div className="flex flex-col gap-2 p-5">
          <div className="font-bold text-center text-3xl">90%+</div>
          <div className="text-center">CTD dossiers search success rate</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
