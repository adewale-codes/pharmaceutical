"use client";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="bg-white text-black grid lg:grid-cols-[200px_minmax(400px,_1fr)_200px] grid-cols-[1fr_50px] items-center lg:px-28 px-4 py-5 h-24">
        <Link href="/">
          <p>Pharmacuetical</p>
        </Link>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
          <Link
            className={pathName === "/marketplace" ? "" : "text-black"}
            href="/marketplace"
          >
            Marketplace
          </Link>
          <Link
            className={pathName === "/buyers" ? "" : "text-black"}
            href="/buyers"
          >
            For buyers
          </Link>
          <Link
            className={pathName === "/sellers" ? "" : "text-black"}
            href="/sellers"
          >
            For sellers
          </Link>
          <Link
            className={pathName === "/services" ? "" : "text-black"}
            href="/services"
          >
            Other services
          </Link>
          <Link
            className={pathName === "/company" ? "" : "text-black"}
            href="/company"
          >
            Company
          </Link>
        </div>
        <div className="hidden lg:flex">
          <div className="flex justify-center items-center gap-4">
            <div>Sign in</div>
            <button className="py-3 px-5 rounded-lg bg-orange-600 text-white">Get started</button>
          </div>
        </div>
        <div className="lg:hidden flex justify-self-end cursor-pointer">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" onClick={() => setIsOpen(false)} />
          ) : (
            <Bars3Icon className="h-6 w-6" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      <div
        className={`block lg:hidden fixed h-64 -mt-4  transform left-0 w-full bg-white transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent text-black`}
      >
        <div className="flex flex-col space-y-5 m-5">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/buyers">For buyers</Link>
          <Link href="/sellers">For sellers</Link>
          <Link href="/services">Other services</Link>
          <Link href="/company">Company</Link>
          <div>
            <div className=" flex flex-col gap-5">
              <button className="border-2 border-orange-600 py-3 rounded-lg">Sign in</button>
              <button className="py-3 rounded-lg bg-orange-600 text-white">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
