import React from "react";

const PingDot = ({children}) => {
  return (
    <span class="relative flex h-16 w-16">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-16 w-16 bg-primary">{children}</span>
    </span>
  );
};

export default PingDot;
