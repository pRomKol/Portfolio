import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/titles/SectionTitle";
import {ExperienceBlocks} from "./experienceblocks/ExperienceBlocks";
import {Wrapper} from "../../components/wrappers/FlexWrapper";

export const Experience = () => {
    return (
        <StyledExperience>
            <Wrapper direction={'column'} >
                <SectionTitle value={'Experience'}/>
                <ExperienceBlocks/>
            </Wrapper>
        </StyledExperience>
    );
};
const StyledExperience = styled.section`
  min-height: 50vh;
`








