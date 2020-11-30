import React from "react";
import Color from "../utils/Color";
import styled from "styled-components";

const NoPlantFoundContainer = styled.div`
  padding: 20vh 15vw 25vh 10vw;
`;
const NoPlantFoundText = styled.h1`
  color: ${Color.Green};
`;

function NoPlantFound() {
  return (
    <div>
      <NoPlantFoundContainer>
        <NoPlantFoundText>No plants found...</NoPlantFoundText>
      </NoPlantFoundContainer>
    </div>
  );
}

export default NoPlantFound;
