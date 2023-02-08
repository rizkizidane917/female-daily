import React from "react";
export default function NavigationSearch() {
  return (
    <div className="block flex-grow lg:flex lg:items-center px-6">
      <div className="container flex mx-auto">
        <div className="flex border-2 rounded w-full ">
          <div className="flex items-center justify-center px-2">
            <button>
              <img src="/icons/search-icon.svg" className="h-6 text-gray-200" />
            </button>
          </div>
          <input
            type="text"
            className="calc px-2 py-2 w-full text-p font-medium border-transparent placeholder:font-normal lg:placeholder:text-sm focus:outline-none truncate"
            placeholder="Search product, articles, topics, brands, etc"
          />
        </div>
      </div>
    </div>
  );
}
