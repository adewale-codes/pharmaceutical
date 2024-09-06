import React from "react";
import Image from "next/image";

const Connect = () => {
  return (
    <div className="bg-neutral-100 p-5 md:p-24">
      <div className="flex justify-center md:justify-end">
        <div className="font-extrabold md:text-5xl text-2xl text-center md:text-left md:max-w-[570px]">
          Connect with the right manufacturers
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <Image
            src={"images/globe.svg"}
            alt="mail"
            width={1000}
            height={1000}
          />
        </div>
        <div className="pt-5 md:pt-10">
          <div className="text-xl">
          Reduce time-to-contract by finding qualified manufaturers. Share your business case and connect with suppliers directly.
          </div>
          <div className="flex flex-col pt-5 md:pt-10 gap-5">
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">Get vetted information on products and manufacturers</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">Make requests for quotations easily</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">Connect with manufacturers directly</div>
            </div>
            <div className="flex items-center gap-2 ">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-xl">Close best-price deals without any brokerage fees</div>
            </div>
          </div>
          <div>
            <button className="p-5 mt-5 md:mt-10 rounded-lg text-l font-bold bg-blue-600 text-white text-center">
              Go to the marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
