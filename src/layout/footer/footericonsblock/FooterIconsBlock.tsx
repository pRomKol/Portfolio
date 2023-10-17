import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";


export const FooterIconsBlock = () => {
    return (

            <SocialLinkBlock>
                <StyledIconLink><a href=""><Icon iconId={'footerGitHub'} width={'35'} height={'35'}
                                                 viewBox={'0 0 35 35'}/></a></StyledIconLink>
                <StyledIconLink><a href=""><Icon iconId={'footerLinkedIn'} width={'35'} height={'35'}
                                                 viewBox={'0 0 35 35'}/></a></StyledIconLink>
                <StyledIconLink><a href=""><Icon iconId={'footerTelegram'} width={'40'} height={'34'}
                                                 viewBox={'0 0 40 34'}/></a></StyledIconLink>
            </SocialLinkBlock>

    );
};
export const SocialLinkBlock = styled.ul`
display: flex
`
export const StyledIconLink = styled.li`
  margin-left: 35px`