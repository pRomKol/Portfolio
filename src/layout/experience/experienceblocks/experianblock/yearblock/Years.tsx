import React, {FC} from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/globalstyle/Theme";
type YearsPropsType = {
    value: string
}
export const Years: FC<YearsPropsType> = ({value}) => {
    return (
        <StyledYears>
            {value}
        </StyledYears>
    );
};
const StyledYears = styled.h2`
  margin: 0;
  position: relative;
  @media ${theme.media.tablet}{
    margin-left: 40px;
  }
&::before{
  content:'';
  width: 25px;
  height: 25px;
  border-radius: 100%;
  position: absolute;
  background-color: #fff;
  transform: translateX(50%);
  top: 32px;
  z-index: 99;
  @media ${theme.media.tablet}{
    transform: translateX(-47px);
    top: 4px;
  }
}`

