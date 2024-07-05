import { StarIcon } from "@/components/StarIcon";
import Image from "next/image";
import React from "react";

export const Body = () => {
  return (
    <div className="mt-4 grid md:grid-cols-2 grid-cols-1 md:py-12 sm:py-8 lg:px-32 sm:px-20 py-8 px-12 lg:gap-x-20 gap-x-14 gap-y-6">
      <div className="w-full h-full flex justify-center items-center md:order-none order-1">
        <div className="relative aspect-square border border-[#290546] md:w-full w-2/3 min-w-[300px] ">
          <Image src="/vr2.png" alt="" fill />
        </div>
      </div>
      <div className="flex flex-col md:items-center justify-center gap-y-6">
        <div className="lg:text-5xl md:text-[40px] text-3xl font-bold text-white ">
          Our Virtial Headset Shine With Unique Features!
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex items-start gap-x-2 md:text-base text-xs text-white/80 font-light">
            <StarIcon
              style="fill-sky-400 md:w-12 w-6 h-6 md:mt-0 -mt-1"
              shadow="rgba(56,189,248,0.8)"
            />
            High-resolution OLED or LCD screens: Provide sharp and clear visual.
          </div>
          <div className="flex items-start gap-x-2 md:text-base text-xs text-white/80 font-light">
            <StarIcon
              style="fill-sky-400 md:w-12 w-6 h-6 md:mt-0 -mt-1"
              shadow="rgba(56,189,248,0.8)"
            />
            Refresh rate: Higher refresh rates reduce motion sickness.
          </div>
          <div className="flex items-start gap-x-2 md:text-base text-xs text-white/80 font-light">
            <StarIcon
              style="fill-sky-400 md:w-12 w-6 h-6 md:mt-0 -mt-1"
              shadow="rgba(56,189,248,0.8)"
            />
            Inside-out tracking: Built-in sensors{" "}
            {"(cameras or other sensors)."}
          </div>
          <div className="flex items-start gap-x-2 md:text-base text-xs text-white/80 font-light">
            <StarIcon
              style="fill-sky-400 md:w-12 w-6 h-6 md:mt-0 -mt-1"
              shadow="rgba(56,189,248,0.8)"
            />
            Eye tracking: Monitors the movement of the users eye.
          </div>
          <div className="flex items-start gap-x-2 md:text-base text-xs text-white/80 font-light">
            <StarIcon
              style="fill-sky-400 md:w-12 w-6 h-6 md:mt-0 -mt-1"
              shadow="rgba(56,189,248,0.8)"
            />
            High-resolution OLED or LCD screens: Provide sharp and clear visual
          </div>
          <div className="flex items-start gap-x-2 md:text-base text-xs text-white/80 font-light">
            <StarIcon
              style="fill-sky-400 md:w-12 w-6 h-6 md:mt-0 -mt-1"
              shadow="rgba(56,189,248,0.8)"
            />
            Refresh rate: Higher refresh rates reduce motion sickness.
          </div>
        </div>
      </div>
    </div>
  );
};
