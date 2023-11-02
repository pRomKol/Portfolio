import React from 'react';
import {ExperienceBlock} from "./experianblock/ExperianceBlock";
import {S} from '../Experince_Styles'


export const ExperienceBlocks = () => {
    return (
        <S.ExperienceBlocks alignCustom={'center'} justify={'space-between'}>
            {experienceArray.map((exp) => (<ExperienceBlock year={exp.year} description={exp.description}/>))}
        </S.ExperienceBlocks>
    );
}

const experienceArray =  [
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.',
        year: '1999'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.',
        year: '2000'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.',
        year: '2001'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.',
        year: '2002'
    },


]
