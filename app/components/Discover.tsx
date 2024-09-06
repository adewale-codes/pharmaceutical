import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";


const Discover = () => {
  return (
    <div className="p-5 md:p-24 bg-blue-50">
      <div className="font-extrabold md:text-5xl text-center text-2xl md:text-left md:max-w-[700px]">
        Discover high-quality products
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="order-2 md:order-1 py-5 md:py-10">
          <div className="text-lg text-justify">ad
            Simplify product discovery with the largest EU CTD dossier database.
            Expert curated, up-to-date information. Powerful search engine and
            product filters.
          </div>
          <div className="flex flex-col pt-5 md:pt-10 gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">New products added every month</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">GMP approved factories</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">CTD dossiers</div>
            </div>
            <div className="flex items-center gap-2 ">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">All therapy areas</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">
                Generics, biosimilars, medical devices and Neutraceuticals
              </div>
            </div>
          </div>
          <div>
           <div className="active:opacity-50">
             <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
               Go to the marketplace
             </button>
           </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={"/images/drug-related.png"}
            alt="mail"
            width={1500}
            height={1500}
          />
        </div>
    </div>
    </div>
  );
};

export default Discover;
