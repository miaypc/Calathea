import React, { useContext } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Color from "../utils/Color";
import SignIn from "../image/SignIn.jpg";
import { UserContext } from "./UserContext";

const LoginContainer = styled.div`
  padding: 20vh 15vw 20vh 10vw;
  color: ${Color.Green};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  letter-spacing: 1px;
  padding-bottom: 10px;
`;

const SignInImage = styled.div`
  background-image: url(${SignIn});
  height: 220px;
  width: 300px;
  margin-bottom: 7vh;
  background-size: cover;
  border-radius: 7px;
`;

function Login() {
  const userInfo = useContext(UserContext)
  const {user, setUser, setIsLogged} = userInfo

  const responseGoogle = async (response) => {
   
    await setUser({
      name: response.profileObj.givenName,
      image: response.profileObj.imageUrl,
    });
    setIsLogged(true)
  };

  return (
    <LoginContainer>
      <SignInImage  />
      {user ? (
        <div >
        <H2>Welcome: {user.name} </H2>
        <img src={user.image} alt="a photo of user"/>
        </div>
      ) : (
        <div>
          <GoogleLogin
            clientId="630428273277-modtah0agd6sd8i2qf734jjuspka2phr.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                style={{
                  backgroundColor: `${Color.Green}`,
                  color: `${Color.White}`,
                  border: "none",
                  outline: "none",
                  borderRadius: "25px",
                  padding: "10px 20px ",
                  fontSize: "20px",
                }}
              >
                Sign in with Google
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
    </LoginContainer>
  );
}

export default Login;
