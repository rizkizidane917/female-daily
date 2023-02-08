import React from "react";
import NavList from "@/utils/nav-list.json";
export default function NavigationList() {
  return (
    <div className="flex items-center justify-center border-y-2 border-gray-200">
      <ul className="flex items-center gap-5 uppercase font-semibold">
        {NavList?.list?.map((list, index) => {
          return (
            <li className="py-2 px-4" key={index + 1}>
              {list?.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
