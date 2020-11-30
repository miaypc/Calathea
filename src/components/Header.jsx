import React, { useState, useContext } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import _Toolbar from "@material-ui/core/Toolbar";
import _IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Tooltip from '@material-ui/core/Tooltip';


// import from other files
import Color from "../utils/Color";
import SearchPlants from "./SearchPlants";
import { UserContext } from "./UserContext";

//styled

const Toolbar = styled(_Toolbar)`
@media (max-width: 450px) {
  padding-left:3px;
  padding-right:3px;
}
`;
const IconButton = styled(_IconButton)`
@media (max-width: 450px) {
  padding-left:3px;
  padding-right:7px;
}
`;

const Logo = styled.p`
  color: ${Color.Green};
  font-size: 50px;
  font-family: Lato;
  margin: 15px 10px;
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    font-size: 30px;
  }
  @media (max-width: 450px) {
    font-size: 25px;
    margin: 10px 8px;
  }
`;
const StyledLinks = styled(Link)`
  text-decoration: none;
  color: ${Color.Green};
`;

const UserDiv = styled.div`
color:${Color.Green};
display:flex;
flex-direction: row;
align-items: center;
margin-right:12px

`;






function Header() {
  const userInfo = useContext(UserContext)
  const {user, cartItems, setUser, setCartItems} = userInfo
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutAnchorEL, SetLogoutAnchorEL] = useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleLogoutClick(event) {
    SetLogoutAnchorEL(event.currentTarget)
  };
  function handleLogoutClose() {
    SetLogoutAnchorEL(null)
  };
  function handleLogout() {
    SetLogoutAnchorEL(null)
    setUser(null)
    setCartItems([])
  }


  return (
    <AppBar position="fixed" style={{ background: `${Color.White}` }}>
      <Toolbar>
        <Link
          to="/"
          style={{ textDecoration: "none", color: `${Color.Green}` }}
        >
          <Logo>Calathea</Logo>
        </Link>
        <Grid container justify="flex-end" xs item={true} alignItems="center">
          <SearchPlants />
          {user ? (
            <UserDiv>
            <img
              style={{
                width: "25px",
                height:"25px",
                marginRight: "8px",
                borderRadius: "50px",
              }}
              src={user.image}
              alt="user photo"
              onClick={handleLogoutClick}
            />
            <Menu
            id="simple-menu"
            anchorEl={logoutAnchorEL}
            keepMounted
            open={Boolean(logoutAnchorEL)}
            onClose={handleLogoutClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            getContentAnchorEl={null}
            >
              
              <MenuItem onClick={handleLogout} style={{color: `${Color.Green}`}}>
              <Link to="/" style={{ textDecoration: "none", color: `${Color.Green}` }} >
                Log out
                </Link>
                </MenuItem>
            
            </Menu>
            <Link to="/basket" style={{ textDecoration: "none", color: `${Color.Green}` }}>
            <Tooltip title={cartItems.length + " items"} >
            <ShoppingBasketIcon  />
            </Tooltip>             
            </Link>
            </UserDiv>
          ) : (
            <Link to="/login">
              <AccountCircle
                style={{
                  color: `${Color.Green}`,
                  marginRight: "12px",
                  marginTop: "3px",
                }}
              />
            </Link>
          )}

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon style={{ color: `${Color.Green}`, fontSize: "30px" }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <StyledLinks to="/" onClick={handleClose}>
                Home
              </StyledLinks>
            </MenuItem>
            <MenuItem>
              <StyledLinks to="/plants" onClick={handleClose}>
                Plants
              </StyledLinks>
            </MenuItem>
            <MenuItem>
              <StyledLinks to="/about" onClick={handleClose}>
                About Us
              </StyledLinks>
            </MenuItem>
          </Menu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
