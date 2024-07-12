import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/globalstyle/Theme";
import {Icon} from "../../../components/icon/Icon";


export const SkillsIconsBlock = () => {
    return (
        <StyledSkillIconsBlock>
            <Icon iconId={'gitLogo'} height={'100'} width={'100'} viewBox={'0 0 100 100'}/>
            <Icon iconId={'gitHubSkill'} height={'100'} width={'100'} viewBox={'0 0 100 100'}/>
            <Icon iconId={'figmaLogo'} height={'100'} width={'100'} viewBox={'0 0 100 100'}/>
            <Icon iconId={'reactLogo'} height={'100'} width={'100'} viewBox={'0 0 100 100'}/>
        </StyledSkillIconsBlock>
    );
};
const StyledSkillIconsBlock = styled.div`
  display: flex;
  gap: 50px;
@media ${theme.media.laptop}{
  gap: 25px;
}
  @media screen and (max-width: 400px){
    flex-direction: column;
  }
`
