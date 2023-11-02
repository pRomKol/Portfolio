import React from 'react';
import {S} from '../Projects_Styles'
type DescriptionPropsType = {
    value?: string
    projectValue?: string
}
export const ProjectDescription = (props: DescriptionPropsType) => {
    return (
        <S.ProjectDescription>
            {props.projectValue}
        </S.ProjectDescription>
    );
};


