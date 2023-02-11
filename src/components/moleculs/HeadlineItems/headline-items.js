import Typography from "@/components/atoms/Typography";
import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";

export default function HeadlineItems({ title, sub, goto, links }) {
  if (goto == undefined) return "";
  if (links == undefined) return "/";

  return (
    <div className="flex justify-between items-end">
      <div>
        <Typography type="h1" className="font-semibold">
          {title}
        </Typography>
        <Typography type="h4" className="text-tertiary font-normal">
          {sub}
        </Typography>
      </div>
      {goto !== "" && (
        <a
          href={`${links}`}
          className="cursor-pointer border-b hover:border-b-primary pb-1 border-transparent inline-flex items-center gap-3"
        >
          <Typography type="h4" className="text-primary">
            {goto}
          </Typography>
          <ChevronRightIcon className="text-primary h-4" />
        </a>
      )}
    </div>
  );
}
