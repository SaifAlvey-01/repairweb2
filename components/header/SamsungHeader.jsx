import React from "react";
import { PhoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import phoneNumber from "../../content/phoneNumber";
import Image from "next/image";
const SamsungHeader = () => {
  return (
    <header className="z-50">
      <div className="bg-white flex justify-center py-1 sm:py-0 text-black font-raleway z-50">
        <div className="navbar max-w-7xl">
          <div className="navbar-start">
            <div className="dropdown m-0">
              <label tabIndex={0} className="btn btn-ghost px-3 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box z-50"
              >
                <li>
                  <Link className="hover:bg-neutral-focus hover:text-white" href="/">Home</Link>
                </li>
                <li>
                  <Link className="hover:bg-neutral-focus hover:text-white" href="/about">About Us</Link>
                </li>
                <li>
                  <summary>Services</summary>
                  <ul className="p-2 z-50 focus:!bg-base-100 hover:!bg-base-100">
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#washing">
                        Washing Machine Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white"href="#refrigerator">
                        Refrigerator Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#dishwasher">
                        Dishwasher Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white"  href="#tv">TV Repair</Link>
                    </li>
                    <li>
                      <Link href="/services/dryer-repair">Dryer Repair</Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#stove">
                        Stove / Cooker Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#oven">
                        Gas Oven Repair
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="hover:bg-neutral-focus hover:text-white" href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <Link
              href="/companies/samsung"
              className="sm:text-lg px-1"
            >
              <Image className="mb-3 " src="/Samsung.svg" width={200} height={20}/>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex z-50">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link className="hover:bg-neutral-focus hover:text-white" href="/">Home</Link>
              </li>
              <li>
                <Link className="hover:bg-neutral-focus hover:text-white"href="/about">About Us</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="hover:bg-neutral-focus hover:text-white">Services</summary>
                  <ul className="p-2">
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#washing">
                        Washing Machine Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#refrigerator">
                        Refrigerator Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#dishwasher">
                        Dishwasher Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white"  href="#tv">TV Repair</Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#dryer">Dryer Repair</Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#stove">
                        Stove / Cooker Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:bg-neutral-focus hover:text-white" href="#oven">
                        Gas Oven Repair
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link className="hover:bg-neutral-focus hover:text-white" href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SamsungHeader;