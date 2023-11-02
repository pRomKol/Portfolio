import React from 'react';
import {SectionTitle} from "../../components/titles/SectionTitle";
import {ExperienceBlocks} from "./experienceblocks/ExperienceBlocks";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {Container} from "../../components/Container";
import {S} from './Experince_Styles'

export const Experience = () => {
    return (
        <S.Experience>
                 <Container>
                     <Wrapper direction={'column'} >
                         <SectionTitle value={'Experience'}/>
                         <ExperienceBlocks/>
                     </Wrapper>
                 </Container>
        </S.Experience>
    );
};









