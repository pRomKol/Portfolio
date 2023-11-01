import React from 'react';
import styled from "styled-components";
import {font} from "../../../components/globalstyle/Common";

export const Email = () => {
    return (
        <StyledEmail>
            Email: <br/>
            <EmailLink>
                kolosow.roman99@gmail.com
            </EmailLink>
        </StyledEmail>
    );
};

const StyledEmail = styled.div`
  ${font({weight: 600, Fmax: 22, Fmin: 16,})}
`
const EmailLink = styled.a.attrs(() => ({
    href: 'mailto:kolosow.roman99@gmail.com'
}))``