import React from 'react';
import styled from "styled-components";
import {StyledProjectsPropsType} from "../../../components/titles/SectionTitle";
import {font} from "../../../components/globalstyle/Common";

export const ItemTitle = (props:StyledProjectsPropsType) => {
    return (
        <StyledProjectTitle>
            {props.value}
        </StyledProjectTitle>
    );
};
 const StyledProjectTitle = styled.h3`
   ${font({weight:500, Fmax: 30, Fmin: 25,})}
   
   margin: 40px auto 67px auto;
   font-size: 30px;
   //margin: 40px 25px 67px 0;
   font-weight: 600;
   line-height: 88.5%; 

 `
