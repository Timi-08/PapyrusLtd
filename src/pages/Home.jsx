import React from "react";
import { Outlet } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import CategorySection from "../components/CategorySection";
import TopSellingSection from "../components/TopSellingSection";

function Home() {
  return (
    <>
      <TitleSection />
      <Outlet />
      <TopSellingSection />
    </>
  );
}

export default Home;
