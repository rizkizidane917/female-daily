import { useListData } from "@/api/service/use-listData";
import CarouselReviews from "@/components/moleculs/CarouselReviews/carousel-reviews";
import HeadlineItems from "@/components/moleculs/HeadlineItems/headline-items";
import React from "react";

export default function Reviews() {
  const { getListAllData } = useListData();
  const doFetchList = getListAllData();

  return (
    <section className="py-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 ">
          <HeadlineItems
            title="Latest Reviews"
            sub="So you can make better purchase decision"
            goto="See more"
            links="/"
          />

          {doFetchList?.isFetching == true ? (
            "Loading..."
          ) : (
            <CarouselReviews review={doFetchList?.data?.["latest review"]} />
            // <MultiCarousel items={doFetchList?.data?.["latest review"]} />
          )}
        </div>
        <div className=" col-span-4 relative">
          <div className="flex items-center absolute right-0 top-[5.5rem]">
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
