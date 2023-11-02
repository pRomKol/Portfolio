import React, {FC} from 'react';
import { S } from '../../../Experince_Styles';
type YearsPropsType = {
    value: string
}
export const Years: FC<YearsPropsType> = ({value}) => {
    return (
        <S.Years>
            {value}
        </S.Years>
    );
};


