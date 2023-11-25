"use client";

import React from "react";
import Image from "next/image";
import CallButton from "../../../components/buttons/CallButton";
import CallOrWhatsappButton from "../../../components/buttons/CallOrWhatsappButton";

const TvPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/tv/1.webp"
            className=" rounded-lg shadow-2xl"
            height={500}
            width={500}
          />
          <div className="md:mr-20">
            <h1 className="text-3xl md:text-5xl font-bold">
              Television Repair Specialists in{" "}
              <span className="text-secondary">Dubai</span> and <br />
              <span className="text-secondary">Abu Dhabi</span>
            </h1>
            <p className="py-6">
              Are you in need of Television Repair services in Dubai or Abu
              Dhabi? Look no further than{" "}
              <span className="text-secondary font-bold text-lg">
                UAE Repair Expert
              </span>
              . Is your television acting up? Don't worry! Quick Appliances
              Repairs is here to provide you with reliable and efficient
              television repair services. We specialize in repairing a wide
              range of popular TV brands, including Samsung, Bosch, Siemens, and
              LG.
            </p>
            <CallButton dark />
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div
        className="hero min-h-screen bg-fixed"
        style={{ backgroundImage: "url('/images/tv/2.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-base-100 bg-black bg-opacity-60 md:p-10">
          <div className="max-w-md md:max-w-3xl lg:max-w-5xl">
            <h1 className="mb-5 text-2xl md:text-3xl font-bold">
              Why Choose UAE Repair Expert For Your TV Repairs?
            </h1>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Expert Technicians: Our team consists of highly skilled and
                certified technicians who have extensive experience in handling
                television repairs. They stay up-to-date with the latest
                advancements in the industry and are equipped to diagnose and
                fix any issue with your Samsung, Bosch, Siemens, or LG TV.
              </li>
              <li>
                Prompt and Efficient Service: We understand the importance of
                having your TV up and running as quickly as possible. That's why
                we prioritize prompt and efficient service. Our technicians will
                arrive at your location on time, equipped with the necessary
                tools and expertise to diagnose and resolve the problem
                promptly.
              </li>
              <li>
                Genuine Parts and Quality Repairs: At UAE Repair Expert,
                we believe in using only genuine and high-quality parts for all
                our repairs. We source our parts directly from the manufacturers
                to ensure optimal performance and reliability for your Samsung,
                Bosch, Siemens, or LG TV. Our skilled technicians are trained to
                provide thorough repairs that address the root cause of the
                problem, ensuring long-lasting results.
              </li>
              <li>
                Transparent Pricing: We offer competitive and transparent
                pricing for our TV repair services. We provide upfront quotes,
                so you know exactly what to expect before we begin any repairs.
                Our goal is to provide affordable solutions without compromising
                on the quality of our work.
              </li>
              <li>
                Customer Satisfaction: Your satisfaction is our top priority. We
                take pride in delivering exceptional customer service and
                ensuring that you are happy with the results. Our friendly and
                knowledgeable technicians are always available to answer any
                questions you may have and will go the extra mile to make your
                TV repair experience smooth and hassle-free.
              </li>
              <li>
                Warranty: We stand behind our work and the parts we use. That's
                why we offer a warranty on all our TV repairs. If you experience
                any issues after the repair, simply contact us, and we'll make
                it right.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold">
              Contact UAE Repair Expert Today!
            </h1>
            <p className="py-6">
              Don't let a malfunctioning TV ruin your entertainment experience.
              Trust UAE Repair Expert to bring your Samsung, Bosch,
              Siemens, or LG TV back to life. Schedule an appointment with us
              today by calling our hotline or filling out the contact form on
              our website.
              <br />
              <br /> With UAE Repair Expert, you can expect professional
              and reliable TV repair services that exceed your expectations. We
              are your go-to partner for all your television repair needs!
            </p>
            <div className="flex justify-center">
              <CallOrWhatsappButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvPage;
