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
 color: white;
 `
