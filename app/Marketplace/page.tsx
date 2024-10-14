"use client";
import React from "react";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";

const Marketplace = () => {
  return (
    <div className="px-5 md:px-24">
      <div className="flex justify-center mt-20 mb-10">
        <div className="flex overflow-x-auto whitespace-nowrap space-x-20">
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image
              src="/images/one.svg"
              alt="Manufactured Drugs"
              width={50}
              height={50}
            />
            <p className="text-lg ml-2">Manufactured Drugs</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image
              src="/images/one.svg"
              alt="Distributors"
              width={50}
              height={50}
            />
            <p className="text-lg ml-2">Distributors</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image
              src="/images/one.svg"
              alt="Medical Equipment"
              width={50}
              height={50}
            />
            <p className="text-lg ml-2">Medical Equipment</p>
          </div>
          <div className="flex items-center hover:text-blue-600 transition duration-300 text-4xl">
            <Image
              src="/images/one.svg"
              alt="Licenses"
              width={50}
              height={50}
            />
            <p className="text-lg ml-2">Licenses</p>
          </div>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="pt-5 md:pt-20">
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4">
            <h1 className="text-2xl font-bold mb-4">Originals for sale</h1>
            <p>24 products found</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              <ProductCard
                title="Sinecatechins"
                description="Ointment 10% - 15 g, 30 g"
                dossierType="EU CTD"
                dossierStatus="Ready to file"
                country="European Union"
                gmp="EU GMP"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
