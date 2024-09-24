import React from "react";
import Image from "next/image";
import Section from "./components/Section";
import DiscoverProcess from "./components/DiscoverProcess";
import Trust from "../components/Trust";
import Feedback from "../components/Feedback";

const partner = () => {
  return (
    <div>
      <div className="p-5 md:p-24">
        <div className="font-bold text-xl md:text-6xl text-center md:text-left md:max-w-[800px]">
          Effortless B2B pharma partner discovery
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-2">
            <Image
              src={"images/sit.svg"}
              alt="handshake"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-1">
            <div>
              Finding a reliable business partner can be challenging due to time
              constraints, lack of skilled labour, and diverse market needs,
              limiting manufacturers' growth potential Our Partner Search
              service helps overcome these challenges.
            </div>
            <div className="active:opacity-50">
              <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
                Request Subscription plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Section />
      </div>
      <div className="p-5 md:p-24">
        <div className="font-bold text-xl md:text-6xl text-center md:text-left md:max-w-[800px]">
          Market or theraphy area targeting
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-2">
            <Image
              src={"images/globe.svg"}
              alt="handshake"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-1">
            <div>
              Leverage our extensive network of qualified buyers in 120
              countries to establish invaluable partnerships. We can tailor the
              outreach by targeting companies based on therapeutic areas,
              segments (private or hostpital), and business mode (licensing or
              distribution), paving the way for seamless collaborations and
              exponential growth.
            </div>
            <div className="active:opacity-50">
              <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
                Request Subscription plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 p-5 md:p-24">
        <div className="font-bold flex text-xl md:justify-end justify-center md:text-6xl text-center md:text-right w-full ">
          <div className="md:max-w-[700px] md:w-auto">
            Quick results and market feedback
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-1">
            <Image
              src={"images/mega.svg"}
              alt="plant"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-2">
            <div>
              At Pipelinepharma, we pride ourselves on getting things done
              quickly. Our Partner Search service delivers results within just a
              couple of weeks from the project start. Gain valuable insights
              from the market, allowing you to swiftly engage in business
              discussions with interested partners. With us, you will be forging
              valuable connections before you know it, propelling your pharma
              business towards success!
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
        <div className="font-bold text-xl md:text-6xl text-center md:text-left md:max-w-[800px]">
          Best ROI: unlock success affordably
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-2">
            <Image
              src={"images/cal.svg"}
              alt="calendar"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-1">
            <div>
              We aim to deliver exceptional value to our clients. Our Partner
              Search service offers the best ROI in the market, with a service
              fee significantly lower than alternative options like pharma
              events, database subscriptions, and marketing services. Save money
              without compromising on results and unlock your pharma business's
              true potential with us.
            </div>
            <div className="active:opacity-50">
              <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
                Request Subscription plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 p-5 md:p-24">
        <div className="font-bold flex text-xl md:justify-end justify-center md:text-6xl text-center md:text-right w-full ">
          <div className="md:max-w-[700px] md:w-auto">
            Your trusted assistant
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-1">
            <Image
              src={"images/mega.svg"}
              alt="plant"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-2">
            <div>
              At Pipelinepharma, we complement your existing business
              development efforts. Our Partner Search service is a powerful
              addition, providing invaluable insights and connections that
              amplify your pharma business's growth. With our experienced team
              working hand in hand with yours, expect exponential results as we
              unlock new possibilities for your ventures.
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
        <div className="flex items-center flex-col gap-5">
          <div className="font-extrabold md:text-5xl text-2xl text-center">
            <div>How it works:</div>
            <div>from concept to partnership in 12 weeks</div>
          </div>
        </div>
        <div className="py-5 md:py-24">
          <DiscoverProcess />
        </div>
      </div>
      <div className="p-5 md:p-24 bg-neutral-100">
        <div>
          <div className="font-extrabold md:text-5xl text-2xl text-center">
            Pricing: customized based on project scope
          </div>
        </div>
        <div>
          <div className="text-center pt-5 md:pt-10">
            The Partner Search pricing model comprises two components: a project
            fee and a success fee. The project fee is adaptable, tailored to
            your project's scope, with additional discounts available for
            multiple products or regions. The deal closing fee is applicable
            solely upon successful payment from the buyer.
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="active:opacity-50">
            <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
              Request Subscription plan
            </button>
          </div>
        </div>
      </div>
      <div>
        <Trust />
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
};

export default partner;
