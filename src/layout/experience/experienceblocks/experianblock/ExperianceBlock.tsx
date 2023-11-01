import React, {FC} from 'react';
import {Years} from "./yearblock/Years";

import {ExperienceDescription} from "./experiencediscription/ExperienceDescription";
import styled from "styled-components";
import {theme} from "../../../../components/globalstyle/Theme";

type ExperienceBlockPropsType = {
    year: string
    description: string
}
export const ExperienceBlock: FC<ExperienceBlockPropsType> = ({year, description}) => {
    return (
        <StyledExperienceBlock>
            <Years value={year}/>
            <ExperienceDescription value={description}/>
        </StyledExperienceBlock>
    );
};
const StyledExperienceBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
@media ${theme.media.tablet} {
  display: flex;
  align-items: center;
  flex-direction: row;
}
`


