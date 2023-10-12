import React from 'react';
import {GitHubIcon} from "./icon/GitHubIcon";
import {LinkedInIcon} from "./icon/LinkedInIcon";
import {TelegramIcon} from "./icon/TelegramIcon";
import {IconsPropsType} from "./icon/Icon";


export const IconsBlock = (props:IconsPropsType) => {
    return (
        <div>
            <GitHubIcon xIconId={'gitHubLogo'} xWidth={'33'} xHeight={'33'} xViewBox={'0 0 33 33'}/>
            <LinkedInIcon xIconId={'linkedInIcon'} xWidth={'33'} xHeight={'33'} xViewBox={'0 0 33 33'}/>
            <TelegramIcon xIconId={'telegramIcon'} xWidth={'35'} xHeight={'30'} xViewBox={'0 0 35 30'}/>
        </div>
    );
};

