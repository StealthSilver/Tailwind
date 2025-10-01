import React from "react";

export const Hero = () => {
  return (
    <div className="my-24 md:my-40">
      {/* gradient text for the heading */}
      <h1 className="mx-auto max-w-3xl bg-gradient-to-b from-neutral-300 to-neutral-400 bg-clip-text text-center text-6xl leading-tight font-bold tracking-tight text-transparent md:text-7xl">
        Unleash the power of intuitive finance
      </h1>

      <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-300 selection:bg-black md:text-xl">
        Say goodbye to outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>

      <div className="mx-auto mt-12 flex w-full max-w-lg items-center">
        {/* styling the input box  */}
        <input
          type="text"
          className="mr-4 flex-1 rounded-xl border border-neutral-600 px-4 py-2 text-white transition duration-200 placeholder:text-neutral-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
          placeholder="Enter your email"
        />
        {/* creating the gradient border for th button to standout */}
        <button className="relative cursor-pointer overflow-hidden rounded-xl border border-neutral-700 px-6 py-2 text-white">
          <div className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
          Join Waitlist
        </button>
      </div>
    </div>
  );
};
