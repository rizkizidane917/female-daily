import { useListData } from "@/api/service/use-listData";
import CardEditor from "@/components/moleculs/CardEditor/card-editor";
import HeadlineItems from "@/components/moleculs/HeadlineItems/headline-items";
import React from "react";

export default function EditorChoice() {
  const { getListAllData } = useListData();
  const doFetchList = getListAllData();
  return (
    <section title="editor-choice" className="py-6">
      <HeadlineItems
        title="Editor's Choice"
        sub=" Curated with love"
        goto=""
        links="/"
      />

      {/* Card Choice */}
      {doFetchList?.isFetching == true ? (
        "Loading..."
      ) : (
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-6">
          {doFetchList?.data?.["editor's choice"]?.map((list, index) => {
            return <CardEditor key={`list-editor${index}`} list={list} />;
          })}
        </div>
      )}
    </section>
  );
}
