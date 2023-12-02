import {Icon} from "./icon/Icon";
import {S} from "./IconsBlock_Styles"
import React from "react";



export const IconsBlock:React.FC = () => {
    return (
        <S.SocialLinkBlock gap={'25px'}>
            <S.Item>
                <S.Link href='https://github.com/pRomKol'>
                    <Icon iconId={'HeaderGitHub'} viewBox={'0 0 33 33'} width={'33'} height={'33'}/>
                </S.Link>
            </S.Item>

            <S.Item>
                <S.Link href=''>
                    <Icon iconId={'HeaderLinkedIn'} viewBox={'0 0 33 33'} width={'33'} height={'33'}/>
                </S.Link>
            </S.Item>

            <S.Item>
                <S.Link href=''>
                    <Icon iconId={'HeaderTelegram'} viewBox={'0 0 35 30'} width={'35'} height={'30'}/>
                </S.Link>
            </S.Item>

        </S.SocialLinkBlock>
    );
};


