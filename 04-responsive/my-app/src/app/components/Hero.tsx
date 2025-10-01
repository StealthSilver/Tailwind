import React from "react";

export const Hero = () => {
  // for larger screen devices use bg-blue-500
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-4xl font-bold lg:bg-blue-500">Hero</div>

      {/* using all the breakpoints at once */}
      <div className="sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-9xl">
        This is responsive
      </div>

      {/* using the flex properties for responsive alignment */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="h-40 w-40 rounded-xl bg-red-300"></div>
        <div className="h-40 w-40 rounded-xl bg-green-300"></div>
        <div className="h-40 w-40 rounded-xl bg-blue-300"></div>
      </div>
    </div>
  );
};
