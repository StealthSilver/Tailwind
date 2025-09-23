import React from "react";

export const Hero = () => {
  return (
    <div className="hero-root">
      <div className="badge">
        <span> What are form-199 filing requirements ?</span>

        <svg
          viewBox="0 0 16 16"
          width="20"
          height="20"
          fill="none"
          className="badge-icon"
        >
          <path
            stroke="#1e1f25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.5"
            strokeWidth="1"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>

      <h1 className="hero-title">
        Magically simplify <br /> accounting and taxes
      </h1>

      <p className="hero-subtitle">
        Automated bookkeeping, effortless tax filing, real‑time insights. Set up
        in 10 mins. Back to building by 3:24pm.
      </p>
    </div>
  );
};
