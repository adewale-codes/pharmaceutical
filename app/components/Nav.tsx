"use client";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface DropdownItem {
  href: string;
  label: string;
}

const Dropdown: React.FC<{ title: string; items: DropdownItem[] }> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1"
      >
        {title} <ChevronDownIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 shadow-md top-full mt-2 left-0 bg-white shadow-lg rounded-md p-4 w-64">
          {items.map((item: DropdownItem, index: number) => (
            <Link key={index} href={item.href} className="block px-4 py-2 hover:bg-gray-100">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Nav: React.FC = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const buyersDropdownItems: DropdownItem[] = [
    { href: "/subscription", label: "Subscription plan" },
    { href: "/premium", label: "Premium sourcing" },
  ];

  const sellersDropdownItems: DropdownItem[] = [
    { href: "/partner", label: "Partner search" },
    { href: "/listing", label: "Premium listing" },
    { href: "/sellers", label: "Pricing for sellers" },
  ];

  const companyDropdownItems: DropdownItem[] = [
    { href: "/about", label: "About Us" },
    { href: "/experts", label: "Our experts" },
  ];

  return (
    <nav>
      <div className="bg-white text-black grid lg:grid-cols-[200px_minmax(400px,_1fr)_250px] grid-cols-[1fr_50px] items-center lg:px-16 px-4 py-5 h-24">
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
          <Dropdown title="For Buyers" items={buyersDropdownItems} />
          <Dropdown title="For Sellers" items={sellersDropdownItems} />
          <Dropdown title="Company" items={companyDropdownItems} />
        </div>
        <div className="hidden lg:flex">
          <div className="flex justify-center items-center gap-4">
            <div>Sign in</div>
            <button className="py-3 px-5 font-bold rounded-lg bg-blue-600 text-white flex items-center gap-2">
              Get started
              <ChevronRightIcon className="w-4 h-4 stroke-current stroke-2" />
            </button>
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
        className={`block lg:hidden fixed h-64 -mt-4 transform left-0 w-full bg-white transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent text-black`}
      >
        <div className="flex flex-col space-y-5 m-5">
          <Link href="/marketplace">Marketplace</Link>
          <Dropdown title="For Buyers" items={buyersDropdownItems} />
          <Dropdown title="For Sellers" items={sellersDropdownItems} />
          <Dropdown title="Company" items={companyDropdownItems} />
          <div>
            <div className="flex flex-col gap-5">
              <button className="border-2 border-blue-600 py-3 rounded-lg">
                Sign in
              </button>
              <button className="py-3 rounded-lg bg-blue-600 text-white flex justify-center items-center gap-2">
                Get started
                <ChevronRightIcon className="w-4 h-4 stroke-current stroke-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;