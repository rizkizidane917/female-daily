import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className=" border-t border-t-tertiary mt-10">
      <div className="container mx-auto mt-6">
        <div className="mx-12">
          <div className="mt-2 grid grid-cols-4 gap-6">
            <div className="flex flex-col gap-1 dev list-none">
              <li>
                <a className="text-p font-semibold cursor-pointer">About Us</a>
              </li>
              <li>
                <a className="text-p font-semibold cursor-pointer">Feedback</a>
              </li>
              <li>
                <a className="text-p font-semibold cursor-pointer">Contact</a>
              </li>
            </div>
            <div className="flex flex-col gap-1 dev list-none">
              <li>
                <a className="text-p font-semibold cursor-pointer">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="text-p font-semibold cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-p font-semibold cursor-pointer">Help</a>
              </li>
            </div>{" "}
            <div className="flex flex-col gap-1 dev list-none">
              <li>
                <a className="text-p font-semibold cursor-pointer">Awards</a>
              </li>
              <li>
                <a className="text-p font-semibold cursor-pointer">
                  Newsletter
                </a>
              </li>
            </div>
            <div className="flex flex-col gap-1">
              <Typography type="p" className="font-semibold">
                Download Our Mobile App
              </Typography>
              <div className="flex items-center gap-2">
                <div className="flex w-1/2">
                  <img src="/img/apple-store.png" alt="apple-store" />
                </div>
                <div className="flex w-1/2">
                  <img src="/img/google-play.jpg" alt="google-play" />
                </div>
              </div>
            </div>
          </div>
          <div className=" my-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <Image src="/img/logo.png" width={150} height={35} alt="logo" />
              <Typography type="p" className="font-normal">
                Copyright © 2015-2017 Female Daily Network • All rights reserved
              </Typography>
            </div>
            <div className="flex items-center gap-6  mr-[4.7rem]">
              <img src="/icons/fb-icons.png" alt="logo" />
              <img src="/icons/twitter-icons.png" alt="logo" />
              <img src="/icons/ig-icons.png" alt="logo" />
              <img src="/icons/yt-icons.png" alt="logo" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-2">
          <div className="bg-secondary w-[970px] h-[50px] flex justify-center border-2 border-[#C4C4C4]">
            <Typography
              type="custom"
              className="font-semibold text-[#5a5a5a] text-3xl py-2"
            >
              Bottom Frame 970x50, 468x60, 320x50
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
