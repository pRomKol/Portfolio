import React from 'react';
import {Icon, IconsPropsType} from "./Icon";

export const GitHubIcon = (props: IconsPropsType) => {
    return (
       <Icon iconId={props.xIconId} width={props.xWidth} height={props.xHeight} viewBox={props.xViewBox} />
    );
};

