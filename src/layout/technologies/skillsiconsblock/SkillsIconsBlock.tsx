import React from 'react';
import {GitSkillsIcon} from "./giticon/GitSkillsIcon";
import {GitHubSkillIcon} from "./githubicon/GitGubSkillsIcon";
import {FigmaSkillsIcon} from "./figmaskillsicon/FigmaSkillsIcon";
import styled from "styled-components";


export const SkillsIconsBlock = () => {
    return (
        <StyledSkillIconsBlock>
            <GitSkillsIcon/>
            <GitHubSkillIcon/>
            <FigmaSkillsIcon/>

        </StyledSkillIconsBlock>
    );
};
const StyledSkillIconsBlock = styled.div`
  display: flex;
  gap: 50px`
