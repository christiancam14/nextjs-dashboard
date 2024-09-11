import Image from "next/image";
import React from "react";
import { FaPause, FaRegHeart } from "react-icons/fa";
import { LiaRandomSolid } from "react-icons/lia";
import { PiRepeatOnce } from "react-icons/pi";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { Tooltip } from "@nextui-org/react";

export function CardProject() {
  return (
    <div className="card-project max-w-sm w-80 bg-sky-100 rounded-lg shadow-md overflow-hidden p-3">
      <Image
        src="/atardecer.png"
        alt="Album Cover"
        width={100}
        height={100}
        className="w-full object-cover h-auto rounded-lg aspect-square	"
      />

      <div className="py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Project Title</h2>
            <span className="text-sm text-gray-600">Stack tech</span>
          </div>
          <div>
            <Tooltip content="Like">
              <button
                aria-label="like"
                className="text-gray-500 hover:text-red-500"
              >
                <FaRegHeart />
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-300 rounded-full h-2.5"></div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>1:24</span>
            <span>3:45</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 px-4">
          <Tooltip content="Repeat">
            <button
              aria-label="shuffle"
              className="text-gray-500 hover:text-gray-900"
            >
              <PiRepeatOnce className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content="Prev project">
            <button
              aria-label="previous"
              className="text-gray-500 hover:text-gray-900"
            >
              <GiPreviousButton className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content="See project">
            <button
              aria-label="play/pause"
              className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full"
            >
              <FaPause className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content="Next project">
            <button
              aria-label="next"
              className="text-gray-500 hover:text-gray-900"
            >
              <GiNextButton className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content="Random project">
            <button
              aria-label="repeat"
              className="text-gray-500 hover:text-gray-900"
            >
              <LiaRandomSolid className="icon-project" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
