import React from 'react';
import {Email} from "./emailblock/Email";
import {Number} from "./numberblock/Number";
import {FooterIconsBlock} from "./footericonsblock/FooterIconsBlock";
import {Container} from "../../components/Container";
import {S} from './Footer_Styles'

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterWrapper>
                    <Number/>
                    <Email/>
                    <FooterIconsBlock/>
                </S.FooterWrapper>
            </Container>
        </S.Footer>
    );
};
