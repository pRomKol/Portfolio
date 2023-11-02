import React, {FC} from 'react';
import {S} from '../../../Experince_Styles'
type ExperienceDescriptionPropsType = {
    value: string
}
export const ExperienceDescription: FC<ExperienceDescriptionPropsType> = ({value}) => {
    return (
        <S.ExperienceDescription>
            {value}
        </S.ExperienceDescription>
    );
};

