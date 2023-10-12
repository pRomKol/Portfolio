import React from 'react';
import styled from "styled-components";

export type StyledTitlesPropsType = {
    value?: string
    title?: string
}
export const SectionTitle = (props:StyledTitlesPropsType) => {
    return (
        <StyledSectionTitle >
            {props.value || "Project"}
        </StyledSectionTitle>
    );
};
const StyledSectionTitle = styled.h2``
