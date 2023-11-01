import React from 'react';
import styled from "styled-components";
import {font} from "../../../components/globalstyle/Common";

export const Number = () => {
    return (
        <StyledNumber>
            Call me: <br/>
            <TelephoneLink>
                +375295997429
            </TelephoneLink>
        </StyledNumber>
    );
};
const StyledNumber = styled.div`
  ${font({weight:600, Fmax: 22, Fmin: 16,})}
  `
const TelephoneLink = styled.a.attrs(()=>({
    href: 'tel:+375295997429'
}))``