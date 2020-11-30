import React, { useState, useEffect, useContext} from "react";
import styled from "styled-components";
import Color from "../utils/Color";
import { Plants } from "../utils/Plants";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import {UserContext} from "./UserContext"

const DetailContainer = styled.div`
  padding: 25vh 15vw 20vh 10vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    padding: 25vh 8vw 20vh 5vw;
  }
`;
const DetailContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: ${Color.Green};
`;
const DetailPlantImage = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 2em;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const DetailPlantTitle = styled.p`
  font-size: 50px;
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 900px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const DetailRequirementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3em;
  @media (max-width: 500px) {
    padding-left: 2em;
  }
`;
const DetailRequirment = styled.p`
  font-size: 25px;
  > span {
    font-weight: 500;
    margin-right: 8px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
const DetailButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3em;
  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;
const AddButton = styled.button`
  color: ${Color.White};
  background-color: ${Color.Green};
  font-size: 25px;
  border-radius: 8px;
  border: none;
  padding: 10px 20px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:focus {
    color: ${Color.Green};
    background-color: ${Color.Cream};
    outline-color: ${Color.Green};
  }
  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

// const LikeDiv = styled.div`
// display:flex;
// flex-direction: row;
// color: ${Color.Green}
// `;

function Detail({ match }) {
  const [addButtonText, setAddButtonText] = useState("Add to cart");
  const [id, setId] = useState(0);
  // const [like, setLike] = useState(true)
  // const [likeCount, setLikeCount]= useState(0)
  const userInfo = useContext(UserContext)
  const {cartItems, setCartItems} = userInfo
  
  // function handleClick(){
  //   setLike(!like)
  //   if(likeCount === 0) {
  //   setLikeCount(1)
  //   } else {
  //     setLikeCount(0)
  //   }
  // }
  useEffect(() => {
    setId(match.params.id - 1);
  }, []);

  function handleAddButton() {
    setAddButtonText("In the cart");
    // addToCart(Plants[id])
    setCartItems([...cartItems, Plants[id]])

  }
  return (
    <div>
      <DetailContainer>
        <DetailContentContainer>
          <DetailPlantImage
            style={{
              backgroundImage: `url(${Plants[id].image})`,
            }}
          />
          <DetailRequirementsContainer>
            <DetailPlantTitle>{Plants[id].name}</DetailPlantTitle>
            {/* <LikeDiv onClick={handleClick}>
            {like? <FavoriteBorderIcon/> : <FavoriteIcon/>}
          <p style={{margin:"0", paddingLeft:"8px"}}>{likeCount} likes</p>
            </LikeDiv> */}
            <DetailRequirment>
              <span>Water: </span>
              {Plants[id].water}
            </DetailRequirment>
            <DetailRequirment>
              <span>Sunlight:</span> {Plants[id].sunlight}
            </DetailRequirment>
            <DetailRequirment>
              <span>Humidity: </span>
              {Plants[id].humidity}
            </DetailRequirment>
          </DetailRequirementsContainer>
        </DetailContentContainer>
        <DetailButtonContainer>
          <AddButton onClick={handleAddButton}> {addButtonText}</AddButton>
        </DetailButtonContainer>
      </DetailContainer>
    </div>
  );
}

export default Detail;
