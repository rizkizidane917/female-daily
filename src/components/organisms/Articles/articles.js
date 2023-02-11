import { useListData } from "@/api/service/use-listData";
import CardArticles from "@/components/moleculs/CardArticles/card-articles";
import HeadlineItems from "@/components/moleculs/HeadlineItems/headline-items";
import React from "react";

export default function Articles() {
  const { getListAllData } = useListData();
  const doFetchList = getListAllData();
  return (
    <section data-testid="latest-articles" className="py-6">
      <HeadlineItems
        title="Latest Articles"
        sub="So you can make betterpurchase decision"
        goto="See More"
        links="/"
      />

      {doFetchList?.isFetching == true ? (
        "Loading..."
      ) : (
        <div className="grid grid-cols-3 gap-6 mt-6">
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
