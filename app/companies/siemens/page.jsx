"use client";

import React from "react";
import SiemensHeader from "../../../components/header/SiemensHeader";
import CallOrWhatsappButton from "../../../components/buttons/BoschButtons";
import phoneNumber from "../../../content/phoneNumber";
import ServicesSection from "../../../components/sections/ServicesSection";
import Footer from "../../../components/footer/samsungFooter";
import Image from "next/image";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const SiemensPage = () => {
  return (
    <div>
      <SiemensHeader />
      {/* MAIN SECTION */}
      <div className="hero min-h-screen bg-[url(/images/backgrounds/bosch-bg.webp)] bg-fixed">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse mt-20 md:mt-10" style={{zIndex: 0}}>
          <Image
            src="/images/fridge/2.webp"
            className="max-w-xs md:max-w-xl shadow-2xl"
            height={300}
            width={300}
          />
          <div>
            <h1 className="text-5xl font-bold font-raleway text-info-content leading-tight">
              Siemens Appliances Service & Repair Center
            </h1>
            <p className="py-6 text-lg font-raleway">
              UAE REPAIR EXPERT is a Siemens Service Centre in Dubai and
              Abu Dhabi. Trust our well-trained technicians to deliver
              professional & reliable Siemens repairs ensuring your appliances are
              in capable hands.Siemens Dishwasher Repair, Dryer,Washing
              Machine,Microwave and Refrigerator Repair.All Siemens Reparing
              Services.
            </p>
            <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 bg-[#219ACD] text-white hover:bg-[#1984b1] rounded duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-5 py-4 bg-[#219ACD] text-white hover:bg-[#1984b1] rounded duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}
              >
                Whatsapp Now
              </button>
            </div>
          </div>
        </div>
      </div>
{/* features */}
<div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img
                src="/images/tv/1.webp"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img
                src="/images/washing/1.webp"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img
                src="/images/stove/1.webp"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img
                src="/images/fridge/1.webp"
                className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold max-w-xl">
              Welcome To Quick Appliances Repair Siemens Service Center
            </h1>
            <div className="flex gap-10 pt-5 flex-col sm:flex-row">
              <div className="flex items-center gap-1">
                <WrenchScrewdriverIcon className="h-10 w-10 text-neutral-focus hover:scale-110 duration-300" />
                <div className="text-lg font-bold">Expert Technician</div>
              </div>
              <div className="flex items-center gap-1">
                <CheckBadgeIcon className="h-12 w-12 text-neutral-focus hover:scale-110 duration-300" />
                <div className="text-lg font-bold">Best Service Quality</div>
              </div>
            </div>
            <p className="py-6 max-w-xl">
              Siemens Service Center Dubai is dedicated to providing high-quality
              service and repairs of Siemens kitchen appliances. We provide repair
              services for all kinds of Siemens kitchen appliances, including
              fridges, cooking ranges, dishwashers, microwaves, and more. Our
              experienced technicians are available 24/7 to provide fast and
              efficient repairs for both residential and commercial customers.
              With our reliable Siemens service center in Dubai, you can rest
              assured that your appliance will be fixed quickly and efficiently
              with the highest quality parts available. We guarantee a fast
              response time for any repair requests and aim to ensure complete
              customer.Siemens appliance repair Siemens appliance service Siemens
              appliance technician Siemens appliance maintenance Siemens appliance
              fix Siemens refrigerator repair Siemens washer and dryer repair Siemens
              dishwasher repair Siemens oven and stove repair Siemens microwave
              repair repair Siemens freezer repair Siemens range hood repair Siemens
              small appliance repair
            </p>
            <div className="divider" />
            <CallOrWhatsappButton />
            <div className="flex gap-10 flex-col sm:flex-row" />
          </div>
        </div>
      </div>
      <div className=" w-full bg-black h-auto md:h-[500px] ">
        <div className="hero min-h-screen bg-[#fafafa]">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <img
              src="/images/fridge/2.jpg"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-base-content">
                We Provide Repairing Servies In Areas OF Dubai and Abu Dhabi!
              </h1>
              <p className="py-6 text-black">
                UAE REPAIR EXPERT Center Dubai is dedicated to providing
                high-quality service and repairs of All Home and kitchen
                appliances. We provide repair services for all kinds of Home and
                kitchen appliances, including fridges, cooking ranges,
                dishwashers, microwaves, and more. Our experienced technicians
                are available 24/7 to provide fast and efficient repairs for
                both residential and commercial customers. Dubai: Downtown
                Dubai, Jumeirah, Dubai Marina, Deira, Jumeirah Beach Residence
                (JBR), Palm Jumeirah, Business Bay, Al Barsha, Al Qusais,
                Mirdif, Silicon Oasis, Dubai Investment Park, International
                City, Al Satwa, Al Safa, Meydan, Dubai Sports City, The Greens
                bu Dhabi: Downtown Abu Dhabi, Corniche, Al Reem Island, Al
                Khalidiya, Al Bateen, Al Mushrif, Al Raha Beach, Khalifa City,
                Al Maqtaa, Yas Island, Saadiyat Island, Mussafah, Al
                Mafraq.Reparing Services Availaible In All Areas of Dubai and
                Abu Dhabi.
              </p>
              <button
                className="btn btn-info-content bg-[#219ACD] text-white hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-4xl font-bold">
              Siemens Service Center Abu DHabi
            </h1>
            <p className="py-6">
              We provide Siemens Service Center in Abu Dhabi.The best Siemens
              Service Center in Abu Dhabi.We provide following services:
            </p>
            <ul>
              <li>Siemens Service Center</li>
              <li>Siemens Repair Center</li>
              <li>Siemens Service Center Dubai</li>
              <li>Siemens Service Center Abu Dhabi</li>
              <li>Siemens Repair Center Dubai</li>
              <li>Siemens Repair Center Abu Dhabi</li>
              <li>Siemens Washing Machine Repair</li>
              <li>Siemens Dishwasher Repair</li>
              <li>Siemens Refrigerator Repair</li>
              <li>Siemens Dryer repair</li>
              <li>Siemens Stove repair</li>
              <li>Siemens Cooker repair</li>
              <li>Siemens Oven repair</li>
            </ul>
            <div className="flex flex-col mt-6 md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 bg-[#219ACD] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-5 py-4 bg-[#219ACD] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}
              >
                Whatsapp Now
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-4xl mt-2 font-bold">
              Siemens Service Center Dubai
            </h1>
            <p className="py-6">
              We provide Siemens Service Center in Dubai. The best Siemens Service
              Center in Dubai. We provide following services:
            </p>
            <ul>
              <li>Siemens Service Center</li>
              <li>Siemens Repair Center</li>
              <li>Siemens Service Center Dubai</li>
              <li>Siemens Service Center Abu Dhabi</li>
              <li>Siemens Repair Center Dubai</li>
              <li>Siemens Repair Center Abu Dhabi</li>
              <li>Siemens Washing Machine Repair</li>
              <li>Siemens Dishwasher Repair</li>
              <li>Siemens Refrigerator Repair</li>
              <li>Siemens Dryer repair</li>
              <li>Siemens Stove repair</li>
              <li>Siemens Cooker repair</li>
              <li>Siemens Oven repair</li>
            </ul>
            <div className="flex flex-col mt-6 md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 bg-[#219ACD] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-5 py-4 bg-[#219ACD] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}
              >
                Whatsapp Now
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* SECOND SECTION */}
      <ServicesSection heading="Our Services" callButtonColor="[#219ACD]" id="Siemensservices" disableLinks  />
      {/* Footer */}
      
    </div>
  );
};

export default SiemensPage;
