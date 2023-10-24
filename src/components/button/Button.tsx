import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../globalstyle/Theme";
type ButtonPropsType= {

    primary?: boolean
    outlined?: boolean
}


export const Button = styled.button<ButtonPropsType>`
  ${props => props.primary &&  css<ButtonPropsType>`
    width: 240px;
  height: 60px;
  border-radius: 83px;
  background: ${theme.colors.accent};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  `} 
  ${props => props.outlined && css<ButtonPropsType>`
    width: 200px;
    height: 60px;
    border-radius: 83px;
    background:  ${theme.colors.accent};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;`}`


