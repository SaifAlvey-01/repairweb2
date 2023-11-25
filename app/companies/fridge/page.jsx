"use client";
import React from "react";
import SamsungHeader from "../../../components/header/SamsungHeader";
import ServicesSection from "../../../components/sections/ServicesSection";
import Footer from "../../../components/footer/samsungFooter";
import Image from "next/image";
import phoneNumber from "../../../content/phoneNumber";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import CallOrWhatsappButton from "../../../components/buttons/CallOrWhatsappButton";

const SamsungPage = () => {
  return (
    <div>
      <div>
        <SamsungHeader />
        {/* MAIN SECTION */}
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url('/images/samsung.webp')" }}
        >
          <div className="hero-overlay bg-opacity-60" />
          <div className="hero-content text-center md:text-left text-white">
            <div>
              <h1 className="text-4xl  font-raleway text-white leading-tight">
                <span className="text-primary-focus font-bold">
                  UAE Repair Expert
                </span>{" "}
                <span>
                  Samsung Appliances Service Center a Best Fridge / Refrigerator
                  Repair Company in Dubai and Abu Dhabi.
                </span>
              </h1>
              <p className="py-6 text-lg font-raleway">
                We offer the best in Dubai and Abu Dhabi, Affordable,
                Professional Samsung Fridge / Refrigerator Repair Dubai. We offer our
                services 24/7. We are experts for Samsung Fridge / Refrigerator Repair
                service in Duba and Abu Dhabi.
              </p>
              <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
                <button
                  className="px-5 py-4 bg-[black] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
                  onClick={() => {
                    window.location.href = `tel:${phoneNumber}`;
                  }}
                >
                  {phoneNumber}
                </button>
                <button
                  className="px-5 py-4 bg-[black] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
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
      </div>
      <div className=" w-full bg-black h-auto   ">
        <div className="hero min-h-screen bg-[#fafafa] bg-[url(/images/mainbanner.webp)] bg-fixed">
          <div className="hero-overlay bg-black bg-opacity-70" />
          <div className="hero-content  flex-col lg:flex-row-reverse ">
            <img loading="lazy"              src="/images/samsung.webp"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white">
                "Samsung Appliances REPAIR IN DUBAI AND ABU DHABI"
              </h1>
              <p className="py-12 text-md px-4 font-semibold text-white">
                Samsung stands out as a favored brand among the residents of
                Dubai, with{" "}
                <span className="text-lg text-primary-focus font-extrabold">
                  Samsung Fridge / Refrigerators
                </span>{" "}
                finding their place in many households across the city.No matter
                what, no matter when: The Samsung Service Team is here for you.
                If you need help with your Samsung service Center, we have got
                you covered! Samsung Fridge / Refrigerators use less water, energy and
                detergent. As per the Samsung Company, they state, 'Samsung
                Fridge / Refrigerators not only simplify your life, but they do so
                consistently throughout the appliance's lifespan. Their
                automatic programs ensure user-friendly operation while
                delivering optimal results with minimal resource consumption.so
                you can always be sure that your Samsung Customer care is the
                best place to fix your home appliances. Just call us or WhatsApp
                us for booking your appointment.
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

      {/* special Features */}
      <div className="w-full h-[100px] flex justify-center mt-5 md:mt-12">
        <div className="w-[500px] h-[80px] md:h-full  md:mt-0 flex flex-col text-center align-middle">
          <h5 className="text-base font-bold">Our Features</h5>
          <h1 className="text-4xl font-extrabold">Special Features</h1>
        </div>
      </div>

      <div className="w-auto mx-2 mt-3 md:mt-0 md:mx-0 md:w-full h-[800px] md:h-[350px]  flex flex-col md:flex-row justify-evenly items-center ">
        <div className="w-full    md:w-[300px] h-[300px]">
          <div className="w-full  drop-shadow-xl h-[250px] bg-white border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20  hover:scale-110 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <h1 className="text-xl font-extrabold">Reasonable Price</h1>

            <h1 className="p-1 md:p-0">
              We do offer a reasonable price for repair & service of Samsung
              Appliances.
            </h1>
          </div>
        </div>

        <div className="w-full md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl bg-white  border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20  hover:scale-110 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <h1 className="text-xl font-extrabold">Customer Satisfaction</h1>

            <h1 className="p-1 md:p-0">
              We maintain a professional workflow for excellent customer
              relationships.
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl bg-white  border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20  hover:scale-110 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            <h1 className="text-xl font-extrabold">24*7 Services</h1>

            <h1 className="p-1 md:p-0">
              We are available 24*7, Call us for get repair any Samsung
              Appliances.
            </h1>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img loading="lazy"                src="/images/tv/1.webp"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img loading="lazy"                src="/images/washing/1.webp"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img loading="lazy"                src="/images/stove/1.webp"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img loading="lazy"                src="/images/fridge/1.webp"
                className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold max-w-xl">
              UAE Repair Expert in Dubai and Abu Dhabi knowing all the
              quality, reliability, and functionality standers provide you the
              best Samsung Fridge / Refrigerator Repair Service.
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
              <h1 className="text-lg font-bold max-w-xl">
                UAE Repair Expert in Dubai & Abu Dhabi offers guaranteed
                Samsung Fridge / Refrigerator repair. Our company is a quality
                conscious company, so we always provide guaranteed services. As
                our customers trust us so we never like to lose our trust.
              </h1>
              SSamsung Appliances are renowned for their resource-efficient
              operation, consuming less water, energy, and detergent. Therefore,
              you can always rely on Samsung Customer Care as the ultimate
              destination for repairing your home appliances. Simply get in
              touch with us via a call or WhatsApp to schedule an appointment.
              Our service center is equipped to deliver top-quality repair and
              maintenance services for the entire range of Samsung appliances,
              including Samsung Fridge / Refrigerators, Fridge / Refrigerators, fridges, Fridge / Refrigerators,
              and all other electrical home appliances. Our commitment is to
              have a technician arrive and repair your machine on the same day.
              At the Samsung Service Center Dubai, our goal is to provide our
              customers with the finest repair and maintenance services. Our
              professionals possess the expertise to repair all models of
              Samsung Fridge / Refrigerators, equipped with cutting-edge tools for
              maintenance and repair tasks. If anything goes awry with your
              Samsung home appliance, bring it to us, and one of our specialists
              will promptly rectify the issue. We also offer preventative
              maintenance solutions that can extend the lifespan of your Samsung
              appliances. Our customer support operates round the clock,
              ensuring that you can reach out to us at any time. Samsung Service
              Center Dubai takes pride in delivering exceptional repair services
              for Samsung home appliances, right at your doorstep. We guarantee
              a satisfactory experience for every customer, and we remain
              committed to our promise of round-the-clock support. For all your
              Samsung home appliance repair needs, Samsung Service Center Dubai
              is the ultimate destination."
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
            <img loading="lazy"              src="/images/fridge/2.webp"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-base-content">
                We Provide Repairing Servies In Areas OF Dubai and Abu Dhabi!
              </h1>
              <p className="py-6 text-black">
                So, if you are looking for professional Samsung Repair
                Recognizing the demand for budget-friendly services among the
                majority of Dubai's residents, our company consistently strives
                to offer cost-effective and within-budget solutions. We maintain
                a policy of fair pricing, charging our customers in accordance
                with the actual work required, without any excessive fees. If
                you're seeking budget-friendly Samsung Fridge / Refrigerator Repair
                Services in Dubai and Abu Dhabi.
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

      {/* services */}
      <div id="washing" className="w-full h-auto mb-10 flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/fridge/2.webp"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300 hover:cursor-pointer">
                  Fridge / Refrigerator Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    Delivering top-tier, professional solutions that guarantee
                    the optimal performance of your Fridge / Refrigerator. Our Samsung
                    Fridge / Refrigerator Repair Service is your reliable partner for
                    all your Samsung Fridge / Refrigerator repair needs. We understand
                    the importance of a fully functional Fridge / Refrigerator in your
                    daily life, which is why our team of experienced technicians
                    is dedicated to providing prompt, efficient, and
                    professional repair solutions.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-neutral text-white mt-3 hover:scale-110 duration-300 "
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}

      
    </div>
  );
};

export default SamsungPage;
