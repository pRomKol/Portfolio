import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
type SocialBlockPropsType = {
    gap?: string
}

export const FooterIconsBlock = () => {
    return (

        <SocialLinkBlock gap={'35px'}>
            <StyledIcon>
                <StyledLink href="">
                    <Icon iconId={'footerGitHub'} width={'35'} height={'35'}
                          viewBox={'0 0 35 35'}/>
                </StyledLink>
            </StyledIcon>
            <StyledIcon>
                <StyledLink href="">
                    <Icon iconId={'footerLinkedIn'} width={'35'} height={'35'}
                          viewBox={'0 0 35 35'}/>
                </StyledLink>
            </StyledIcon>
            <StyledIcon>
                <StyledLink href="">
                    <Icon iconId={'footerTelegram'} width={'40'} height={'34'}
                          viewBox={'0 0 40 34'}/>
                </StyledLink>
            </StyledIcon>
        </SocialLinkBlock>

    );
};
export const SocialLinkBlock = styled.ul<SocialBlockPropsType>`
  display: flex;
  gap: ${props => props.gap || '0px'}
`
export const StyledIcon = styled.li`
  `
export const StyledLink = styled.a`
target: '_blank'`