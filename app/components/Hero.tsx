import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="mt-10 px-5 md:px-24 py-5">
      <div>
        <p className="font-bold md:font-extrabold text-2xl md:text-5xl text-center font-family-poppin">
          Nigeria's <span className="text-blue-900">largest</span> B2B
          <span className="block mt-1 md:mt-3">Pharmaceutical marketplace</span>
        </p>
      </div>

      <div className="flex justify-center mt-20 mb-10">
        <div className="flex overflow-x-auto whitespace-nowrap space-x-20">
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image src="/images/one.svg" alt="Manufactured Drugs" width={50} height={50} />
            <p className="text-lg ml-2">Manufactured Drugs</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image src="/images/one.svg" alt="Distributors" width={50} height={50} />
            <p className="text-lg ml-2">Distributors</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image src="/images/one.svg" alt="Medical Equipment" width={50} height={50} />
            <p className="text-lg ml-2">Medical Equipment</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image src="/images/one.svg" alt="Licenses" width={50} height={50} />
            <p className="text-lg ml-2">Licenses</p>
          </div>
        </div>
      </div>

      <div className="py-2 md:py-14 mt-2">
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
