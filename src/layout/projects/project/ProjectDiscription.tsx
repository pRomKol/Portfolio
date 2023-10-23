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
  margin: 0 25px 50px 0;
  font-weight: 500;
  position: relative;
  &::before{
    content: '';
    width: 300px;
    height: 4px;
    background: ${theme.colors.accent};
    position: absolute;
    left: 100px;
    bottom: 120px;
  }
`

