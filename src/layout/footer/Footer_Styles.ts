import styled from "styled-components";
import {theme} from "../../components/globalstyle/Theme";
import {font} from "../../components/globalstyle/Common";


//Footer section styles
const Footer = styled.footer`
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

const Number = styled.div`
  ${font({weight:600, Fmax: 22, Fmin: 16,})}
  `
const TelephoneLink = styled.a.attrs(()=>({
    href: 'tel:+375295997429'
}))``

//Footer icons block styles

export const S = {
    Footer,
    FooterWrapper,
    Number,
    TelephoneLink,


}