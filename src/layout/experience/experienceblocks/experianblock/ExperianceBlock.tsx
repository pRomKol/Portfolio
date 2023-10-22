import React, {FC} from 'react';
import {Years} from "./yearblock/Years";
import {Circle} from "./yearblock/Circle";
import {ExperienceDescription} from "./experiencediscription/ExperienceDescription";
import styled from "styled-components";
type ExperienceBlockPropsType = {
    year: string
    description: string
}
export const ExperienceBlock: FC<ExperienceBlockPropsType > = ({year, description}) => {
    return (
        <StyledExperienceBlock>
            <Years value={year}/>
            <Circle/>
            <ExperienceDescription value={description} />
        </StyledExperienceBlock>
    );
};
const StyledExperienceBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`

