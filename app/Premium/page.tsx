import React from "react";
import Image from "next/image";
import Feedback from "../components/Feedback";

const premium = () => {
  return (
    <div>
      <div className="p-5 bg-neutral-100 md:p-24">
        <div className="flex gap-5 items-center flex-col md:flex-row">
          <div>
            <div className="text-xl font-bold md:text-6xl w-full">
              <p>Premium sourcing.</p>
              <p className="text-sky-500">
                Find differentiated, value-added products and trusted partners
              </p>
            </div>
            <div className="pt-5 md:pt-10">
              We execute full-range sourcing services on behalf of a buyer for
              pharma products and business partnerships. Maximize your chances
              of finding the best manufacturers of pharmaceuticals, medical
              devices or nutraceuticals for your target market.
            </div>
            <div className="active:opacity-50">
              <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
                Request Subscription plan
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src={"images/pre.svg"}
              alt="globe"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
      <div className="p-5 md:p-24">
        <div className="text-center font-bold text-xl md:text-4xl">
          <p>Tailored service for your unique business objective.</p>
          <p>How it works?</p>
        </div>
        <div className="flex flex-col items-center  gap-5 md:flex-row pt-5 md:pt-10">
          <div className="bg-gray-100 h-64 w-64 rounded p-5">
            <div className="text-center font-bold md:text-xl">
              <p className="">Define business case requirements</p>
            </div>
            <div className="pt-24 text-center">
              <p className="text-blue-600 font-bold md:text-xl">Step 1</p>
            </div>
          </div>
          <div className="bg-gray-100 h-64 w-64 rounded p-5">
            <div className="text-center font-bold md:text-xl">
              <p className="">Get the offer & confirm the project</p>
            </div>
            <div className="pt-24 text-center">
              <p className="text-blue-600 font-bold md:text-xl">Step 2</p>
            </div>
          </div>
          <div className="bg-gray-100 h-64 w-64 rounded p-5">
            <div className="text-center font-bold md:text-xl">
              <p className="">Focus on your business & wait for the report</p>
            </div>
            <div className="pt-16 text-center">
              <p className="text-blue-600 font-bold md:text-xl">Step 3</p>
            </div>
          </div>
          <div className="bg-gray-100 h-64 w-64 rounded p-5">
            <div className="text-center font-bold md:text-xl">
              <p className="">
                Get introduced to the qualified dossier owner & manufactuer
              </p>
            </div>
            <div className="pt-16 text-center">
              <p className="text-blue-600 font-bold md:text-xl">Step 4</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Feedback />
      </div>
      <div className="p-5 md:p-24">
        <div className="font-extrabold md:text-5xl text-center text-2xl md:text-left md:max-w-[700px]">
          How will we find the best match for you?
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="order-2 md:order-1 py-5 md:py-10">
            <div className="flex flex-col pt-5 gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={"images/mark.svg"}
                  alt="mark"
                  height={25}
                  width={25}
                />
                <div className="md:text-lg">
                  We will use Pipelinepharma extensive network, external
                  resources and third-party databases to conduct searches.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"images/mark.svg"}
                  alt="mark"
                  height={25}
                  width={25}
                />
                <div className="md:text-lg">
                  Within an agreed timeframe, a dedicated account manager will
                  actively search for products or manufacturers in the specified
                  areas on your behalf.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"images/mark.svg"}
                  alt="mark"
                  height={25}
                  width={25}
                />
                <div className="md:text-lg">
                  We will do our utmost to find you a qualified and reliable
                  supplier based on the criteria and preferences you set.
                </div>
              </div>
            </div>
            <div>
              <div className="active:opacity-50">
                <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
                  Request Subscription plan
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={"/images/best.svg"}
              alt="mail"
              width={1500}
              height={1500}
            />
          </div>
        </div>
      </div>
      <div className="p-5 md:p-24 bg-neutral-100">
        <div className="font-bold flex text-xl md:justify-end justify-center md:text-6xl text-center md:text-right w-full ">
          <div className="md:max-w-[700px] md:w-auto">
            Gain valuable insights from our findings
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-1">
            <Image
              src={"images/not.svg"}
              alt="plant"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-2">
            <div>
              If you require evidence of commercial potential, we can perform
              research to verify your business case before making any
              investments in that market.
            </div>
            <div className="pt-2">
              Our analysis will give valuable insights into a particular
              product&apos;s performance in different countries and help identify
              opportunities for growth and development.
            </div>
            <div className="active:opacity-50">
              <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
                Request Subscription plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-24">
        <div className="font-bold md:text-5xl text-center text-2xl">
          Save time and effort by entrusting your product sourcing to us
        </div>
        <div className="text-center pt-5 md:pt-10 md:text-lg">
          <div>
            Premium service is a paid service provided by Pipelinepharma
          </div>
          <div>
            The price depends on the specific business case and project&apos;s scope
          </div>
        </div>
        <div className="flex pt-5 md:pt-10 items-center justify-center">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">
                Indicative price is €1,000 for a single product search
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">
                Price decreases with multiple product searches
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">
                Success fee is applied based on the results
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">
                Indicative project duration: 8 weeks
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"images/mark.svg"}
                alt="mark"
                height={25}
                width={25}
              />
              <div className="md:text-lg">
                Deliverables: report and selected supplier contacts
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:pt-10 md:pb-24 md:px-24">
        <div className="bg-gray-100 p-5 md:pt-10 rounded">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              For more information, contact our Business Development & Licensing
              team
            </div>
            <div className="active:opacity-50">
              <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
                Request Subscription plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default premium;
