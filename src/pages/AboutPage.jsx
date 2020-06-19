import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const AboutUsContainer = styled.div``;

function AboutPage() {
  return (
    <AboutUsContainer>
      <Header />
      <AboutUs />
      <Footer />
    </AboutUsContainer>
  );
}

export default AboutPage;
