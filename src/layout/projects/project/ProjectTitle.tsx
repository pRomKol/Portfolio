import React from 'react';
import styled from "styled-components";
import {StyledProjectsPropsType} from "../../../components/titles/SectionTitle";

export const ItemTitle = (props:StyledProjectsPropsType) => {
    return (
        <StyledProjectTitle>
            {props.value}
        </StyledProjectTitle>
    );
};
 const StyledProjectTitle = styled.h3`
   color: #FFF;
   
   margin: 40px auto 67px auto;
   font-size: 30px;
   //margin: 40px 25px 67px 0;
   font-weight: 600;
   line-height: 88.5%; 

 `
