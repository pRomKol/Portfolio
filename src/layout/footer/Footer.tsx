import React from 'react';
import styled from "styled-components";
import {Email} from "./emailblock/Email";
import {Number} from "./numberblock/Number";
import {FooterIconsBlock} from "./footericonsblock/FooterIconsBlock";
import {Container} from "../../components/Container";
import {theme} from "../../components/globalstyle/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
                    <Number/>
                    <Email/>
                    <FooterIconsBlock/>
                </FooterWrapper>
            </Container>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  background-color: #0F1624;
  padding: 20px 0;
`
const FooterWrapper = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${theme.media.tablet}{
    justify-content: space-around;  
  }
`
