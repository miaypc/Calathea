import React, { useState, useEffect } from "react";
import Color from "../utils/Color";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import styled from "styled-components";
import { Plants } from "../utils/Plants";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  "@global": {
    ".MuiAutocomplete-option": {
      color: `${Color.Green}`,
    },
  },
});

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
  border-radius: 25px;
  height: 80%;
  background-color: ${Color.DarkGrey};
  @media (max-width: 500px) {
    width: 50%;
  }
`;

function SearchPlants() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    if (search) {
      setFilteredPlants(
        Plants.filter((plant) => {
          return plant.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search]);

  const handleChange = (e, value) => {
    setSearch(value);
  };

  const handleClick = () => {
    if (filteredPlants.length !== 0) {
      filteredPlants.map((e) => (window.location = `/plants/${e.id}`));
    } else {
      window.location = `/error`;
    }
  };

  return (
    <SearchContainer>
      <SearchIcon
        onClick={handleClick}
        style={{
          color: `${Color.Green}`,
          marginRight: "0.2em",
          marginLeft: "0.2em",
        }}
      />
      <Autocomplete
        id="custom-input-demo"
        onInputChange={handleChange}
        options={Plants}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <div
            ref={params.InputProps.ref}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          >
            <InputBase
            className={classes.color}
              onSelect={() => (search ? handleClick() : "")}
              placeholder="Search…"
              style={{
                color: `${Color.Green}`,
                border: "none",
                outline: "none",
              }}
              {...params.inputProps}
            />
          </div>
        )}
      />
    </SearchContainer>
  );
}
export default SearchPlants;
