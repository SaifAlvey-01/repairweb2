"use client";

import React from "react";
import Link from "next/link";
import phoneNumber from "../../content/phoneNumber";
import { usePathname } from "next/navigation";
import { GTM_ID } from "../../lib/gtm";

const CallButton = ({ color = "default" }) => {
  const pathname = usePathname();
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: `${GTM_ID}/sxVbCLOniLwYEP671N0p`,
      event_callback: callback,
    });
    return false;
  }

  return (
    <div className="card-actions">
      <button
        className={`px-3 py-2 ${
          color === "default"
            ? "btn btn-info-content bg-black text-white hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
            : "bg-" + color
        } text-black rounded-xl mt-3 duration-150 shadow-md`}
        onClick={() => {
          window.location.href = `tel:${phoneNumber}`;
          gtag_report_conversion(pathname);
          CG.conversion("Call button pressed.");
        }}
      >
        Call Us
      </button>
    </div>
  );
};

export default CallButton;
