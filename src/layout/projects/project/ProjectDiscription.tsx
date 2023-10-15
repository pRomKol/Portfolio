import React from 'react';
import styled from "styled-components";
type DescriptionPropsType = {
    value?: string
    projectValue?: string
}
export const ProjectDescription = (props: DescriptionPropsType) => {
    return (
        <StyledProjectDescription>
            {props.projectValue}
        </StyledProjectDescription>
    );
};
const StyledProjectDescription = styled.div``

