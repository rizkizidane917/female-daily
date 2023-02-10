import Typography from "@/components/atoms/Typography";
import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function LatestVideos() {
  return (
    <section title="latest-videos" className="my-9">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography type="h1" className="font-semibold">
            Latest Videos
          </Typography>
          <Typography type="h4" className="text-tertiary font-normal">
            Where the beauty TALK are
          </Typography>{" "}
        </div>
        <a className="cursor-pointer border-b hover:border-b-primary pb-1 border-transparent inline-flex items-center gap-1">
          <Typography type="h4" className="text-primary">
            See More
          </Typography>
          <ChevronRightIcon className="text-primary h-4" />
        </a>
      </div>
      {/* https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 */}
      <div className="flex flex-row -mx-4 mt-6">
        <div className=" px-4 overflow-hidden flex relative">
          <img
            className="w-full h-full object-cover"
            alt="video"
            src="/img/vid-1.jpeg"
          />
          <div className=" absolute top-[40%] left-[47%]">
            <img src="/icons/play.png" width={80} height={80} />
          </div>
        </div>
        <div className="flex flex-col w-4/6">
          <div className="px-4 pb-6 overflow-hidden flex relative">
            <img src="/img/vid-2.jpeg" alt="video" />
            <div className=" absolute top-[40%] left-[45%]">
              <img src="/icons/play.png" width={40} height={40} />
            </div>
          </div>
          <div className="px-4 overflow-hidden flex relative">
            <img src="/img/vid-3.jpg" alt="video" />
            <div className=" absolute top-[40%] left-[45%]">
              <img src="/icons/play.png" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
