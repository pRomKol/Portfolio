import React from 'react';
import {ExperienceBlock} from "./experianblock/ExperianceBlock";
import {S} from '../Experince_Styles'


export const ExperienceBlocks = () => {
    return (
        <S.ExperienceBlocks alignCustom={'center'} justify={'space-between'}>
            {experienceArray.map((exp, index) => (
                <ExperienceBlock key={index}
                                 year={exp.year}
                                 description={exp.description}/>
            ))}
        </S.ExperienceBlocks>
    );
}

const experienceArray = [
    {
        description: 'I started learning front-end development, and also began studying at an IT incubator this year',
        year: '2021'
    },
    {
        description: 'I have completed my studies at the IT incubator and started looking for my first job',
        year: '2022'
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
