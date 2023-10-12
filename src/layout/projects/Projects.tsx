import React from 'react';

import {Project} from "./project/Project";
import {SectionTitle} from "../../components/titles/SectionTitle";
import {Wrapper} from "../../components/FlexWrapper";
import styled from "styled-components";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle value={'Projects'}/>
            <Wrapper justify={'center'}>
                <Project title={'Project 1'}/>
                <Project title={'Project 2'}/>
                <Project title={'Project 3'}/>
                <Project title={'Project 4'}/>
            </Wrapper>
        </StyledProjects>

    );
};
const StyledProjects = styled.section`
  background-color: #161D2A;
`

