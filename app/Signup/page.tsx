"use client";
import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CompanyDetails from "./components/CompanyDetails";

const Signup: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(2);
  const submitForm = () => {
    alert("Form submitted");
  };

  return (
    <div>
      {step === 1 && <PersonalDetails onNext={nextStep} />}
      {step === 2 && <CompanyDetails onSubmit={submitForm} />}
      

    </div>
  );
};

export default Signup;
