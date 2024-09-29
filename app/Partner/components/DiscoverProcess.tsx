"use client";
import React, { useState } from "react";
import Image from "next/image";

const DiscoverProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "1. Discover new products",
      description:
        "Search for the high-potential products in the largest expert-curated CTD database. Narrow your search applying the industry-specific filter that helps sort products by GMP approvals, country of origin, dossier type, dossier status, and other valuable features.",
      image: "/images/first.svg",
    },
    {
      id: 2,
      title: "2. Get positive response from manufacturers",
      description:
        "Submit a request indicating your target market(s), annual purchase forecast, preferable deal type, and your specific remarks. Get feedback via email. Use our platform to track your inquiry progress.",
      image: "/images/second.svg",
    },
    {
      id: 3,
      title: "3. Connect with qualified manufacturers directly",
      description:
        "Upon a supplier confirming interest, we facilitate direct negotiations between you and the supplier, empowering you with control and transparency throughout the process. Importantly, there are no additional fees, and you finalize all deals directly with the suppliers.",
      image: "/images/third.svg",
    },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8">
      <div className="relative flex flex-col gap-6 md:w-1/3 w-full">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {index < steps.length - 1 && (
              <div
                className={`absolute left-[12px] w-[2px] ${
                  activeStep > step.id ? "bg-blue-500" : ""
                }`}
                style={{
                  top: "26px",
                  height: "50px",
                }}
              ></div>
            )}

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setActiveStep(step.id)}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  activeStep >= step.id
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {activeStep >= step.id && (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>

              <div
                className={`font-bold transition-all ${
                  activeStep === step.id ? "text-black" : "text-gray-400"
                }`}
              >
                {step.title}
              </div>
            </div>

            {activeStep === step.id && (
              <div className="ml-8 mt-2 text-gray-700 md:text-xl">
                {step.description}
              </div>
            )}
          </div>
        ))}

        <div className="mt-10">
          <button className="p-4 rounded-lg text-lg font-bold bg-blue-600 text-white text-center hover:bg-blue-700 transition-all active:opacity-80 w-full">
            Request Subscription Plan
          </button>
        </div>
      </div>

      <div className="flex-1 w-full h-[400px] md:h-auto relative">
        <Image
          src={steps.find((step) => step.id === activeStep)?.image || ""}
          alt={`Step ${activeStep} Image`}
          objectFit="cover"
          height={1000}
          width={1000}
          className="shadow-md"
        />
      </div>
    </div>
  );
};

export default DiscoverProcess;
