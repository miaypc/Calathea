import React from "react";
import styled from "styled-components";

import BackgroundImage from "../components/BackgroundImage";
import YoutubeSection from "../components/YoutubeSection";
import PopularPlantsSection from "../components/PopularPlantsSection";
import Color from "../utils/Color";

const HomePageContainer = styled.div`
  overflow: auto;
  background-color: ${Color.LightGrey};
`;

function HomePage() {
  return (
    <HomePageContainer>
      <BackgroundImage />
      <PopularPlantsSection />
      <YoutubeSection />
    </HomePageContainer>
  );
}

export default HomePage;
