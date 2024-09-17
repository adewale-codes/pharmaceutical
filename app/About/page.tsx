import React from "react";
import Link from "next/link";
import Image from "next/image";
import UserCardSlider from "./components/UserCardSlider";

const users = [
  {
    id: "1",
    name: "Mindaugas Zagorskis",
    role: "Founder and CEO",
    image: "/images/m2.svg",
    description:
      "Tech entrepreneur. 18+ years experience. Expert in leadership, mentorship.",
  },
  {
    id: "2",
    name: "Gediminas Vedrickas",
    role: "Co-founder and CTO",
    image: "/images/m1.svg",
    description:
      "Automation consultant, tech entrepreneur. 20+ years experience.",
  },
  {
    id: "3",
    name: "Gediminas Vedrickas",
    role: "Co-founder and CTO",
    image: "/images/m1.svg",
    description:
      "Automation consultant, tech entrepreneur. 20+ years experience.",
  },
  {
    id: "4",
    name: "Gediminas Vedrickas",
    role: "Co-founder and CTO",
    image: "/images/m1.svg",
    description:
      "Automation consultant, tech entrepreneur. 20+ years experience.",
  },
  {
    id: "5",
    name: "Gediminas Vedrickas",
    role: "Co-founder and CTO",
    image: "/images/m1.svg",
    description:
      "Automation consultant, tech entrepreneur. 20+ years experience.",
  },
  {
    id: "6",
    name: "Gediminas Vedrickas",
    role: "Co-founder and CTO",
    image: "/images/m1.svg",
    description:
      "Automation consultant, tech entrepreneur. 20+ years experience.",
  },
  {
    id: "7",
    name: "Gediminas Vedrickas",
    role: "Co-founder and CTO",
    image: "/images/m1.svg",
    description:
      "Automation consultant, tech entrepreneur. 20+ years experience.",
  },
];

const About = () => {
  return (
    <div>
      <div className="p-5 md:p-24">
        <div className="flex gap-5 items-center flex-col md:flex-row">
          <div className="text-xl font-bold md:text-6xl w-full">
            <p>B2B platform</p>
            <p>by pharma experts</p>
            <p className="text-sky-500">for pharma experts</p>
          </div>
          <div className="">
            <Image
              src={"images/globes.svg"}
              alt="globe"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
      <div className="bg-sky-500 p-5 md:p-24 text-white">
        <div className="text-2xl md:text-6xl font-bold">Our mission</div>
        <div className="font-light text-xl md:text-5xl">
          to make pharmacueticals more
        </div>
        <div className="font-light text-xl md:text-5xl">
          accessible for the world.
        </div>
        <div className="flex flex-col gap-5 py-5">
          <p className="md:text-xl">
            Welcome to Pipelinepharma, the online marketplace connecting
            pharmaceutical manufacturers with distributors worldwide.
          </p>
          <p className="md:text-xl">
            Designed exclusively for business-to-business deals, the platform
            enables manufacturers to find qualified buyers, sign new licensing
            and supply agreements, and expand into new markets. For buyers such
            as pharmaceutical companies, distributors, and pharmacy chains, we
            provide a seamless process to connect with trusted manufacturers and
            streamline building their portfolio pipeline.
          </p>
          <p className="md:text-xl">
            At Pipelinepharma, we are dedicated to serving B2B clients and do
            not sell medicines to individual consumers. Our business development
            professionals supervise each transaction to ensure its success,
            providing unparalleled service and support. Our team has facilitated
            deals on all five continents and over 30 markets, providing our
            clients with a global network of opportunities.
          </p>
          <p className="md:text-xl">
            Founded in 2012 by Mindaugas Zagorskis and Gediminas Vedrickas,
            Pipelinepharma combines industry expertise with cutting-edge
            technology to create a truly innovative platform.
          </p>
          <p className="md:text-xl">
            Join us and discover new possibilities for developing your business.
            We are here to make pharma deals easy.
          </p>
        </div>
      </div>
      <div className="p-5 md:p-24">
        <div>Our experts</div>
        <UserCardSlider users={users} />
      </div>
      <div className="p-5 md:p-24">
        <div className="font-bold text-2xl md:text-6xl text-center md:text-left">
          Our investors
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-5 md:pt-10 items-center justify-center">
          <div className="shadow-md rounded">
            <Image
              src={"images/i1.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="shadow-md rounded">
            <Image
              src={"images/i2.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="shadow-md rounded">
            <Image
              src={"images/i3.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="shadow-md rounded">
            <Image
              src={"images/i4.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="shadow-md rounded">
            <Image
              src={"images/i5.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="p-5 md:p-24">
        <div className="font-bold text-2xl md:text-6xl text-center md:text-left">
          Our clients
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-5 md:pt-10 items-center justify-center">
          <div className="">
            <Image
              src={"images/m1.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <Image
              src={"images/m2.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <Image
              src={"images/m3.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <Image
              src={"images/m4.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <Image
              src={"images/m5.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <Image
              src={"images/m6.svg"}
              alt="Pratica"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="pt-5 md:pt-10">
          <div className="font-light text-xl md:text-5xl text-center">
            and 10 000+ other companies
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
