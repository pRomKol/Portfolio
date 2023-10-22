import React from 'react';
import styled from "styled-components";
import {Email} from "./emailblock/Email";
import {Number} from "./numberblock/Number";
import {IconsBlock} from "../../components/IconsBlock";
import {FooterIconsBlock} from "./footericonsblock/FooterIconsBlock";
import {Container} from "../../components/Container";
import {Wrapper} from "../../components/wrappers/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Wrapper justify={'space-between'}>
                    <Number/>
                    <Email/>
                    <FooterIconsBlock/>
                </Wrapper>
            </Container>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  background-color: #0F1624;`
