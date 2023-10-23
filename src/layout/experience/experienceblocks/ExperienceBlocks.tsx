import React from 'react';
import styled from "styled-components";
import {ExperienceBlock} from "./experianblock/ExperianceBlock";
import {Wrapper} from "../../../components/wrappers/FlexWrapper";
import {theme} from "../../../components/globalstyle/Theme";



export const ExperienceBlocks = () => {
    return (
        <StyledExperienceBlocks alignCustom={'center'} justify={'space-between'}>
            {experienceArray.map((exp) => (<ExperienceBlock year={exp.year} description={exp.description}/>))}
        </StyledExperienceBlocks>
    );
}
const StyledExperienceBlocks = styled(Wrapper)`
  height: auto;
  --items-count: 4;
  gap: var(--gap);
  --gap: 32px;
  
  --block-max-width: 260px;
  flex-direction: row;
  position: relative;

  &::before {
    content: '';
    background: ${theme.colors.accent};
    position: absolute;
    width: calc(100% - var(--offset) * 2);
    height: 10px;
    --offset: min(calc((100% - (var(--items-count) - 1) * var(--gap)) / var(--items-count) / 2), var(--block-max-width) / 2);
    left: var(--offset);
    
    top: 40px;
  }
`
const experienceArray =  [
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.',
        year: '1999'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.',
        year: '2000'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.',
        year: '2001'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.',
        year: '2002'
    },


]
