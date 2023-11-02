import React, {FC} from 'react';
import {S} from '../../Technologies_Styles'

type ProgressValuePropsType = {
    progressValue: string


}
export const ProgressLine: FC<ProgressValuePropsType> = ({progressValue}) => {
    return (
        <S.ProgressLine>
            <S.Progress progressValue={progressValue}/>
        </S.ProgressLine>
    );
};

