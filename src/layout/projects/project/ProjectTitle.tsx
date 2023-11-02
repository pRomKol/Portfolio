import React from 'react';
import {StyledProjectsPropsType} from "../../../components/titles/SectionTitle";
import { S } from '../Projects_Styles';

export const ItemTitle = (props:StyledProjectsPropsType) => {
    return (
        <S.ProjectTitle>
            {props.value}
        </S.ProjectTitle>
    );
};

