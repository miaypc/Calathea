import React from "react";
import styled from "styled-components";
import Sign from "../image/Sign.png";
import Color from "../utils/Color";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

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

const Text = styled.p`
  color: ${Color.Green};
  flex-wrap: wrap;
  @media (max-width: 700px) {
    font-size: 11px;
    margin-bottom: 0;
  }
`;
const EmailContainer = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5em;
`;
const TextField = styled.input`
 border: 1px solid ${Color.Green};
 background-color:${Color.White};
 border-radius: 3px;
 outline:none;
 @media (max-width: 700px) {
  width:60%;
 }
`;
const SubmitButton = styled.input`
  color: ${Color.White};
  background-color: ${Color.Green};
  padding:3px 7px;
  margin-left: 0.5em;
  border-radius: 7px;
  border: none;
  outline:none;
  @media (max-width: 700px) {
    font-size:12px;
  }
`;

function Footer() {
  function sendEmail(e) {
    e.preventDefault(); 
    emailjs.sendForm('service_2ttv6bt', 'template_er2j1rj', e.target, 'user_jB5OhHREVqhUBm8bp9VtU')
      .then((result) => {
         console.log(result.text);
         window.location.reload() 
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <FooterContainer>
      <LogoSignContainer>
        <LogoSign src={Sign} />
      </LogoSignContainer>
      <SubscribeContainer>
        <TitleContainer>
          <a
            href="mailto:me@calathea.com"
            style={{ textDecoration: "none", color: `${Color.Green}` }}
          >
            <Title>Contact Us</Title>
          </a>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: `${Color.Green}` }}
          >
            <Title>About Us</Title>
          </Link>
        </TitleContainer>
        <Text>Subscribe: </Text>
        <EmailContainer className="contact-form" onSubmit={sendEmail} >
          <TextField type="email" name="email" />
          <SubmitButton type="submit" value="Send"/>
        </EmailContainer>
        <Text>I would like to receive more information about Calathea.</Text>
      </SubscribeContainer>
    </FooterContainer>
  );
}

export default Footer;
