import Typography from "@/components/atoms/Typography";
import React from "react";

export default function CardArticles({ articles }) {
  return (
    <div className="pb-5">
      <div className="mb-4">
        <img
          className="rounded-xl w-full h-full object-cover"
          src={articles?.image}
          alt="Logo FDN"
        />
      </div>
      <Typography type="h3" className="font-semibold leading-6">
        {articles?.title}
      </Typography>
      <div className="flex items-center gap-2 mt-4">
        <Typography type="p" className="capitalize">
          {articles?.author}
        </Typography>
        <Typography type="p" className="text-tertiary">
          |
        </Typography>
        <Typography type="p" className="text-tertiary">
          {articles?.published_at}
        </Typography>
      </div>
    </div>
  );
}
