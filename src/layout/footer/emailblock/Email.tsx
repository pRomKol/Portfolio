import React from 'react';
import styled from "styled-components";
import {font} from "../../../components/globalstyle/Common";

export const Email = () => {
    return (
        <StyledEmail>
            Email: csdgfqe@gmail.com
        </StyledEmail>
    );
};

const StyledEmail= styled.div`
  
  ${font({weight:600, Fmax: 22, Fmin: 12,})}
  max-width: 143px`