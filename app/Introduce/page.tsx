"use client";
import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CompanyDetails from "./components/CompanyDetails";

const Introduce: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = () => {
    alert("Form submitted");
    setStep(1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full my-10 py-10 max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6 text-xs md:text-base text-center">
          <span
            className={`mx-2 px-3 py-1 rounded-full ${
              step === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            Personal Details
          </span>
          <span
            className={`mx-2 px-3 py-1 rounded-full ${
              step === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            Company Details
          </span>
        </div>

        {step === 1 && <PersonalDetails onNext={nextStep} />}
        {step === 2 && <CompanyDetails onSubmit={submitForm} />}

        {step > 1 && (
          <button
            onClick={prevStep}
            className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Introduce;
