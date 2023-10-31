import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/globalstyle/Theme";
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
const StyledProjectDescription = styled.span`
  
  font-size: 18px;
  margin-bottom: 50px;
  font-weight: 500;
  position: relative;
  &::before{
    content: '';
    height: 4px;
    background: ${theme.colors.accent};
    position: absolute;
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
    top: -40px;
  }
`

