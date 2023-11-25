import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer p-5 md:p-12 bg-base-content text-white">
    <div>
    <Link
              href="/companies/bosch"
              className="btn btn-ghost h-[80px] ml-[-10px] md:ml-0 rounded-xl normal-case sm:text-lg px-1"
            >
              <Image src="/logo2.svg" className="overflow-hidden ml-[-10px] md:ml-0 mt-1 md:mt-0" width={200} height={200} />
              <span className="ml-[-125px]  mt-[-100px] md:ml-[-120px] md:mt-[-100px]  font-bold text-sm md:text-2xl">UAE REPAIR EXPERT</span>
            </Link>
            <p className="max-w-lg ">
            A company specializing in appliance repair and maintenance services
            in Dubai and Abu Dhabi. Our team consists of highly skilled and
            experienced technicians dedicated to providing professional and
            reliable service.
          </p>
    </div> 
  
    <div >
    <span className="footer-title ">Services</span>
          <Link
            href="#"
            className="link link-hover"
          >
            Washing Machine Repair
          </Link>
          <Link
            href="#"
            className="link link-hover"
          >
            Refrigerator Repair
          </Link>
          <Link href="#" className="link link-hover">
            Stove / Cooker Repair
          </Link>
          <Link href="#" className="link link-hover">
            Television Repair
          </Link>
          <Link href="#" className="link link-hover">
            Dishwasher Repair
          </Link>
          <Link href="#" className="link link-hover">
            Dryer Repair
          </Link>
          <Link href="#" className="link link-hover">
            Gas Oven Repair
          </Link>
    </div> 
    <div>
    <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
    </div>
  </footer>
  
  );
};

export default Footer;
