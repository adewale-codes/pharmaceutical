import React from "react";
import Image from "next/image";
import Feedback from "../components/Feedback";
import Trust from "../components/Trust";
import FAQList from "../components/FAQList";

const Subscription = () => {
  return (
    <div className="">
      <div className="p-5 md:p-24">
        <div className="font-bold text-xl md:text-6xl text-center md:text-left md:max-w-[800px]">
          Direct connection with manufacturers{" "}
          <span className="text-blue-600">without brokerage fee</span>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-2">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-1">
            <div>
              Our subscription plan unlocks boundless search capabilities for
              pharmaceutical products{" "}
              <span className="font-bold">
                in the B2B marketplace of finished dosage formulations.
              </span>{" "}
              Get connected with qualified manufacturers and explore a world of
              possibilities
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
        <div className="font-bold text-xl md:text-6xl text-center md:text-left md:max-w-[800px]">
          Unleash direct supplier connections
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-2">
            <Image
              src={"images/shake.svg"}
              alt="handshake"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-1">
            <div>
              With thousands of dossiers in the database, our subscription plan
              lets you directly communicate with almost any supplier. No more
              middleman involved! You can negotiate and connect with them
              directly, forming valuable relationships for smooth and efficient
              procurement.
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
        <div className="font-bold text-xl md:text-6xl text-center md:text-left md:max-w-[500px]">
          No broker commissions. No term sheet fees
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-1">
            <Image
              src={"images/plant.svg"}
              alt="plant"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-2">
            <div>
              Our subscription plan eliminates broker commissions and waives our
              standard term sheet fee in the case of a successful deal. We
              enable you to achieve substantial cost savings, leading to
              improved profit margins.
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
        <div className="font-bold text-xl md:text-6xl text-center md:text-left md:max-w-[800px]">
          Exceptional return on investment
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
              Our subscription plan outshines traditional marketing channels
              like events and exhibitions, offering access to a vast supplier
              network, direct communication, and significant cost savings.
              Maximize your investment and outperform competitors with our
              unparalleled value.
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
          Enhanced support and priority
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <div className="w-full order-1 md:order-1">
            <Image
              src={"images/chat.svg"}
              alt="chat"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-14 order-2 md:order-2">
            <div>
              With our subscription plan, your inquiries receive top priority
              compared to non-subscribers, ensuring prompt attention and
              efficient communication. The plan also includes a dedicated
              account manager who brings industry expertise and personalized
              assistance, ensuring seamless navigation of the pharmaceutical
              landscape.
            </div>
            <div className="active:opacity-50">
              <button className="p-5 mt-5 md:mt-10 rounded-lg text-xl font-bold bg-blue-600 text-white text-center">
                Request Subscription plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Feedback />
      </div>
      <div className="p-5 md:p-24">
        <div>
            <FAQList />
        </div>
      </div>
      <div>
        <Trust />
      </div>
    </div>
  );
};

export default Subscription;
