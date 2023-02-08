import React from "react";
import NavigationList from "./navigation-list";
import NavigationLogin from "./navigation-login";
import NavigationSearch from "./navigation-search";

export default function Navigation() {
  return (
    <header className="w-full">
      <nav className="flex  gap-4 items-center">
        <div className="pl-2">
          <img src="/icons/menu.svg" className="h-6" />
        </div>
        <img
          src="/img/logo.png"
          alt="Female-Daily-Logo"
          width={135}
          height={45}
        />
        <NavigationSearch />
        <NavigationLogin />
      </nav>
      <NavigationList />
    </header>
  );
}
