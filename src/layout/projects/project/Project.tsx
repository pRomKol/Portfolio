import React, {FC} from 'react';
import styled from "styled-components";

import {Button} from "../../../components/button/Button";
import {ItemTitle} from "./ProjectTitle";
import {ProjectDescription} from "./ProjectDiscription";


type ProjectsProps = {
    title: string
    imgSrc: string
    description: string
}

//export const Project = (props: ProjectsProps) => {
export const Project: FC<ProjectsProps> = ({title, description, imgSrc}) => {
    return (

        <StyledItem >
            <ProjectWrapper>
                <Image src={imgSrc}/>
                <ItemTitle value={title}/>
                <ProjectDescription projectValue={description}/>
                <Button/>
            </ProjectWrapper>
        </StyledItem>

    );
};


const StyledItem = styled.div`
display: flex;
border: 1px solid  #A39D9D;
border-radius: 50px 0;`
const Image = styled.img`
  width: 500px;
  height: 280px;
  border-radius: 24px 8px 8px 8px;
  object-fit: fill;
  
`
const ProjectWrapper = styled.div`
  padding: 25px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  height: 670px;`