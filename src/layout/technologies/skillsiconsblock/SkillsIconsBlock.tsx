import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/globalstyle/Theme";
import {Icon} from "../../../components/icon/Icon";

const iconsData = [
    {iconsId: 'gitLogo', height: '100', width: '100', viewBox: '0 0 110 110'},
    {iconsId: 'gitHubSkill', height: '100', width: '100', viewBox: '0 0 100 100'},
    {iconsId: 'figmaLogo', height: '100', width: '100', viewBox: '0 0 100 100'},
    {iconsId: 'SassLogo', height: '100', width: '100', viewBox: '0 -5 100 100'},
    {iconsId: 'JSLogo', height: '100', width: '100', viewBox: '0 0 100 100'},
    {iconsId: 'ReactLogo', height: '100', width: '100', viewBox: '0 0 120 100'},
    {iconsId: 'CSSLogo', height: '100', width: '100', viewBox: '0 0 120 120'},
    {iconsId: 'HTMLLogo', height: '100', width: '100', viewBox: '0 0 120 120'},
    {iconsId: 'RTKLogo', height: '100', width: '100', viewBox: '0 0 120 120'},
    {iconsId: 'TSLogo', height: '100', width: '100', viewBox: '0 0 100 100'},
]


export const SkillsIconsBlock = () => {
    return (
        <StyledSkillIconsBlock>
            {iconsData.map(icon => <Icon
                iconId={icon.iconsId}
                height={icon.height}
                width={icon.width}
                viewBox={icon.viewBox}/>)}
        </StyledSkillIconsBlock>
    );
};
const StyledSkillIconsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media ${theme.media.laptop} {
    gap: 25px;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`
