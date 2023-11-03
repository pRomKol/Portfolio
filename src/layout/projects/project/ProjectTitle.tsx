import React from 'react';
import {StyledProjectsPropsType} from "../../../components/titles/SectionTitle";
import { S } from '../Projects_Styles';

export const ItemTitle:React.FC<StyledProjectsPropsType> = ({value}) => {
    return (
        <S.ProjectTitle>
            {value}
        </S.ProjectTitle>
    );
};

