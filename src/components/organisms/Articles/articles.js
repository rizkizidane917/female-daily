import { useListData } from "@/api/service/use-listData";
import Typography from "@/components/atoms/Typography";
import CardArticles from "@/components/moleculs/CardArticles/card-articles";
import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Articles() {
  const { getListAllData } = useListData();
  const doFetchList = getListAllData();
  return (
    <section className="py-6">
      <div className="flex justify-between items-end">
        <div>
          <Typography type="h1" className="font-semibold">
            Latest Articles
          </Typography>
          <Typography type="h4" className="text-tertiary font-normal">
            So you can make betterpurchase decision
          </Typography>
        </div>
        <a className="cursor-pointer border-b hover:border-b-primary pb-1 border-transparent inline-flex items-center gap-1">
          <Typography type="h4" className="text-primary">
            See More
          </Typography>
          <ChevronRightIcon className="text-primary h-4" />
        </a>
      </div>
      {doFetchList?.isFetching == true ? (
        "Loading..."
      ) : (
        <div className="grid grid-cols-3  gap-6 mt-6">
          {doFetchList?.data?.["latest articles"]?.map((articles, index) => {
            return (
              <CardArticles articles={articles} key={`card-articles${index}`} />
            );
          })}
        </div>
      )}
    </section>
  );
}
