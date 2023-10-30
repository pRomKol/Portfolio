import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}
export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) =>`
font-family: ${family || "Poppins, sans-serif"};
font-weight: ${weight || "500"};
color ${color || theme.colors.font}; 
line-height ${lineHeight || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`