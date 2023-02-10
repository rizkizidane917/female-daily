import Star from "@/components/atoms/Star/star";
import Typography from "@/components/atoms/Typography";
import React from "react";

export default function CardMatches({ matches }) {
  return (
    <div className="bg-white shadow-lg  rounded-xl ">
      <div className="p-4">
        <img src={matches.image} className="w-full h-full object-cover" />
        <div className="flex flex-col py-4">
          <Typography type="h5" className="text-primary font-semibold my-4">
            {matches?.title}
          </Typography>
          <div className="flex items-center space-x-2">
            <Typography type="h5" className="font-semibold">
              {matches.rating}
            </Typography>
            {/* Star */}
            <Star rating={matches?.rating} />
            <Typography type="p" className="font-normal">
              (7)
            </Typography>
          </div>
          <Typography type="h5" className="font-semibold py-1 leading-4">
            {matches.name}
          </Typography>
          <Typography type="p" className="leading-4">
            {matches.desc}
          </Typography>
          <Typography type="p" className="text-secondary mt-2">
            {matches.category}
          </Typography>
        </div>
      </div>
    </div>
  );
}
