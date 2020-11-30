import React from "react";
import styled from "styled-components";
import Color from "../utils/Color";
import { Link } from "react-router-dom";

import PlantCard from "./PlantCard";
import { Plants } from "../utils/Plants";

const PopularPlantsSectionConatiner = styled.div`
  margin: 3em 0 6em 0;
  letter-spacing: 1px;
  font-family: Lato;
`;
const PlantSectionTextContainer = styled.div`
  color: ${Color.Green};
  text-align: center;
  margin: 8em 0 3em 0;
  line-height: 200%;
`;
const PlantSectionTitle = styled.p`
  font-size: 50px;
`;

const PlantSectionContent = styled.p`
  font-size: 20px;
  letter-spacing: 0.5px;
`;
const PlantImageConatiner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
`;

const PlantImageRowConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1em 0;
`;

function PopularPlantsSection() {
  return (
    <PopularPlantsSectionConatiner>
      <PlantSectionTextContainer>
        <PlantSectionTitle>Plants Collection</PlantSectionTitle>
        <PlantSectionContent>
          Low-Maintenance popular green plants for your rooms
        </PlantSectionContent>
      </PlantSectionTextContainer>
      <PlantImageConatiner>
        <PlantImageRowConatiner>
          {Plants.map((e) => {
            return (
              <div key={e.id}>
                <Link
                  to={`/plants/${e.id}`}
                  style={{ textDecoration: "none", color: `${Color.White}` }}
                >
                  <PlantCard
                    image={e.image}
                    name={e.name}
                    description={e.description}
                  />
                </Link>
              </div>
            );
          })}
        </PlantImageRowConatiner>
      </PlantImageConatiner>
    </PopularPlantsSectionConatiner>
  );
}

export default PopularPlantsSection;
