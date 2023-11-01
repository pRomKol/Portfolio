import React from 'react';
import styled from "styled-components";
import {font} from "../globalstyle/Common";
import {theme} from "../globalstyle/Theme";

export type StyledProjectsPropsType = {
    value?: string
    title?: string
    imgSrc?: string
    description?: string
    projectValue?: string
}
export const SectionTitle = (props:StyledProjectsPropsType) => {
    return (
        <StyledSectionTitle >
            {props.value}
        </StyledSectionTitle>
    );
};
const StyledSectionTitle = styled.h2`
  ${font({weight:600, Fmax: 46, Fmin: 38,})}
  padding-bottom: 70px;
  white-space: nowrap;
  @media ${theme.media.laptop}{
    text-align: center;
  }
`
