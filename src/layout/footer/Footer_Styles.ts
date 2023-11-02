import styled from "styled-components";
import {theme} from "../../components/globalstyle/Theme";

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
export const S = {
    Footer,
    FooterWrapper
}