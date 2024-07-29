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
        description: 'I started learning front-end development, and also began studying at udemy and IT incubator this year',
        year: '2021'
    },
    {
        description: 'I have completed my studies at the IT incubator and started looking for my first job',
        year: '2022'
    },
    {
        description: 'I found my first job and started working on a project and completing my first tasks.',
        year: '2023'
    },
    {
        description: 'I continue to improve my skills and learn something new',
        year: '2024'
    },


]
