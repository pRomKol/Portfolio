import React, {FC} from 'react';
import styled from "styled-components";

import {Button} from "../../../components/button/Button";
import {ItemTitle} from "./ProjectTitle";
import {ProjectDescription} from "./ProjectDiscription";
import {theme} from "../../../components/globalstyle/Theme";


type ProjectsProps = {
    title: string
    imgSrc: string
    description: string
}

//export const Project = (props: ProjectsProps) => {
export const Project: FC<ProjectsProps> = ({title, description, imgSrc}) => {
    return (
        <StyledProject>
            <Image src={imgSrc}/>
            <ItemTitle value={title}/>
            <ProjectDescription projectValue={description}/>
            <Button outlined>
                Look it Up
            </Button>
        </StyledProject>
    );
};


const Image = styled.img`
  border-radius: 24px 8px 8px 8px;
  object-fit: fill;
  width: 100%;
  
`
const StyledProject = styled.div`
  padding: 25px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  min-width: 330px;
  border: 1px solid #A39D9D;
  border-radius: 50px 0;
  width: 360px;
  flex-grow: 1;
`
