import Container from "@/components/layout/container";
import BannerTop from "@/components/organisms/BannerTop/banner-top";
import React from "react";
import Layout from "../components/layout/layout";

export default function Homepage() {
  return (
    <Layout>
      <Container>
        <BannerTop />
        <h1>Test</h1>
      </Container>
    </Layout>
  );
}
