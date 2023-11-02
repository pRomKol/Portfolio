import {ProgressBlock} from "./progressblock/ProgressBlock";
import {S} from '../Technologies_Styles'
import React from "react";

export const ProgressBlocks:React.FC = () => {
    return (
        <S.ProgressBlock>
            {progressBlockArray.map((block) => ( <ProgressBlock progress={block.progress} title={block.title}/>))}
        </S.ProgressBlock>
    );
};


const progressBlockArray = [
    {
        progress: '78%',
        title: 'Html'
    },
    {
        progress: '69%',
        title: 'Css & Sass'
    },
    {
        progress: '60%',
        title: 'React'
    },
    {
        progress: '69%',
        title: 'Styled components'

    }]
