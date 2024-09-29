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
        "Search for high-potential products in the largest expert-curated CTD database. Narrow your search by applying industry-specific filters, such as GMP approvals, country of origin, dossier type, and other valuable features.",
      image: "/images/first.svg",
    },
    {
      id: 2,
      title: "2. Get positive responses from manufacturers",
      description:
        "Submit a request indicating your target market(s), annual purchase forecast, preferable deal type, and specific remarks. Receive feedback via email, and use our platform to track your inquiry progress.",
      image: "/images/second.svg",
    },
    {
      id: 3,
      title: "3. Connect with qualified manufacturers directly",
      description:
        "Once a supplier shows interest, we facilitate direct negotiations between you and the supplier, giving you control and transparency throughout the process. No additional fees are involved, and you finalize all deals directly with the suppliers.",
      image: "/images/third.svg",
    },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8">
      <div className="relative flex flex-col gap-6 md:w-1/3 w-full">
        <div className="relative">
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
                aria-current={activeStep === step.id ? "step" : undefined}
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
        </div>
      </div>

      <div className="flex-1 w-full h-[400px] md:h-auto relative">
        <Image
          src={
            steps.find((step) => step.id === activeStep)?.image ||
            "/images/default.svg"
          }
          alt={`Step ${activeStep}`}
          height={1000}
          width={1000}
          className="shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default DiscoverProcess;
