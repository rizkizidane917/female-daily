import Typography from "@/components/atoms/Typography";
import React from "react";

export default function BannerCampaign() {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="bg-secondary w-[970px] h-[250px] flex justify-center border-2 border-[#c4c4c4]">
        <div className="flex flex-col items-center justify-center">
          <Typography
            type="custom"
            className="font-medium text-[#5a5a5a] mt-1  text-3xl"
          >
            Horizontal 970x250
          </Typography>
          <Typography
            type="custom"
            className="font-medium text-[#5a5a5a] mt-1  text-3xl"
          >
            (Internal campaign only)
          </Typography>
        </div>
      </div>
    </div>
  );
}
