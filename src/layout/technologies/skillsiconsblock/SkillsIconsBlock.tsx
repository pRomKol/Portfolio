import React from 'react';
import {GitSkillsIcon} from "./giticon/GitSkillsIcon";
import {GitHubSkillIcon} from "./githubicon/GitGubSkillsIcon";
import {FigmaSkillsIcon} from "./figmaskillsicon/FigmaSkillsIcon";
import styled from "styled-components";
import {theme} from "../../../components/globalstyle/Theme";


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
  gap: 50px;
@media ${theme.media.laptop}{
  gap: 25px;
  flex-direction: column;
}
`
