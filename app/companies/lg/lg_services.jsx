import React from 'react'

function Lg_Services() {
  return (
    <div>
       {/* services */}
       <div id="washing" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/washing/2.webp"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300 hover:cursor-pointer">
                  Washing Machine Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    Delivering top-tier, professional solutions that guarantee
                    the optimal performance of your washing machine. Our LG
                    Washing Machine Repair Service is your reliable partner for
                    all your LG washing machine repair needs. We understand the
                    importance of a fully functional washing machine in your
                    daily life, which is why our team of experienced technicians
                    is dedicated to providing prompt, efficient, and
                    professional repair solutions.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn  bg-[#C6004D] hover:bg-neutral-focus text-white mt-3 hover:scale-110 duration-300 "
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

          <div
            id="refrigerator"
            className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl"
          >
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/fridge/3.webp"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Refrigerator Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our LG Refrigerator Repair Service, we take pride in
                    delivering top-tier, professional solutions that guarantee
                    the optimal performance of your refrigerator. We understand
                    the vital role a fully functional refrigerator plays in your
                    daily life, preserving food and beverages, which is why our
                    team of experienced technicians is committed to providing
                    prompt, efficient, and professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn  bg-[#C6004D] hover:bg-neutral-focus text-white mt-3 hover:scale-110 duration-300 "
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

          <div
            id="stove"
            className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl"
          >
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/stove/2.webp"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Stove/Cooker Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our LG Stove Cooker Repair Service, we take immense pride
                    in delivering top-tier, professional solutions that ensure
                    the optimal performance of your stove cooker. Recognizing
                    the crucial role a fully functional stove cooker plays in
                    your daily life, cooking and preparing meals, our team of
                    skilled technicians is dedicated to offering prompt,
                    efficient, and professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn  bg-[#C6004D] hover:bg-neutral-focus text-white mt-3 hover:scale-110 duration-300 "
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

          <div
            id="tv"
            className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl"
          >
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/tv/2.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Television Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our LG TV Repair Service, we take pride in delivering
                    top-tier, professional solutions that guarantee the optimal
                    performance of your TV. Understanding the vital role a fully
                    functional TV plays in your daily life, providing
                    entertainment and information, our team of experienced
                    technicians is committed to providing prompt, efficient, and
                    professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn  bg-[#C6004D] hover:bg-neutral-focus text-white mt-3 hover:scale-110 duration-300 "
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

          <div
            id="dishwasher"
            className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl"
          >
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/dishwasher/2.png"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Dishwasher Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our LG Dishwasher Repair Service, we take pride in
                    delivering top-tier, professional solutions that ensure the
                    optimal performance of your dishwasher. Understanding the
                    vital role a fully functional dishwasher plays in your daily
                    life, cleaning and sanitizing your dishes, our team of
                    experienced technicians is dedicated to providing prompt,
                    efficient, and professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn  bg-[#C6004D] hover:bg-neutral-focus text-white mt-3 hover:scale-110 duration-300 "
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

          <div
            id="dryer"
            className="mt-5 mb-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl"
          >
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/dryer/1.jpeg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Dryer Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our LG Dryer Repair Service, we take pride in delivering
                    top-tier, professional solutions that ensure the optimal
                    performance of your dryer. Understanding the vital role a
                    fully functional dryer plays in your daily life, efficiently
                    drying your clothes, our team of experienced technicians is
                    dedicated to providing prompt, efficient, and professional
                    repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn text-white bg-[#C6004D] hover:bg-neutral-focus mt-3 hover:scale-110 duration-300 "
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

          <div
            id="oven"
            className="mt-5 mb-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl"
          >
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/oven/1.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Gas Oven Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our LG Gas Oven Repair Service, we take pride in
                    delivering top-tier, professional solutions that ensure the
                    optimal performance of your gas oven. Understanding the
                    vital role a fully functional gas oven plays in your daily
                    life, cooking and baking meals, our team of experienced
                    technicians is dedicated to providing prompt, efficient, and
                    professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn bg-[#C6004D] hover:bg-neutral-focus text-white mt-3 hover:scale-110 duration-300 "
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
    </div>
  )
}

export default Lg_Services
