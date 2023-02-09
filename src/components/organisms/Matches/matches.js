import React from "react";
import list from "@/utils/matches.json";
import Container from "@/components/layout/container";
import Typography from "@/components/atoms/Typography";
import CardMatches from "@/components/moleculs/CardMatches/card-matches";
import Button from "@/components/atoms/Button/button";

export default function Matches() {
  return (
    <section className="w-full py-9 relative">
      <div className="bg-[#FDDAE0]">
        <div className="absolute bottom-9 -left-10">
          <img src="/img/matches-img1.png" width={300} height={300} />
        </div>
        <Container>
          <div className="grid grid-cols-5 gap-6">
            <div className=" col-span-2 ml-28 w-3/4 flex flex-col my-auto leading-7">
              <Typography type="h1" className="font-bold">
                Looking for products that are just simply perfect for you?
              </Typography>
              <Typography type="h3" className="leading-6 mt-4 font-normal">
                Here are some products that we believe match your skin, hair and
                body! Have we mentioned that they solve your concerns too?
              </Typography>
              <div className="flex justify-end mt-8">
                <Button variant="primary" size="medium">
                  See My Matches
                </Button>
              </div>
            </div>
            {list?.matches?.map((matches, index) => {
              return (
                <CardMatches matches={matches} key={`card-matches${index}`} />
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
