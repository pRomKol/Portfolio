import React, {FC} from 'react';
import {S} from '../../Technologies_Styles'
type TechnologyNamePropsType = {
    name: string
}
export const TechnologyName: FC<TechnologyNamePropsType>  = ({name}) => {
    return (
        <S.TechnologyName>
            {name}
        </S.TechnologyName>
    );
};

