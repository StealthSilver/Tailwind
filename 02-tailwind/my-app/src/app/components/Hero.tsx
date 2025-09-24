import React from "react";

export const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full my-20">
      <button className="border px-4 py-1 rounded-full border-gray-200 hover:bg-gray-200 transition cursor-pointer duration-200 bg-gray-100 text-neutral-800 font-semibold">
        What are early stage tax requrements? &rarr;
      </button>

      <div>
        <h1 className="font-medium mt-20 text-7xl text-black tracking-tighter text-center">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="max-w-3xl text-center mt-10 mx-auto text-2xl text-neutral-700">
          Automated bookkeeping, effortless tax filing, real‑time insights.{" "}
          <br /> Set up in 10 mins. Back to building by 2:16pm.
        </p>
      </div>

      <div className="flex items-center gap-8 relative mt-10 realtive z-10">
        <button className="bg-[#2579F4] px-4 py-3 text-white font-bold rounded-lg shadow-lg text-shadow-sm tracking-wide cursor-pointer hover:bg-[#253df4] transition duration-200">
          Get Started
        </button>

        <button className="px-4 py-3 text-black font-bold rounded-lg tracking-wide cursor-pointer hover:bg-[#cbd8e2] transition duration-200">
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};
