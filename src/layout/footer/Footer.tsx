import React from 'react';
import styled from "styled-components";
import {Email} from "./emailblock/Email";
import {Number} from "./numberblock/Number";
import {IconsBlock} from "../../components/IconsBlock";
import {FooterIconsBlock} from "./footericonsblock/FooterIconsBlock";

export const Footer = () => {
    return (
        <StyledFooter>
            <Number/>
            <Email/>
            <FooterIconsBlock/>
        </StyledFooter>
    );
};
const StyledFooter = styled.section`
  background-color: #0F1624;`
