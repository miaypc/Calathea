import React from "react";
import styled from "styled-components";
import YoutubeBackgroundImage from "../image/YoutubeBackgroundImage.JPG";
import Color from "../utils/Color";

const YoutubeContainer = styled.div`
  position: relative;
  z-index: 0;
  background-color: ${Color.Cream};
`;

const YoutubeBackground = styled.div`
  background-image: url(${YoutubeBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 0;
  padding-bottom: 70%;
  width: 100vw;
  background-size: 50%;
  background-position: bottom right;
  z-index: 1;
`;

const YoutubeSectionTextContainer = styled.div`
  color: ${Color.Green};
  text-align: center;
  margin: 8em 0 3em 0;
  line-height: 200%;
  padding-top: 6em;
  @media (max-width: 370px) {
    padding-top: 1em;
    margin: 2em 0 3em 0;
  }
`;
const YoutubeSectionTitle = styled.p`
  font-size: 50px;
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const YoutubeSectionContent = styled.p`
  font-size: 20px;
  letter-spacing: 0.5px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  z-index: 2;
  @media (max-width: 1100px) {
    left: 10%;
  }
  @media (max-width: 1000px) {
    left: 10%;
    top: 40%;
  }
  @media (max-width: 700px) {
    left: 10%;
    top: 50%;
  }
`;
const Iframe = styled.iframe`
  width: 800px;
  height: 500px;
  @media (min-width: 2000px) {
    width: 1200px;
    height: 800px;
  }
  @media (min-width: 1500px) {
    width: 1000px;
    height: 600px;
  }

  @media (max-width: 1000px) {
    width: 600px;
    height: 300px;
  }
  @media (max-width: 700px) {
    width: 300px;
    height: 200px;
  }
  @media (max-width: 370px) {
    width: 250px;
    height: 180px;
  }
`;
function YoutubeSection() {
  return (
    <YoutubeContainer>
      <YoutubeSectionTextContainer>
        <YoutubeSectionTitle>Plants Tutorials</YoutubeSectionTitle>
        <YoutubeSectionContent>
          amazing videos make your plant life easiler. all you need to know
          about plants
        </YoutubeSectionContent>
      </YoutubeSectionTextContainer>
      <YoutubeBackground />

      <VideoContainer>
        <Iframe
          src="https://www.youtube.com/embed/BbU5cMZoECM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </VideoContainer>
    </YoutubeContainer>
  );
}

export default YoutubeSection;
