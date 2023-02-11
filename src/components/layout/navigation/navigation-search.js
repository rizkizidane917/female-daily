import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
export default function NavigationSearch() {
  return (
    <div className="block flex-grow lg:flex lg:items-center px-6">
      <div className="container flex mx-auto">
        <div className="flex border-2 rounded w-full ">
          <div className="flex items-center justify-center px-2">
            <button>
              <SearchIcon className="h-6 text-tertiary" />
            </button>
          </div>
          <input
            type="text"
            className="px-2 py-2 w-full text-[12px]  font-normal border-transparent placeholder:font-medium lg:placeholder:text-[12px] focus:outline-none truncate"
            placeholder="Search product, articles, topics, brands, etc"
          />
        </div>
      </div>
    </div>
  );
}
