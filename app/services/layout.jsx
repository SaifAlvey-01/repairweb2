"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import ServicesSection from "../../components/sections/ServicesSection";
import BrandsSection from "../../components/sections/BrandsSection";

const ServiceLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const getPageName = () => {
    if (pathname === "/services") return "Services";
    const pageName = pathname
      .split("/")[2]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    console.log("AAA", pageName);
    return pageName;
  };
  return (
    <div>
      <div
        className="hero min-h-[180px] md:min-h-[250px] bg-fixed "
        style={{ backgroundImage: "url('/images/serviceimg.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white flex flex-col gap-0">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Services</h1>
          </div>
          <div className="text-sm breadcrumbs flex-wrap">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {
                pathname !== "/services" && (
                  <li>{getPageName()}</li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
      {children}
      <BrandsSection />
      <ServicesSection heading="All UAE Repair Expert Services" />
    </div>
  );
};

export default ServiceLayout;
