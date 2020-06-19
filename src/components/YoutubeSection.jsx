import React from "react";
import styled from "styled-components";
import YoutubeBackgroundImage from "../image/YoutubeBackgroundImage.JPG";

const YoutubeContainer = styled.div`
  position: relative;
  z-index: 0;
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

const VideoContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  z-index: 2;
`;
const Iframe = styled.iframe``;
function YoutubeSection() {
  return (
    <YoutubeContainer>
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
