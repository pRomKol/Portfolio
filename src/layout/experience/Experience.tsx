import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/titles/SectionTitle";
import {ExperienceBlocks} from "./experienceblocks/ExperienceBlocks";
import {Wrapper} from "../../components/wrappers/FlexWrapper";

export const Experience = () => {
    return (
        <StyledExperience direction={'column'} >
            <SectionTitle value={'Experience'}/>
            <ExperienceBlocks/>
        </StyledExperience>
    );
};
const StyledExperience = styled(Wrapper)`
  background-color: #161D2A;
  min-height: 50vh;
  
`






