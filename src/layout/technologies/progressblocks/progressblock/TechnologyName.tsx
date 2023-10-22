import React, {FC} from 'react';
import {ItemTitle} from "../../../projects/project/ProjectTitle";
import styled from "styled-components";
type TechnologyNamePropsType = {
    name: string
}
export const TechnologyName: FC<TechnologyNamePropsType>  = ({name}) => {
    return (
        <StyledTechnologyName>
            {name}
        </StyledTechnologyName>
    );
};
const StyledTechnologyName = styled.span`
  color: #FFF;

  
  font-size: 24px;

  font-weight: 600;
`
