import React from 'react';
import styled from "styled-components";
import {font} from "../../../components/globalstyle/Common";

export const Number = () => {
    return (
        <StyledNumber>
            Call me: 111-11-11
        </StyledNumber>
    );
};
const StyledNumber = styled.div`
  ${font({weight:600, Fmax: 22, Fmin: 16,})}
  max-width: 143px`
