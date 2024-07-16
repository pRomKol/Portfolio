import React, {FC} from 'react';
import {Button} from "../../../components/button/Button";
import {ItemTitle} from "./ProjectTitle";
import {ProjectDescription} from "./ProjectDiscription";
import { S } from '../Projects_Styles';


type ProjectsProps = {
    title: string
    imgSrc: string
    description: string
    href?: string
}


export const Project: FC<ProjectsProps> = ({title, description, imgSrc, href}) => {
    return (
        <S.Project>
            <S.Image src={imgSrc}/>
            <ItemTitle value={title}/>
            <ProjectDescription projectValue={description}/>
            <a href={href}>
                <Button outlined>
                    Look it Up
                </Button>
            </a>
        </S.Project>
    );
};



