import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Color from "../utils/Color";

const AboutContainer = styled.div`
  font-family: Lato;
  text-align: center;
  margin: 10em;
  @media (max-width: 850px) {
    margin: 10em 7em 7em 7em;
  }
  @media (max-width: 600px) {
    margin: 7em 3em;
  }
`;
const AboutTitle = styled.p`
  font-size: 40px;
  color: ${Color.Green};
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const AboutSecondTitle = styled.p`
  font-size: 20px;
  color: ${Color.GreyText};
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const AboutTextContainer = styled.div`
  margin: 5em 5em;
  line-height: 200%;
  text-align: left;
  @media (min-width: 1200px) {
    margin: 5em 10em;
  }

  @media (min-width: 1500px) {
    margin: 5em 17em;
  }

  @media (max-width: 850px) {
    margin: 5em 3em;
  }

  @media (max-width: 600px) {
    margin: 5em 0.5em;
  }
`;
const AboutText = styled.p`
  color: ${Color.DarkGreyText};
  font-size: 17px;
  margin-bottom: 5px;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

function AboutUs() {
  return (
    <AboutContainer>
      <AboutTitle>About Calathea</AboutTitle>
      <Divider light />
      <AboutSecondTitle>
        There are hundreds of pretty plants out there. Calathea is here to help
        you learn about them and pick the right ones for you.
      </AboutSecondTitle>
      <Divider light />
      <AboutTextContainer>
        <AboutText>
          Plants are mainly multicellular, predominantly photosynthetic
          eukaryotes of the kingdom Plantae. Historically, plants were treated
          as one of two kingdoms including all living things that were not
          animals, and all algae and fungi were treated as plants. However, all
          current definitions of Plantae exclude the fungi and some algae, as
          well as the prokaryotes (the archaea and bacteria). By one definition,
          plants form the clade Viridiplantae (Latin name for "green plants"), a
          group that includes the flowering plants, conifers and other
          gymnosperms, ferns and their allies, hornworts, liverworts, mosses and
          the green algae, but excludes the red and brown algae.
        </AboutText>
        <AboutText>
          Green plants obtain most of their energy from sunlight via
          photosynthesis by primary chloroplasts that are derived from
          endosymbiosis with cyanobacteria. Their chloroplasts contain
          chlorophylls a and b, which gives them their green color. Some plants
          are parasitic or mycotrophic and have lost the ability to produce
          normal amounts of chlorophyll or to photosynthesize. Plants are
          characterized by sexual reproduction and alternation of generations,
          although asexual reproduction is also common.
        </AboutText>
        <AboutText>
          There are about 320,000 species of plants, of which the great
          majority, some 260–290 thousand, produce seeds.[5] Green plants
          provide a substantial proportion of the world's molecular oxygen,[6]
          and are the basis of most of Earth's ecosystems. Plants that produce
          grain, fruit and vegetables also form basic human foods and have been
          domesticated for millennia. Plants have many cultural and other uses,
          as ornaments, building materials, writing material and, in great
          variety, they have been the source of medicines and psychoactive
          drugs. The scientific study of plants is known as botany, a branch of
          biology.
        </AboutText>
      </AboutTextContainer>
    </AboutContainer>
  );
}

export default AboutUs;
