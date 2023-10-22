import React from 'react';
import styled from "styled-components";

export const Title = () => {
    return (
        <StyledTitle> I am Roman Kolosov</StyledTitle>
    );
};

const StyledTitle= styled.h1`
  font-size: 54px;
  font-weight: 600;
`