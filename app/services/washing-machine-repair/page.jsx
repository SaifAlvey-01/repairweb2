"use client";

import React from "react";
import Image from "next/image";
import CallButton from "../../../components/buttons/CallButton";
import CallOrWhatsappButton from "../../../components/buttons/CallOrWhatsappButton";

const WashingMachinePage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/washing/1.webp"
            className=" rounded-lg shadow-2xl"
            height={500}
            width={500}
          />
          <div className="md:mr-20">
            <h1 className="text-3xl md:text-5xl font-bold">
              Washing Machine Repair Specialists in{" "}
              <span className="text-secondary">Dubai</span> and <br />
              <span className="text-secondary">Abu Dhabi</span>
            </h1>
            <p className="py-6">
              Are you in need of Washing Machine Repair services in Dubai or Abu
              Dhabi? Look no further than{" "}
              <span className="text-secondary font-bold text-lg">
                UAE Repair Expert
              </span>
              . We provide repair services for home appliances in Dubai and Abu
              Dhabi. We repair all major appliances including the dryer. Contact
              to hire us for washing machine repair. When your washing machine
              starts acting up, it can throw a wrench into your daily routine.
              That's where we step in! UAE Repair Expert specializes in
              repairing a wide range of popular washing machine brands,
              including Samsung, Bosch, Siemens, and LG.
            </p>
            <CallButton dark />
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div
        className="hero min-h-screen bg-fixed"
        style={{ backgroundImage: "url('/images/washing/2.webp')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-base-100 bg-black bg-opacity-60 md:p-10">
          <div className="max-w-md md:max-w-3xl lg:max-w-5xl">
            <h1 className="mb-5 text-2xl md:text-3xl font-bold">
              Why Choose UAE Repair Expert For Your Washing Machine
              Repairs?
            </h1>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Skilled Technicians: Our team consists of highly skilled and
                certified technicians who possess extensive experience in
                handling all types of washing machine repairs. They stay up to
                date with the latest industry advancements and are well-equipped
                to diagnose and resolve any issue with your Samsung, Bosch,
                Siemens, or LG washing machine.
              </li>
              <li>
                Prompt and Efficient Service: We understand the importance of a
                fully functional washing machine in your everyday life. That's
                why we prioritize prompt and efficient service. Our technicians
                arrive at your doorstep on time, armed with the necessary tools
                and parts to swiftly and effectively complete the repairs.
              </li>
              <li>
                Genuine Parts: At UAE Repair Expert, we believe in using
                only genuine, high-quality parts for all our repairs. We source
                our parts directly from the manufacturers to ensure optimal
                performance and durability for your Samsung, Bosch, Siemens, or
                LG washing machine.
              </li>
              <li>
                Competitive Pricing: We offer transparent and competitive
                pricing for our repair services. Our goal is to provide
                affordable solutions without compromising on the quality of our
                work. You can expect upfront quotes, so you know exactly what to
                anticipate before we commence any repairs.
              </li>
              <li>
                Customer Satisfaction: Your satisfaction is our utmost priority.
                We take pride in delivering exceptional customer service and
                ensuring your happiness with the results. Our technicians are
                friendly, courteous, and always ready to address any questions
                or concerns you may have regarding your washing machine repairs.
              </li>
              <li>
                Warranty: We stand by our workmanship and the parts we use.
                Therefore, we offer a warranty on all our repairs. If you
                encounter any issues after the repair, simply give us a call,
                and we'll rectify it promptly.
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
              Don't let a malfunctioning washing machine disrupt your daily
              routine. Trust UAE Repair Expert to restore your Samsung,
              Bosch, Siemens, or LG washing machine to its optimal working
              condition. Schedule an appointment with us today by calling our
              hotline or filling out the contact form on our website.
              <br />
              <br /> With UAE Repair Expert, your satisfaction is
              guaranteed. We are your trusted partner for all your washing
              machine repair needs!
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

export default WashingMachinePage;
