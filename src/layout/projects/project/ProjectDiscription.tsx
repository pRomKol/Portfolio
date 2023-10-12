import React from 'react';
import styled from "styled-components";
type DiscriptionPropsType = {
    discription: string
}
export const ProjectDiscription = (props: DiscriptionPropsType) => {
    return (
        <StyledProjectDiscription>
            {props.discription}
        </StyledProjectDiscription>
    );
};
const StyledProjectDiscription = styled.div``

