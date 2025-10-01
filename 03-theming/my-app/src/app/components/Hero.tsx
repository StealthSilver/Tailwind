import React from "react";

export const Hero = () => {
  return (
    <div className="my-40">
      <h1 className="max-w-3xl bg-gradient-to-b from-neutral-400 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>

      {/* to change the selection from mouse we use the selection: property */}
      <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-200 selection:bg-black">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>

      <div className="mt-8 flex justify-center">
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          {/* gradient border for button element */}
          <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
          Join Waitlist
        </button>
      </div>
    </div>
  );
};
