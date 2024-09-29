"use client";
import React from "react";
import Image from "next/image";

interface TrustPartner {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Trust = () => {
  const trustPartners: TrustPartner[] = [
    { src: "/images/none.svg", alt: "Macleods", width: 200, height: 200 },
    { src: "/images/ntwo.svg", alt: "MedoChime", width: 100, height: 100 },
    { src: "/images/nthree.svg", alt: "GenePharm", width: 200, height: 200 },
    { src: "/images/nfour.svg", alt: "Arasto", width: 200, height: 200 },
    { src: "/images/nfive.svg", alt: "RaFarm", width: 100, height: 100 },
    { src: "/images/nsix.svg", alt: "BioFarm", width: 200, height: 200 },
  ];

  return (
    <section className="bg-neutral-100 p-5 md:p-24">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-10">
          <h2 className="font-extrabold md:text-5xl text-2xl text-center">
            Trusted by
          </h2>
          <div className="flex justify-center items-center flex-col md:flex-row gap-5 md:gap-20">
            {trustPartners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="text-center md:text-xl font-bold">
            And 10,000+ other companies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
