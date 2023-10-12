import React from 'react';
import styled from "styled-components";
import {StyledTitlesPropsType} from "../../../components/titles/SectionTitle";

export const ProjectTitle = (props:StyledTitlesPropsType) => {
    return (
        <StyledProjectTitle>
            {props.value}
        </StyledProjectTitle>
    );
};
 const StyledProjectTitle = styled.div`
 `
