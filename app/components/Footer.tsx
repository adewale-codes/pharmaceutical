import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white p-5 md:p-10">
      <div className="container mx-auto">
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-5">
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Our experts
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Partnering with us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Values for buyers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Subscription plan
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Premium sourcing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Value for sellers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pricing for sellers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Partner search
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pharmaceuticals for sale
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Assets for sale
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Market research
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Advisory services
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pharmaceuticals manufacturers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pharmaceuticals manufacturers by country
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-2 gap-8">
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Our experts
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Partnering with us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="pt-5 mb-2">
                <a href="/" className="hover:underline">
                  Value for buyers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Subscription plan
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Premium sourcing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Values for sellers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pricing for sellers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Partner search
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pharmaceuticals for sale
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Assets for sale
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Market research
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Advisory services
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pharmaceutical manufacturers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Pharmaceutical manufacturers by country
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col lg:flex-row justify-between items-center text-sm">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center mb-4 lg:mb-0">
            <Image
              src="/images/nigeria.svg"
              alt="Nigeria flag"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="mr-2">GDPR compliant</span>
            <a href="/" className="hover:underline mr-2">
              Terms of service
            </a>
            <a href="/" className="hover:underline mr-2">
              Privacy policy
            </a>
            <a href="/" className="hover:underline">
              Cookie policy
            </a>
          </div>
          <div className="text-center lg:text-right">
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn logo"
              width={32}
              height={32}
            />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col lg:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row gap-5 lg:gap-0 items-center mb-4 lg:mb-0">
            <span className="mr-2">SALES AND SUPPORT</span>
            <a href="tel:+2348132494814" className="hover:underline mr-2">
              +234-813-2494-814
            </a>
            <a href="mailto:support@airdomax.com" className="hover:underline mr-2">
              support@airdomax.com
            </a>
          </div>
          <div className="text-center lg:text-right">
            <p>
              © 2024 Airdomax Limited. All rights reserved. EU patent number 7.069.242
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
