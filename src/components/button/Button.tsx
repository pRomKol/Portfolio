import React, {FC} from 'react';
import styled from "styled-components";
type ButtonPropsType= {
}
export const Button:FC<ButtonPropsType> = () => {
    return (
        <StyledButton>
            Let`s Begin
        </StyledButton>
    );
};
const StyledButton = styled.button`
  width: 240px;
  height: 60px;
  border-radius: 83px;
  background:  linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`

