import React from "react";
import Image from "next/image";

const BrandsSection = () => {
  return (
    <div
      className="flex items-center justify-center bg-primary bg-opacity-40 py-10"
    >
      <div className="max-w-7xl w-full flex flex-wrap justify-center items-center gap-x-2">
        <Image
          className="w-fit h-fit"
          src="/images/logos/samsung-logo.png"
          width={200}
          height={200}
        />
        <Image
          className=""
          src="/images/logos/lg-logo.png"
          width={200}
          height={200}
        />
        <Image
          className="w-fit h-fit mt-5"
          src="/images/logos/bosch-logo.png"
          width={200}
          height={200}
        />
        <Image
          className="w-fit h-fit mt-2"
          src="/images/logos/siemens-logo.png"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default BrandsSection;
