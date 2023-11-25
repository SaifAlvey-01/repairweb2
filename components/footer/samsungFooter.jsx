import React from "react";
import Link from "next/link";
import { PhoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";


const SamsungFooter = ({ color, company }) => {
 
  return (
    <footer className="footer flex justify-center p-10 bg-neutral-focus text-white">
      <div className="footer w-full max-w-7xl gap-y-10">
        <Link href="/">
          <div
            className={`flex items-center gap-x-2 text-lg hover:scale-110 duration-300 ${
              color
                ? "text-[" + color + "]"
                : "text-primary-focus hover:text-primary"
            }`}
          >
            <WrenchScrewdriverIcon className=" sm:w-12 sm:h-12 h-5 w-5 " />
            <span className="">UAE Repair Expert</span>
          </div>
          <p className="max-w-lg">
            a company specializing in appliance repair and maintenance services
            in Dubai and Abu Dhabi. Our team consists of highly skilled and
            experienced technicians dedicated to providing professional and
            reliable service.
          </p>
        </Link>
        <div>
          <span className="footer-title">Services</span>
          <Link
            href="/services/washing-machine-repair"
            className="link link-hover"
          >
            Washing Machine Repair
          </Link>
          <Link
            href="/services/refrigerator-repair"
            className="link link-hover"
          >
            Refrigerator Repair
          </Link>
          <Link href="/services/stovecooker-repair" className="link link-hover">
            Stove / Cooker Repair
          </Link>
          <Link href="/services/television-repair" className="link link-hover">
            Television Repair
          </Link>
          <Link href="/services/dishwasher-repair" className="link link-hover">
            Dishwasher Repair
          </Link>
          <Link href="/services/dryer-repair" className="link link-hover">
            Dryer Repair
          </Link>
          <Link href="/services/gas-oven-repair" className="link link-hover">
            Gas Oven Repair
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default SamsungFooter;
