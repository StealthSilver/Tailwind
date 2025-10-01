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
    </div>
  );
};
