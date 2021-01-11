import React from "react";
import styled from "styled-components";
import Color from "../utils/Color";

const NotAvailableContainer = styled.div`
  padding-top: 5em;
  padding-bottom:5em;
`;
const NotAvailableTextContainer = styled.div`
  padding: 20vh 15vw 25vh 10vw;
`;
const NotAvailableText = styled.h1`
  color: ${Color.Green};
`;
function NotAvailablePage() {
  return (
      <NotAvailableContainer>
     <NotAvailableTextContainer>
        <NotAvailableText>Oops, Page Not Found!</NotAvailableText> 
     </NotAvailableTextContainer>
      </NotAvailableContainer>
  );
}

export default NotAvailablePage;