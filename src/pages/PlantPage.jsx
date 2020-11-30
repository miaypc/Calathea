import React from "react";
import styled from "styled-components";
import PopularPlantSection from "../components/PopularPlantsSection";

const PlantSectionContainer = styled.div`
  padding-top: 5em;
`;

function PlantPage() {
  return (
    <div>
      <PlantSectionContainer>
        <PopularPlantSection />
      </PlantSectionContainer>
    </div>
  );
}

export default PlantPage;
