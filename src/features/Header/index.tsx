"use client";
import { StarIcon } from "@/components/StarIcon";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faInstagramSquare,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faBars,
  faCogs,
  faContactBook,
  faDumbbell,
  faGamepad,
  faGraduationCap,
  faHouse,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="overflow-hidden w-full relative">
      <nav className="sm:flex md:py-12 sm:py-8 lg:px-32 sm:px-20 py-8 px-12 justify-between items-center relative">
        <div
          className="sm:hidden text-xl font-bold text-white flex gap-x-3 items-center cursor-pointer w-fit"
          onClick={() => setMenu((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} className="sm:hidden block w-4 z-50" />
          <span className="z-50 select-none">
            <span className="text-sky-400">Holo</span>Games
          </span>
        </div>
        <div className="sm:block hidden text-xl font-bold text-white cursor-pointer w-fit">
          <span className="z-50 select-none">
            <span className="text-sky-400">Holo</span>Games
          </span>
        </div>
        <div className="sm:flex md:gap-x-12 gap-x-8 hidden">
          <div className="font-medium text-white flex gap-x-2 items-center cursor-pointer">
            <FontAwesomeIcon icon={faHouse} className="w-4" /> Home
          </div>
          <div className="font-medium text-white/70 hover:text-white transition-colors flex gap-x-2 items-center cursor-pointer">
            <FontAwesomeIcon icon={faGamepad} className="w-4" />
            Games
          </div>
          <div className="font-medium text-white/70 hover:text-white transition-colors flex gap-x-2 items-center cursor-pointer">
            <FontAwesomeIcon icon={faContactBook} className="w-4" />
            Contacts
          </div>
          <div className="font-medium text-white/70 hover:text-white transition-colors flex gap-x-2 items-center cursor-pointer">
            <FontAwesomeIcon icon={faCogs} className="w-4" />
            Features
          </div>
        </div>
        <div
          className={`bg-[#10011c] h-screen sm:hidden absolute top-0 left-0 flex flex-col gap-4 z-10
            ${
              menu ? "w-full" : "w-0"
            } overflow-hidden transition-all duration-500
            `}
        >
          <div className="font-medium text-white flex gap-x-2 items-center cursor-pointer mt-24 ml-12">
            <FontAwesomeIcon icon={faHouse} className="w-4" /> Home
          </div>
          <div className="font-medium text-white/70 hover:text-white transition-colors flex gap-x-2 items-center cursor-pointer ml-12">
            <FontAwesomeIcon icon={faGamepad} className="w-4" />
            Games
          </div>
          <div className="font-medium text-white/70 hover:text-white transition-colors flex gap-x-2 items-center cursor-pointer ml-12">
            <FontAwesomeIcon icon={faContactBook} className="w-4" />
            Contacts
          </div>
          <div className="font-medium text-white/70 hover:text-white transition-colors flex gap-x-2 items-center cursor-pointer ml-12">
            <FontAwesomeIcon icon={faCogs} className="w-4" />
            Features
          </div>
        </div>
      </nav>

      <div className="md:grid flex flex-col grid-cols-2 md:h-fit md:gap-y-4 md:pt-12 lg:px-32 pt-8 md:px-20 px-12 lg:gap-x-32 gap-x-14">
        <div className="flex h-fit flex-col md:gap-y-10 gap-y-6 relative">
          <div className="md:text-base text-xs text-white/80 font-light">
            VIRTUAL HEADSETS
          </div>
          <div className="lg:text-5xl md:text-[40px] text-3xl font-bold text-white ">
            Experience a new dimension of reality
          </div>
          <div className="flex items-start gap-x-2 md:text-base text-xs text-white/80 font-light">
            <StarIcon
              style="fill-purple-500 md:w-10 w-6 h-6 md:mt-0 -mt-1"
              shadow="rgba(181,115,248,0.8)"
            />
            Step into the future of the virtual headset, come to life right
            before your eyes.
          </div>
          <div className="flex md:flex-row flex-col gap-y-4 md:gap-x-4 gap-x-2">
            <div className="md:px-6 py-3 flex gap-x-4 justify-center items-center px-4 bg-sky-400 text-[#10011c] hover:bg-sky-600 shadow-[0_0_15px_3px_rgba(56,189,248,0.3)] rounded md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
              VISIT STORE
              <FontAwesomeIcon icon={faArrowRight} className="w-4" />
            </div>
            <div className="md:px-6 flex gap-x-4 justify-center items-center py-3 px-4 border border-white text-white hover:border-sky-400/30 hover:bg-sky-400 hover:text-[#10011c] rounded md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
              <FontAwesomeIcon icon={faCompass} className="w-4" /> EXPLORE
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="md:text-base text-xs text-white">FOLLOW US</div>
            <div className="flex md:gap-x-4 gap-x-2">
              <div className="p-2.5 border border-white rounded flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white w-5 h-5"
                />
              </div>
              <div className="p-2.5 border border-white rounded flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white w-5 h-5"
                />
              </div>
              <div className="p-2.5 border border-white rounded flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-white w-5 h-5"
                />
              </div>
              <div className="p-2.5 border border-white rounded flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-white w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-8 md:gap-y-0 gap-y-4 w-full relative flex flex-col overflow-hidden justify-between lg:items-center items-center lg:pt-8 md:pt-4 pt-2 md:pb-0 pb-6">
          <div className="absolute md:-top-24 -top-20 left-0 w-full h-full shadow-[inset_0_100px_100px_10px_rgba(77,18,126,0.2)] z-10 flex flex-col justify-end">
            <div className="w-full h-1.5 bg-gradient-to-r from-[#290545] via-[#4d127e] to-[#290545] shadow-[0_-5px_10px_1px_rgba(106,33,166,0.5)]"></div>
          </div>
          <div className="lg:hidden"></div>
          <div className="lg:w-[380px] md:w-[300px] w-[280px] aspect-video relative z-40">
            <Image src="/vr-ps.png" alt="" fill />
          </div>
          <div className="z-40 flex md:flex-row gap-y-2 lg:mt-0 mt-4 flex-col lg:mb-12 md:mb-8 md:items-center items-start gap-x-4 w-full justify-between font-light">
            <div className="flex gap-x-2 text-white md:text-base text-xs">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-white w-4 md:mt-1"
              />
              Enhanced Education
            </div>
            <div className="flex gap-x-2 text-white lg:text-base md:text-sm text-xs">
              <FontAwesomeIcon
                icon={faDumbbell}
                className="text-white w-4 md:mt-1"
              />
              Training and Simulation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
