import React from 'react';
import styled from "styled-components";
import {font} from "../../../components/globalstyle/Common";

export const ShortBiography = () => {
    return (
        <StyledShortBiography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </StyledShortBiography>

    );
};
const StyledShortBiography = styled.h2`
${font({weight:500, Fmax: 18, Fmin: 16, color: '#BCBCBC'})}
  max-width: 482px;
  margin: 15px 0 60px 0;
`
