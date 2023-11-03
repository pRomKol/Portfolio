import React from 'react';
import styled from "styled-components";
import {font} from "../globalstyle/Common";

export const Title:React.FC = () => {
    return (
        <StyledTitle>
            I am <span>Roman Kolosov</span>
        </StyledTitle>
    );
};

const StyledTitle= styled.h1`
  ${font({weight: 700, Fmax: 54, Fmin: 36})};
@media screen and (max-width: 434px){
  text-align: center;
}
  span {
    white-space: nowrap;
  }  
`