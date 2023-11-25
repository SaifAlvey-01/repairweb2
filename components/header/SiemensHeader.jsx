"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import phoneNumber from "../../content/phoneNumber";
import Image from "next/image";

const SiemensHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef(null);
  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleServices = () => setShowServices(!showServices);
  const handleClickOutside = (event) => {
    if (servicesRef.current && !servicesRef.current.contains(event.target)) {
      setShowServices(false);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    let classes = document.getElementById("header")?.classList;
    if (classes){
      if (position > 60) {
        classes.remove("bg-transparent");
        classes.remove("py-5");
        classes.add("bg-white");
        classes.add("shadow-md");
      }
      if (position < 60) {
        classes.add("bg-transparent");
        classes.add("py-5");
        classes.remove("bg-white");
        classes.remove("shadow-md");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={{zIndex: 50000}}>
      <div className=" flex justify-center py-1 sm:py-0 text-black font-raleway z-50">
        <div
          id="header"
          className="navbar max-w-7xl fixed bg-transparent duration-300 py-5"
          style={{zIndex: 50000}}
        >
          <div className="navbar-start">
            <div className="dropdown m-0">
              <label
                tabIndex={0}
                className="btn btn-ghost px-3 lg:hidden"
                onClick={() => toggleMenu()}
              >
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
              {showMenu && (
                <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box z-50">
                  <li>
                    <Link href="/companies/siemens">Home</Link>
                  </li>
                  <li>
                    <Link href="/companies/siemens">About Us</Link>
                  </li>
                  <li>
                    <summary>Services</summary>
                    <ul className="p-2 z-50 focus:!bg-base-100 hover:!bg-base-100">
                      <li>
                        <Link href="/companies/siemens#Siemensservices">
                          Washing Machine Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/companies/siemens#Siemensservices">
                          Refrigerator Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/companies/siemens#Siemensservices">
                          Dishwasher Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/companies/siemens#Siemensservices">
                          TV Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/companies/siemens#Siemensservices">Dryer Repair</Link>
                      </li>
                      <li>
                        <Link href="/companies/siemens#Siemensservices">
                          Stove / Cooker Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/companies/siemens#Siemensservices">
                          Gas Oven Repair
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/companies/siemens">Contact Us</Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              href="/companies/siemens"
              className="btn btn-ghost normal-case sm:text-lg hidden"
            >
              <Image src="/siemens.svg" width={200} height={50} />
            </Link>
            <Link
              href="/companies/siemens"
              className="btn btn-ghost normal-case sm:text-lg px-1"
            >
              <Image src="/siemens.svg" width={200} height={50} />
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex z-50 text-info-content font-extrabold">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/companies/siemens">Home</Link>
              </li>
              <li>
                <Link href="/companies/siemens">About Us</Link>
              </li>
              <li>
                <Link href="/companies/siemens#Siemensservices">Services</Link>
              </li>
              <li>
                <button
                  className="px-5 bg-[#219ACD] text-white hover:bg-[#1984b1] hover:text-white rounded duration-150 shadow-md"
                  onClick={() => {
                    window.location.href = `tel:${phoneNumber}`;
                  }}
                >
                  Call Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiemensHeader;
