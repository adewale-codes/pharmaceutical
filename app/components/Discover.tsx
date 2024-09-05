import React from "react";
import Image from "next/image";

const Discover = () => {
  return (
    <div className="p-5 md:p-24">
      <div className="font-extrabold md:text-5xl text-center text-2xl md:text-left md:max-w-[700px]">
        Discover high-quality products
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="order-2 md:order-1 py-5 md:py-10">
          <div className="text-xl">
            Simplify product discovery with the largest EU CTD dossier database.
            Expert curated, up-to-date information. Powerful search engine and
            product filters.
          </div>
          <div className="flex flex-col pt-5 md:pt-10 gap-5">
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">New products added every month</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">GMP approved factories</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">CTD dossiers</div>
            </div>
            <div className="flex items-center gap-2 ">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">All therapy areas</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">
                Generics, biosimilars, medical devices and Neutraceuticals
              </div>
            </div>
          </div>
          <div>
            <button className="p-5 mt-5 md:mt-10 rounded-lg text-2xl font-bold bg-blue-600 text-white text-center">
              Go to the marketplace
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={"images/mail.svg"}
            alt="mail"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
