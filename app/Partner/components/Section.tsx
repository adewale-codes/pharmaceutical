import React from "react";

const Section = () => {
  return (
    <div className="bg-neutral-100 p-5 md:p-24">
      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="flex flex-col gap-2 md:border-r border-neutral-300 p-5">
          <div className="font-bold text-center text-3xl md:text-4xl">
            10 000+
          </div>
          <div className="text-center text-lg">qualified buyers</div>
        </div>
        <div className="flex flex-col gap-2 md:border-r border-neutral-300 p-5">
          <div className="font-bold text-center text-3xl md:text-4xl">120+</div>
          <div className="text-center text-lg">countries covered</div>
        </div>
        <div className="flex flex-col gap-2 md:border-r border-neutral-300 p-5">
          <div className="font-bold text-center text-3xl md:text-4xl">
            {"< 2 weeks"}
          </div>
          <div className="text-center text-lg">to market feedback</div>
        </div>
        <div className="flex flex-col gap-2 p-5">
          <div className="font-bold text-center text-3xl md:text-4xl">85%</div>
          <div className="text-center text-lg">
            of successful partner searches
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
