import {Icon} from "./icon/Icon";
import {SocialLinkBlock, StyledIconLink} from "../layout/footer/footericonsblock/FooterIconsBlock";
import styled from "styled-components";






export const IconsBlock = () => {
    return (
        <SocialLinkBlock>
            <HeaderStyledIconLink><a href="https://github.com/pRomKol" target={'_blank'}><Icon iconId={'HeaderGitHub'} viewBox={'0 0 33 33'} width={'33'} height={'33'}/></a></HeaderStyledIconLink>
            <HeaderStyledIconLink><a href=""><Icon iconId={'HeaderLinkedIn'} viewBox={'0 0 33 33'} width={'33'} height={'33'}/></a></HeaderStyledIconLink>
            <HeaderStyledIconLink><a href=""><Icon iconId={'HeaderTelegram'} viewBox={'0 0 35 30'} width={'35'} height={'30'}/></a></HeaderStyledIconLink>
        </SocialLinkBlock>
    );
};
const HeaderStyledIconLink = styled(StyledIconLink)`
margin-left: 25px`
