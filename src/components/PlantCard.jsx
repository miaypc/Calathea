import React from "react";
import styled from "styled-components";
import Color from "../utils/Color";


const PlantImage = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 2em;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const PlantDescription = styled.p`
  font-size: 20px;
  font-weight: 200;
  padding-top: 15px;
  margin: 0;
  opacity: 0;
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${Color.White};
  font-family: Lato;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  background-color: rgba(28, 57, 36, 0.2);
  text-align: center;
  transition-duration: 0.4s;

  &:hover {
    will-change: background;
    background-color: rgba(28, 57, 36, 0.898);
  }
  &:hover ${PlantDescription} {
    opacity: 1;
  }
`;
const PlantTextContainer = styled.div`
  align-items: center;
`;
const PlantTitle = styled.p`
  font-size: 40px;
  font-weight: 400;
  margin: 0;
`;




function PlantCard(props) {

  return (
    <PlantImage
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <ImageDiv>
        <PlantTextContainer>
          <PlantTitle>{props.name}</PlantTitle>
          <PlantDescription>{props.description}</PlantDescription>
        </PlantTextContainer>
        
      </ImageDiv>
    </PlantImage>
  );
}

export default PlantCard;
