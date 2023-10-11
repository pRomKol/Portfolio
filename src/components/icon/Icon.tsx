import React from 'react';
import icons from '../../sources/Sprite.svg'

type IconsPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string
}
export const Icon = (props: IconsPropsType) => {
    return (
        <svg width={props.width || "185"}  height={props.height || "48"} viewBox={props.viewBox || "0 0 185 48"} fill={props.fill || "none"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icons}#${props.iconId}`}/>
        </svg>

        );
};

