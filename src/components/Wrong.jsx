import React from "react";
import Color from "../utils/Color";
import styled from "styled-components";

const WrongContainer = styled.div`
  padding: 25vh 15vw 20vh 10vw;
`;
const WrongText = styled.h1`
  color: ${Color.Green};
`;

function Wrong() {
  return (
    <div>
      <WrongContainer>
        <WrongText>No plant found...</WrongText>
      </WrongContainer>
    </div>
  );
}

export default Wrong;
