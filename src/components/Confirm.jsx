import React from "react";
import Color from "../utils/Color";
import styled from "styled-components";

const ConfirmContainer = styled.div`
  padding: 25vh 15vw 20vh 10vw;
`;
const ConfirmTitle = styled.h1`
  color: ${Color.Green};
`;
const ConfirmText = styled.p`
  color: ${Color.Green};
`;

function Confirm() {
  return (
      <ConfirmContainer>
        <ConfirmTitle>Confirmation </ConfirmTitle>
        <ConfirmText>Your Booking has been confirmation, and you will receive information about the booking details soon!</ConfirmText>
      </ConfirmContainer>
  );
}

export default Confirm;
