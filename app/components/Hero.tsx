import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-10 px-5 md:px-24 py-5">
      <div>
        <p className="font-bold md:font-extrabold text-2xl md:text-5xl text-center font-family-poppin">
          Nigeria <span className="text-blue-900">largest B2B</span>{" "}
          pharmaceutical <br /> products marketplace
        </p>
      </div>

      <div className="flex justify-center mt-20 mb-10">
        <div className="flex overflow-x-auto whitespace-nowrap space-x-20">
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image src={"images/one.svg"} alt="drug" width={50} height={50} />
            <p className="text-lg">Manufactured Drugs</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image src={"images/one.svg"} alt="drug" width={50} height={50} />
            <p className="text-lg">Distributors</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image src={"images/one.svg"} alt="drug" width={50} height={50} />
            <p className="text-lg">Medical Equipments</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image src={"images/one.svg"} alt="drug" width={50} height={50} />
            <p className="text-lg">Licenses</p>
          </div>
        </div>
      </div>

      <div className="py-2 md:py-14 mt-2">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
