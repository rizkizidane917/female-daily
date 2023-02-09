import Typography from "@/components/atoms/Typography";
import React from "react";

export default function BannerTop() {
  return (
    <section className="flex flex-col items-center pb-4">
      <div className="bg-secondary w-[970px] h-[50px] text-center  border-2 border-[#C4C4C4]">
        <Typography
          type="custom"
          className="font-medium text-[#5a5a5a] mt-1  text-3xl"
        >
          Top Frame 970x50
        </Typography>
      </div>
      <div className="bg-secondary w-[970px] h-[250px] flex justify-center mt-6 border-2 border-[#C4C4C4]">
        <Typography
          type="custom"
          className="flex font-medium text-[#5a5a5a] text-3xl items-center"
        >
          Billboard 970x250
        </Typography>
      </div>
    </section>
  );
}
