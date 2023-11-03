import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from '../../../components/IconsBlock_Styles'

export const FooterIconsBlock:React.FC = () => {
    return (

        <S.SocialLinkBlock gap={'35px'}>
            <S.Item>
                <S.Link href="">
                    <Icon iconId={'footerGitHub'} width={'35'} height={'35'}
                          viewBox={'0 0 35 35'}/>
                </S.Link>
            </S.Item>
            <S.Item>
                <S.Link href="">
                    <Icon iconId={'footerLinkedIn'} width={'35'} height={'35'}
                          viewBox={'0 0 35 35'}/>
                </S.Link>
            </S.Item>
            <S.Item>
                <S.Link href="">
                    <Icon iconId={'footerTelegram'} width={'40'} height={'34'}
                          viewBox={'0 0 40 34'}/>
                </S.Link>
            </S.Item>
        </S.SocialLinkBlock>

    );
};
