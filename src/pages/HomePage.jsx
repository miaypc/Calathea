import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundImage from "../components/BackgroundImage";
import YoutubeSection from "../components/YoutubeSection";

const HomePageContainer = styled.div`
  overflow: auto;
  background-color: #e8e8e5;
`;

function HomePage() {
  return (
    <HomePageContainer>
      <Header />
      <BackgroundImage />
      <YoutubeSection />
      <Footer />
    </HomePageContainer>
  );
}

export default HomePage;
