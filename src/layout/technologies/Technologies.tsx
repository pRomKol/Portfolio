import yaReact from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/titles/SectionTitle";
import {ProgressBlocks} from "./progressblocks/ProgressBlocks";
import {SkillsIconsBlock} from "./skillsiconsblock/SkillsIconsBlock";

export const Technologies = () => {
    return (
        <StyledTechnologies>
            <SectionTitle value={'Technologies'}/>
            <ProgressBlocks/>
            <SectionTitle value={'Additional technologies and skills'}/>
            <SkillsIconsBlock/>
        </StyledTechnologies>
    );
};
const StyledTechnologies = styled.section`
  background-color: #0F1624;
  min-height: 100vh;
`
