import React from 'react';
import styled from "styled-components";

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
            {props.value || "Project"}
        </StyledSectionTitle>
    );
};
const StyledSectionTitle = styled.h2`
color: aqua;
margin: 0;
`
