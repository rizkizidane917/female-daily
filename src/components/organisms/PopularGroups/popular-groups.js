import Typography from "@/components/atoms/Typography";
import {
  ChatAltIcon,
  ChevronRightIcon,
  UserIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import React from "react";
import list from "@/utils/popular-groups.json";
export default function PopularGroups() {
  return (
    <section title="popular-groups">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography type="h1" className="font-semibold">
            Popular Groups
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
      <div className="grid grid-cols-4 gap-6">
        {list?.popular.map((popular, index) => {
          return (
            <div
              key={index + 1}
              className=" mt-6 border-2 border-secondary rounded-lg text-center"
            >
              <div className="p-4">
                <div className="flex justify-center">
                  <img
                    className="w-40 h-40 object-cover rounded-full border-2"
                    src={popular?.image}
                  />
                </div>
                <Typography type="h1" className="font-semibold">
                  {popular?.title}
                </Typography>
                <div className="flex items-center justify-between mx-5 my-2">
                  <div className="flex items-center space-x-1">
                    <UserIcon className="w-5 h-5 " />
                    <span>-</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ViewListIcon className="w-5 h-5 " />
                    <span>-</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChatAltIcon className="w-5 h-5 " />
                    <span>-</span>
                  </div>
                </div>
                <Typography type="p" className="font-medium ">
                  {popular?.desc}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
