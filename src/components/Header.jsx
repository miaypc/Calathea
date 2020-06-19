import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
// import from other files
import Color from "../utils/Color";

//styled
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

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-radius: 25px;
  height: 80%;
  background-color: ${Color.DarkGrey};
  margin-right: 1em;
  @media (max-width: 450px) {
    display: none;
  }
`;
const Search = styled.div`
  position: abosulte;
  margin-left: 1em;
  margin-right: 0.5em;
`;

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" style={{ background: `${Color.White}` }}>
      <Toolbar>
        <Logo>Calathea</Logo>
        <Grid container justify="flex-end" xs alignItems="center">
          <SearchContainer>
            <Search>
              <SearchIcon
                style={{ color: `${Color.Green}`, marginTop: "0.2em" }}
              />
            </Search>
            <InputBase
              placeholder="Search…"
              style={{ color: `${Color.Green}` }}
              inputProps={{ "aria-label": "search" }}
            />
          </SearchContainer>

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
              <StyledLinks to="/plant" onClick={handleClose}>
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
