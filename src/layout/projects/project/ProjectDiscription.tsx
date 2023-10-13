import React from 'react';
import styled from "styled-components";
type DiscriptionPropsType = {
    value?: string
    projectValue?: string
}
export const ProjectDiscription = (props: DiscriptionPropsType) => {
    return (
        <StyledProjectDiscription>
            {props.projectValue}
        </StyledProjectDiscription>
    );
};
const StyledProjectDiscription = styled.div``

