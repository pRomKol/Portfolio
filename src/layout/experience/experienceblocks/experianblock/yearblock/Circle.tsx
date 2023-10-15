import React from 'react';
import styled from "styled-components";

export const Circle = () => {
    return (
        <StyledCircle/>
            

    );
};
const StyledCircle = styled.div`
  --radius: 25px;
  width: var(--radius);
  height: var(--radius);
  border-radius: 50%;
  background-color: #fff;
`
