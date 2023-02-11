import Container from "@/components/layout/container";
import Articles from "@/components/organisms/Articles/articles";
import BannerCampaign from "@/components/organisms/BannerCampaign/banner-campaign";
import BannerTop from "@/components/organisms/BannerTop/banner-top";
import EditorChoice from "@/components/organisms/EditorChoice/editor-choice";
import LatestVideos from "@/components/organisms/LatestVideos/latest-videos";
import Matches from "@/components/organisms/Matches/matches";
import PopularGroups from "@/components/organisms/PopularGroups/popular-groups";
import Reviews from "@/components/organisms/Reviews/reviews";
import TopBrands from "@/components/organisms/TopBrands/top-brands";
import WeeklyTrending from "@/components/organisms/WeeklyTrending/weekly-trending";
import React from "react";
import Layout from "../components/layout/layout";

export default function Homepage() {
  return (
    <Layout pageTitle="Homepage">
      <Container>
        <BannerTop />
        <EditorChoice />
      </Container>
      <Matches />
      <Container>
        <BannerCampaign />
        <Articles />
        <Reviews />
        <PopularGroups />
        <LatestVideos />
        <WeeklyTrending />
        <TopBrands />
      </Container>
    </Layout>
  );
}
