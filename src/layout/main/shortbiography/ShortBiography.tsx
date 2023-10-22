import React from 'react';
import styled from "styled-components";

export const ShortBiography = () => {
    return (
        <StyledShortBiography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </StyledShortBiography>

    );
};
const StyledShortBiography = styled.h2`
  color: #BCBCBC;
  font-size: 18px;
  font-weight: 500;
  max-width: 482px;
  margin: 15px 0 60px 0;
`
