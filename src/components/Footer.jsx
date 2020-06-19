import React from "react";
import styled from "styled-components";
import Sign from "../image/Sign.png";
import Color from "../utils/Color";
import _TextField from "@material-ui/core/TextField";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0em;
  padding: 2em 0em;

  background: ${Color.LightGrey};
`;

const LogoSignContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LogoSign = styled.img`
  width: 250px;
  @media (max-width: 700px) {
    width: 150px;
    height: 150px;
  }
`;

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  @media (max-width: 700px) {
    margin-left: 2em;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Title = styled.h2`
  color: ${Color.Green};
  margin-right: 3em;
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5em;
`;

const Text = styled.p`
  color: ${Color.Green};
  flex-wrap: wrap;

  @media (max-width: 700px) {
    font-size: 11px;
    margin-bottom: 0;
  }
`;

const TextField = styled(_TextField)`
  @media (max-width: 700px) {
    width: 40%;

    > label {
      font-size: 12px;
    }

    > div input {
      padding: 1px;
    }
  }
`;

const SubmitButton = styled.button`
  color: ${Color.White};
  background-color: ${Color.Green};
  height: 30px;
  margin-left: 0.5em;
  border-radius: 8px;
  border: none;

  @media (max-width: 700px) {
    font-size: 10px;
    height: 20px;
    margin-left: 1em;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoSignContainer>
        <LogoSign src={Sign} />
      </LogoSignContainer>

      <SubscribeContainer>
        <TitleContainer>
          <Title>Contact Us</Title>
          <Title>More Info</Title>
        </TitleContainer>
        <Text>Subscribe</Text>
        <EmailContainer>
          <TextField id="standard-basic" label="Your Email..." />
          <SubmitButton>Submit</SubmitButton>
        </EmailContainer>
        <Text>I would like to receive more information about Calathea.</Text>
      </SubscribeContainer>
    </FooterContainer>
  );
}

export default Footer;
