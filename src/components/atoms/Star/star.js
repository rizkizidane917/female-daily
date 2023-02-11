import { StarIcon } from "@heroicons/react/solid";
import React from "react";

export default function Star({ rating }) {
  return (
    <div data-testid="star-icon" className="flex items-center mb-0.5">
      {Array(5)
        .fill()
        .map((_, i) => {
          const totalRating = Math.floor(rating);
          return (
            <StarIcon
              key={i + 1}
              className={`w-5 h-5 ${
                i < totalRating ? "text-primary" : "text-secondary"
              }`}
            />
          );
        })}
    </div>
  );
}
