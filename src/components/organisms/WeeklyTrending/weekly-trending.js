import Typography from "@/components/atoms/Typography";
import CarouselWeeklyTrending from "@/components/moleculs/CarouselWeeklyTrending/carousel-weekly-trending";
import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function WeeklyTrending() {
  return (
    <section title="weekly-trending">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Typography type="h1" className="font-semibold">
            Trending This Week
          </Typography>
          <Typography type="h4" className="text-tertiary font-normal">
            See our weekly most reviewed products
          </Typography>{" "}
        </div>
        <a className="cursor-pointer border-b hover:border-b-primary pb-1 border-transparent inline-flex items-center gap-1">
          <Typography type="h4" className="text-primary">
            See More
          </Typography>
          <ChevronRightIcon className="text-primary h-4" />
        </a>
      </div>
      <CarouselWeeklyTrending />
    </section>
  );
}
