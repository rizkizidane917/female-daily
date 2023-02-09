import { useListData } from "@/api/service/use-listData";
import Typography from "@/components/atoms/Typography";
import CardEditor from "@/components/moleculs/CardEditor/card-editor";
import React from "react";

export default function EditorChoice() {
  const { getListAllData } = useListData();
  const doFetchList = getListAllData();
  return (
    <section title="editor-choice" className=" py-6">
      <Typography type="h1" className="font-semibold">
        Editor&apos;s Choice
      </Typography>
      <Typography type="h4" className="text-tertiary font-normal">
        Curated with love
      </Typography>

      {/* Card Choice */}
      {doFetchList?.isFetching == true ? (
        "Loading..."
      ) : (
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-4">
          {doFetchList?.data?.["editor's choice"]?.map((list, index) => {
            return <CardEditor key={`list-editor${index}`} list={list} />;
          })}
        </div>
      )}
    </section>
  );
}
