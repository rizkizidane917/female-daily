import Typography from "@/components/atoms/Typography";
import { ChevronRightIcon } from "@heroicons/react/solid";
import list from "@/utils/top-brand.json";
import React from "react";
import Image from "next/image";

export default function TopBrands() {
  return (
    <section title="top-brands">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography type="h1" className="font-semibold">
            Top Brands
          </Typography>
          <Typography type="h4" className="text-tertiary font-normal">
            We all know and love
          </Typography>{" "}
        </div>
        <a className="cursor-pointer border-b hover:border-b-primary pb-1 border-transparent inline-flex items-center gap-1">
          <Typography type="h4" className="text-primary">
            See More
          </Typography>
          <ChevronRightIcon className="text-primary h-4" />
        </a>
      </div>
      <div className="grid grid-cols-6 gap-4 my-4">
        {list?.brand?.map((brand, index) => {
          return (
            <div key={index + 1} className="flex items-center">
              <Image
                width={150}
                height={150}
                src={brand?.image}
                alt="brand-img"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <Typography type="h1" className="font-semibold">
          Female Daily - Find everything you want to know about beauty on Female
          Daily
        </Typography>
        <Typography type="h4" className="font-normal leading-6  mt-2">
          Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
          Tutorials, Discussions, Beauty Workshops, anything! We are here to be
          your friendly solution to all things beauty, inside and out!
        </Typography>
      </div>
    </section>
  );
}
