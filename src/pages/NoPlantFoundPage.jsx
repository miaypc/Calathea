import React from "react";
import styled from "styled-components";
import NoPlantFound from "../components/NoPlantFound";

const NoPlantFoundContainer = styled.div`
  padding-top: 5em;
  padding-bottom:5em;
`;

function NoPlantFoundPage() {
  return (
      <NoPlantFoundContainer>
        <NoPlantFound/>
      </NoPlantFoundContainer>
  );
}

export default NoPlantFoundPage;