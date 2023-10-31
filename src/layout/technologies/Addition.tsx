import React from 'react';
import styled from "styled-components";
import {font} from "../../components/globalstyle/Common";

export const Addition = () => {
    return (
        <StyledAddition>
            Additional technologies and skills
        </StyledAddition>
    );
};


const StyledAddition = styled.span`
  ${font({weight:600, Fmax: 44, Fmin: 36,})}
  margin: 100px 0 70px 0;
  
 display: flex;
  text-align: center;
`