import yaReact from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/titles/SectionTitle";
import {ProgressBlocks} from "./progressblocks/ProgressBlocks";
import {SkillsIconsBlock} from "./skillsiconsblock/SkillsIconsBlock";
import {Container} from "../../components/Container";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {Addition} from "./Addition";

export const Technologies = () => {
    return (
        <StyledTechnologies>
            <Container>
                <SectionTitle value={'Technologies'}/>
                <Wrapper  direction={'column'} alignCustom={'center'}>
                    <ProgressBlocks/>
                    <Addition/>
                    <SkillsIconsBlock/>
                </Wrapper>
            </Container>
        </StyledTechnologies>

    );
};
const StyledTechnologies = styled.section`
  display: flex;
  min-height: 80vh;
`
