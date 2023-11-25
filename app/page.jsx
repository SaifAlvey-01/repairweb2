"use client";

import Image from "next/image";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import CallButton from "../components/buttons/CallButton";
import ServicesSection from "../components/sections/ServicesSection";
import CallOrWhatsappButton from "../components/buttons/CallOrWhatsappButton";
import phoneNumber from ".././content/phoneNumber.js";

export default function Home() {
  return (
    <>
      <main>
        {/* HERO SECTION 1 */}
        <div
          className="hero min-h-[90vh] bg-fixed"
          style={{ backgroundImage: "url('/images/bg-2.jpg')" }}
        >
          <div className="hero-overlay bg-opacity-50"></div>

          <div className="p-5">
            <h1 className="md:text-5xl text-4xl font-extrabold font-raleway text-white leading-tight">
              UAE Repair Expert Appliances Service & Repair Center
            </h1>
            <p className="py-6 md:text-lg text-md font-medium text-white font-raleway">
              UAE Repair Expert Appliances Repairs is an authorised Bosch
              Service Centre in Dubai and Abu Dhabi. Trust our well-trained
              technicians to deliver professional & reliable Bosch repairs,
              backed by our authorization from the brand itself, ensuring your
              appliances are in capable hands.
            </p>
            <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 bg-black rounded-xl text-white hover:text-black hover:font-extrabold hover:bg-[white]  duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-5 py-4  bg-black rounded-xl text-white hover:text-black hover:font-extrabold hover:bg-[white] duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}
              >
                Whatsapp Now
              </button>
            </div>
          </div>
        </div>
        {/* HERO SECTION 2 */}
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
              <div className="max-w-xs flex justify-end items-end">
                <img loading="lazy"                  src="/images/tv/3.jpg"
                  className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
                />
              </div>
              <div className="max-w-xs drop-shadow-xl  flex justify-start items-end">
                <img loading="lazy"                  src="/images/tv/6.jpg"
                  className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
                />
              </div>
              <div className="max-w-xs flex justify-end items-start">
                <img loading="lazy"                  src="/images/stove/1.webp"
                  className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
                />
              </div>
              <div className="max-w-xs flex justify-start items-start">
                <img loading="lazy"                  src="/images/tv/4.jpg"
                  className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
                />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold max-w-xl">
                Welcome To The UAE Repair Expert Appliance Repair
              </h1>
              <div className="flex gap-10 pt-5 flex-col sm:flex-row">
                <div className="flex items-center gap-1">
                  <WrenchScrewdriverIcon className="h-10 w-10 text-secondary-focus" />
                  <div className="text-lg font-bold">Expert Technician</div>
                </div>
                <div className="flex items-center gap-1">
                  <CheckBadgeIcon className="h-12 w-12 text-secondary-focus" />
                  <div className="text-lg font-bold">Best Service Quality</div>
                </div>
              </div>
              <p className="py-6 max-w-xl">
                With our extensive knowledge, expertise, and commitment to
                customer satisfaction. We are dedicated to providing you with
                the highest quality repairs for Samsung, LG, Bosch and Siemens
                Appliances.
              </p>
              <div className="divider"></div>
              <CallOrWhatsappButton />
              <div className="flex gap-10 flex-col sm:flex-row"></div>
            </div>
          </div>
        </div>

        <div className="w-full h-[30px] bg-white" />
        <div className="w-full h-[100px] bg-white flex justify-center flex-col items-center">
          <div className="w-full h-[80px] bg-white md:h-full  md:mt-0 flex flex-col text-center align-middle">
            <h1 className="md:text-4xl text-3xl text-secondary-focus font-extrabold shadow-2xl">
              Our Salient Distinctions
            </h1>
          </div>
        </div>
        <div className="w-full h-[30px] bg-white" />

        {/* features */}
        <div className="w-full h-auto bg-white md:h-[450px]  flex justify-center ">
          <div className="w-full h-auto md:h-full px-5   ">
            <div className="full h-auto md:h-full  bg-white flex items-center justify-evenly flex-col md:flex-row ">
              <div
                className="md:w-[300px] w-[280px] h-[430px] mt-3 md:mt-0  rounded-2xl "
                style={{ backgroundImage: "url('/images/dryer/service.jpg')" }}
              >
                <div className="w-full  h-[150px] flex flex-col items-center mt-4  ">
                  <div className="text-center">
                    <h1 className="text-black p-3 text-2xl font-bold">
                      Certified Technicians you can Trust
                    </h1>
                  </div>
                  <div>
                    <button
                      className="btn btn-md sm:btn-md md:btn-md lg:btn-md hover:scale-110 duration-300  outline-none border-spacing-0 rounded-full mt-4 hover:bg-white hover:text-black bg-black text-white "
                      onClick={() => {
                        window.location.href = `tel:${phoneNumber}`;
                      }}
                    >
                      Call US Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="md:w-[300px] w-[280px] h-[430px] mt-3 md:mt-0  rounded-2xl "
                style={{ backgroundImage: "url('/images/stove/1.webp')" }}
              >
                <div className="w-full h-[150px] flex flex-col items-center mt-4  ">
                  <div className="text-center">
                    <h1 className="text-black p-3 text-2xl font-bold">
                      Get All OF Your Appliances Repaired
                    </h1>
                  </div>
                  <div>
                    <button
                      className="btn btn-md sm:btn-md md:btn-md lg:btn-md hover:scale-110 duration-300  outline-none border-spacing-0 rounded-full mt-4 hover:bg-white hover:text-black bg-black text-white "
                      onClick={() => {
                        window.location.href = `tel:${phoneNumber}`;
                      }}
                    >
                      Call US Now
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="md:w-[300px] w-[280px] h-[430px] mt-3 md:mt-0  rounded-2xl "
                style={{ backgroundImage: "url('/images/fridge/1.webp')" }}
              >
                <div className="w-full h-[150px] flex flex-col items-center mt-4  ">
                  <div className="text-center">
                    <h1 className="text-black p-3 text-2xl font-bold">
                      Trusted and Preferred By Customers
                    </h1>
                  </div>
                  <div>
                    <button
                      className="btn btn-md sm:btn-md md:btn-md lg:btn-md hover:scale-110 duration-300  outline-none border-spacing-0 rounded-full mt-4 hover:bg-white hover:text-black bg-black text-white "
                      onClick={() => {
                        window.location.href = `tel:${phoneNumber}`;
                      }}
                    >
                      Call US Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="md:w-[300px] w-[280px] h-[430px] mt-3 md:mt-0  rounded-2xl "
                style={{ backgroundImage: "url('/images/tv/service.jpg')" }}
              >
                <div className="w-full h-[150px] flex flex-col items-center mt-4  ">
                  <div className="text-center">
                    <h1 className="text-black p-3 text-2xl font-bold">
                      Get Your Appliances Serviced At Same Day
                    </h1>
                  </div>
                  <div>
                    <button
                      className="btn btn-md sm:btn-md md:btn-md lg:btn-md hover:scale-110 duration-300  outline-none border-spacing-0 rounded-full mt-4 hover:bg-white hover:text-black bg-black text-white "
                      onClick={() => {
                        window.location.href = `tel:${phoneNumber}`;
                      }}
                    >
                      Call US Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[50px] bg-white" />
        {/* STATS */}
        <div className="hero bg-secondary-focus">
          <div className="flex flex-wrap px-2 md:px-10 justify-center lg:justify-between items-center py-5 w-full max-w-6xl gap-1">
            <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
              <div className="stat place-items-center">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">More than</div>
                <div className="stat-value">50+</div>
                <div className="stat-desc">years of field experience</div>
              </div>
            </div>
            <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
              <div className="stat place-items-center">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Around</div>
                <div className="stat-value">18000+</div>
                <div className="stat-desc">clients satisfied by service</div>
              </div>
            </div>
            <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
              <div className="stat place-items-center">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">More than</div>
                <div className="stat-value">70+</div>
                <div className="stat-desc">services provided</div>
              </div>
            </div>
            <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
              <div className="stat place-items-center">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">More than</div>
                <div className="stat-value">800+</div>
                <div className="stat-desc">technicians available</div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section 3 */}

        <div className="w-full h-[30px] bg-white" />

        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
              <div className="max-w-xs flex justify-end items-end">
                <img loading="lazy"                  src="/images/oven/1.jpg"
                  className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
                />
              </div>
              <div className="max-w-xs flex justify-start items-end">
                <img loading="lazy"                  src="/images/stove/2.webp"
                  className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
                />
              </div>
              <div className="max-w-xs flex justify-end items-start">
                <img loading="lazy"                  src="/images/dryer/2.jpeg"
                  className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
                />
              </div>
              <div className="max-w-xs flex justify-start items-start">
                <img loading="lazy"                  src="/images/tv/2.jpg"
                  className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
                />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold max-w-xl">
                Reasons To Choose Us
              </h1>
              <p className="py-6 max-w-xl">
                With our extensive knowledge, expertise, and commitment to
                customer satisfaction. We are dedicated to providing you with
                the highest quality repairs and ensuring your appliances work
                flawlessly.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-start gap-5 max-w-xl">
                  <div className="flex justify-center items-center p-2 min-w-[100px] md:w-[150px] min-h-[100px] bg-secondary-focus rounded-full">
                    <Image src="/hand-shake.svg" height={90} width={90} />
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <div className="text-xl font-bold">
                      Trusted and Reliable Technicians
                    </div>
                    <div>
                      We have a team of highly trained and experienced
                      technicians, dedicated to providing the best service.
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-5 max-w-xl">
                  <div className="flex justify-center items-center p-2 min-w-[100px] md:w-[150px] min-h-[100px] bg-secondary-focus rounded-full">
                    <Image src="/pricetag.svg" height={70} width={70} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-xl font-bold">
                      Experience and Expertise
                    </div>
                    <div>
                      Our company understands the inconvenience caused by
                      malfunctioning appliances.
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-5 max-w-xl">
                  <div className="flex justify-center items-center p-2 min-w-[100px] md:w-[150px] min-h-[100px] bg-secondary-focus rounded-full">
                    <Image src="/technician.svg" height={60} width={60} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-xl font-bold">
                      Customer Satisfaction and Value
                    </div>
                    <div>
                      We prioritize delivering exceptional service and ensuring
                      that your customer's needs are met.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-black h-auto md:h-[500px] ">
          <div className="hero min-h-screen bg-[#fafafa]">
            <div className="hero-content  flex-col lg:flex-row-reverse">
              <img loading="lazy"                src="/images/tv/section-bg.jpg"
                className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
              />
              <div>
                <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-base-content">
                  Enter the world of solutions!
                </h1>
                <p className="py-6 text-black">
                  UAE Repair Expert Center Dubai is dedicated to providing
                  high-quality service and repairs of All Home and kitchen
                  appliances. We provide repair services for all kinds of Home
                  and kitchen appliances, including fridges, cooking ranges,
                  dishwashers, microwaves, and more. Our experienced technicians
                  are available 24/7 to provide fast and efficient repairs for
                  both residential and commercial customers. With our reliable
                  service center in Dubai and Abu Dhabi, you can rest assured
                  that your appliance will be fixed quickly and efficiently with
                  the highest quality parts available. We guarantee a fast
                  response time for any repair requests and aim to ensure
                  complete customer
                </p>
                <button
                  className="btn btn-info-content bg-black text-white hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
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
        <div className="w-full h-[30px] bg-white" />
        <div className="w-full h-[100px] bg-white flex justify-center flex-col items-center">
          <div className="w-full h-[80px] bg-white md:h-full  md:mt-0 flex flex-col text-center align-middle">
            <h1 className="md:text-4xl text-3xl text-secondary-focus font-extrabold shadow-2xl">
              Our Services
            </h1>
          </div>
        </div>
        <div className="w-full h-[30px] bg-white" />

        {/* SERVICES SECTION */}
        <ServicesSection />
      </main>
    </>
  );
}
