import React from "react";
import styled from "styled-components";
import Color from "../utils/Color";
import Background from "../image/Background.jpg";

const ImageContainer = styled.div`
  position: relative;
`;
const BackgroundImg = styled.div`
  background-image: url(${Background});
  background-position: center 89px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 0;
  padding-bottom: 70%;
  width: 100vw;
  background-size: 100%;

  @media (max-width: 1000px) {
    background-position: center 77px;
  }
  @media (max-width: 700px) {
    background-position: center 65px;
  }
  @media (max-width: 450px) {
    background-position: center 56px;
  }
`;

const AllAboutPlants = styled.div`
  position: absolute;
  font-family: Lato;
  padding-right: 10px;
  color: ${Color.LightGrey};
  letter-spacing: 1px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  left: 55%;
  top: 17%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 1500px) {
    top: 15%;
  }
  @media (max-width: 700px) {
    left: 50%;
    top: 25%;
  }
`;

const AllAboutPlantsTitle = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 65px;

  @media (max-width: 1500px) {
    font-size: 60px;
  }

  @media (max-width: 1200px) {
    font-size: 50px;
  }
  @media (max-width: 950px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    font-size: 23px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

const AllAboutPlantsTexts = styled(AllAboutPlantsTitle)`
  font-size: 45px;
  text-transform: none;

  @media (max-width: 1500px) {
    font-size: 40px;
  }

  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 900px) {
    font-size: 18px;
  }
  @media (max-width: 700px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

function BackgroundImage() {
  return (
    <ImageContainer>
      <BackgroundImg />
      <AllAboutPlants>
        <AllAboutPlantsTitle>All About Plants</AllAboutPlantsTitle>
        <AllAboutPlantsTexts>
          Know all the general information about your plants.
        </AllAboutPlantsTexts>
      </AllAboutPlants>
    </ImageContainer>
  );
}
export default BackgroundImage;
