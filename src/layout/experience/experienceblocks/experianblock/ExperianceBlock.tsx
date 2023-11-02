import React, {FC} from 'react';
import {Years} from "./yearblock/Years";
import {ExperienceDescription} from "./experiencediscription/ExperienceDescription";
import {S} from '../../Experince_Styles'

type ExperienceBlockPropsType = {
    year: string
    description: string
}
export const ExperienceBlock: FC<ExperienceBlockPropsType> = ({year, description}) => {
    return (
        <S.ExperienceBlock>
            <Years value={year}/>
            <ExperienceDescription value={description}/>
        </S.ExperienceBlock>
    );
};



