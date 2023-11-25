import React from "react";
import CallButton from "../../components/buttons/CallButton";

const AboutPage = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed bg-[url('/images/aboutus.jpg')]]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-base-100 bg-blend-darken bg-black bg-opacity-60">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          <p className="mb-5">
            Welcome to <b>UAE Repair Expert!</b> <br />
            <br />
            We understand the frustration that comes with a malfunctioning
            appliance. Whether it's a broken refrigerator, a faulty dishwasher,
            or a malfunctioning oven, we know how important it is to have your
            appliances up and running smoothly. That's why we're here to help.{" "}
            <br />
            <br />
            With years of experience in the industry, our team of skilled
            technicians is dedicated to providing fast, reliable, and efficient
            appliance repair services. We take pride in our work and strive to
            exceed our customers' expectations every step of the way. <br />
            <br /> Our mission is simple: to restore your appliances to their
            optimal working condition as quickly as possible. We know that your
            time is valuable, so we prioritize speedy service without
            compromising on quality. Our technicians are highly trained and
            equipped with the latest tools and knowledge to diagnose and repair
            a wide range of appliance issues.
          </p>
          <div className="w-full flex justify-center">
            <CallButton dark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
