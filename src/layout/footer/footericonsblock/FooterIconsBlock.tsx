import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../components/globalstyle/Theme";
type SocialBlockPropsType = {
    gap?: string
}

export const FooterIconsBlock = () => {
    return (

        <SocialLinkBlock gap={'35px'}>
            <StyledItem>
                <StyledLink href="">
                    <Icon iconId={'footerGitHub'} width={'35'} height={'35'}
                          viewBox={'0 0 35 35'}/>
                </StyledLink>
            </StyledItem>
            <StyledItem>
                <StyledLink href="">
                    <Icon iconId={'footerLinkedIn'} width={'35'} height={'35'}
                          viewBox={'0 0 35 35'}/>
                </StyledLink>
            </StyledItem>
            <StyledItem>
                <StyledLink href="">
                    <Icon iconId={'footerTelegram'} width={'40'} height={'34'}
                          viewBox={'0 0 40 34'}/>
                </StyledLink>
            </StyledItem>
        </SocialLinkBlock>

    );
};
export const SocialLinkBlock = styled.ul<SocialBlockPropsType>`
  display: flex;
  gap: ${props => props.gap || '0px'};
  align-items: center;
  height: 35px;
  @media ${theme.media.tablet}{
    display: none;
  }
  
`
export const StyledItem = styled.li`
    height: 100%;
  
  `
export const StyledLink = styled.a.attrs(()=>({
    target: '_blank'
}))`
    height: 100%;
  display: inline-block;
`