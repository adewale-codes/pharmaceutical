"use client";
import React, { useState } from "react";
import Image from "next/image";

const DiscoverProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Discover new products",
      description:
        "Submit a request indicating your target market(s), annual purchase forecast, preferable deal type, and your specific remarks. Get feedback via email. Use our platform to track your inquiry progress.",
      image: "/images/first.svg",
    },
    {
      id: 2,
      title: "Get positive response from manufacturers",
      description:
        "Use our platform to communicate directly with manufacturers, ask for updates, and respond to inquiries.",
      image: "/images/second.svg",
    },
    {
      id: 3,
      title: "Connect with qualified manufacturers directly",
      description:
        "Start building direct relationships with manufacturers to ensure a smooth supply chain for your business.",
      image: "/images/third.svg",
    },
  ];

  return (
    <div className="flex flex-col-reverse items-center md:flex-row gap-8">
      <div className="relative flex flex-col gap-6 md:w-1/3 w-full">
        <div className="relative">
          <div className="absolute top-0 left-[12px] w-[2px] h-full bg-gray-300"></div>
          <div
            className="absolute top-0 left-[12px] w-[2px] bg-blue-500 transition-all"
            style={{
              height: `${
                (activeStep - 1) * (100 / (steps.length - 1))
              }%`,
            }}
          />

          {steps.map((step) => (
            <div key={step.id}>
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
                <div className="ml-8 mt-2 text-gray-700">
                  {step.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full h-[400px] md:h-auto relative">
        <Image
          src={steps.find((step) => step.id === activeStep)?.image || ""}
          alt={`Step ${activeStep}`}
          objectFit="cover"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
};

export default DiscoverProcess;
