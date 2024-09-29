import React from "react";

const Section = () => {
  const stats = [
    { value: "83 100+", label: "finished dosage formulation products" },
    { value: "100+", label: "countries of production" },
    { value: "600+", label: "EU GMP manufacturers" },
    { value: "90%+", label: "CTD dossiers search success rate" },
  ];

  return (
    <div className="bg-neutral-100 p-5 md:p-24">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 p-5 ${
              index !== stats.length - 1 ? "md:border-r border-neutral-300" : ""
            }`}
          >
            <div
              className="font-bold text-center text-3xl"
              aria-label={`${stat.value} ${stat.label}`}
            >
              {stat.value}
            </div>
            <div className="text-center">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
