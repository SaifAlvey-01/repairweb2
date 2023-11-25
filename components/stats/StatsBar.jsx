import React from "react";

const StatsBar = () => {
  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Experience</div>
        <div className="stat-value">10+</div>
        <div className="stat-desc">years of dedicated experience</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Services</div>
        <div className="stat-value text-secondary">6+</div>
        <div className="stat-desc text-secondary">different kind of appliance services</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">100%</div>
        <div className="stat-value">Precision</div>
        <div className="stat-desc">of appliance repair</div>
      </div>
    </div>
  );
};

export default StatsBar;
