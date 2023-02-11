import Button from "@/components/atoms/Button/button";
import React from "react";

export default function NavigationLogin() {
  return (
    <Button
      variant="primary"
      size="medium"
      className="bg-primary rounded-none hover:bg-primary/90 px-6 py-[15px] inline-flex items-center gap-4 text-white  uppercase text-p"
    >
      <img src="/img/button-user.png" className="h-5 mb-0.5" />
      Login / Signup
    </Button>
  );
}
