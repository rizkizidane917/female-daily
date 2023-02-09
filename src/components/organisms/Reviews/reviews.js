import { useListData } from "@/api/service/use-listData";
import Typography from "@/components/atoms/Typography";
import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Reviews() {
  const { getListAllData } = useListData();
  const doFetchList = getListAllData();
  console.log(doFetchList?.data);
  return (
    <section className="py-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 ">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <Typography type="h1" className="font-semibold">
                Latest Articles
              </Typography>
              <Typography type="h4" className="text-tertiary font-normal">
                So you can make better purchase decision
              </Typography>
            </div>
            <a className="cursor-pointer border-b hover:border-b-primary pb-1 border-transparent inline-flex items-center gap-1">
              <Typography type="h4" className="text-primary">
                See More
              </Typography>
              <ChevronRightIcon className="text-primary h-4" />
            </a>
          </div>
        </div>
        <div className=" col-span-4 relative">
          <div className="flex items-center absolute right-0 top-16">
            <div className="bg-secondary w-[300px] h-[250px] flex justify-center border-2 border-stone-400">
              <div className="flex flex-col items-center justify-center">
                <div className="flex font-semibold text-[#5a5a5a] text-2xl">
                  MR 2
                </div>
                <div className="flex font-semibold text-[#5a5a5a] text-2xl">
                  300X250
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
