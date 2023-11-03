import styled from "styled-components";
import {theme} from "./globalstyle/Theme";

type SocialBlockPropsType = {
    gap?: string
}
export const SocialLinkBlock = styled.ul<SocialBlockPropsType>`
  display: flex;
  gap: ${props => props.gap || '0px'};
  align-items: center;
  height: 35px;
  @media ${theme.media.tablet}{
    display: none;
  }
`
export const Item = styled.li`
    height: 100%;
`
export const Link = styled.a.attrs(()=>({
    target: '_blank'
}))`
    height: 100%;
  display: inline-block;
`
export const S ={
    Link,
    SocialLinkBlock,
    Item
}