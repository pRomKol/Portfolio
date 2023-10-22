import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/titles/SectionTitle";
import {ExperienceBlocks} from "./experienceblocks/ExperienceBlocks";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {Container} from "../../components/Container";

export const Experience = () => {
    return (
        <StyledExperience>
                 <Container>
                     <Wrapper direction={'column'} >
                         <SectionTitle value={'Experience'}/>
                         <ExperienceBlocks/>
                     </Wrapper>
                 </Container>
        </StyledExperience>
    );
};
const StyledExperience = styled.section`
  display: flex;
  min-height: 50vh;
`








