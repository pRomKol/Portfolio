import React, {FC} from 'react';
import icons from '../../sources/Sprite.svg'

export type IconsPropsType = {
    iconId?: string;

    width?: string;

    height?: string;

    viewBox?: string;

    fill?: string
}
export const Icon: FC<IconsPropsType>= ({width, height, viewBox, fill,iconId}) => {
    return (
        <a href='#'>
            <svg width={width || "185"}  height={height || "48"} viewBox={viewBox || "0 0 185 48"} fill={fill || "none"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icons}#${iconId}`}/>
        </svg>
        </a>

        );
};

