import React, {FC} from 'react';
import styled from "styled-components";
import {Wrapper} from "../../../components/wrappers/FlexWrapper";
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

        <StyledItem direction={'column'} align={'center'} border={'1px solid #A39D9D;'} radius={'50px 0px'}>
            <ProjectWrapper>
                <Image src={imgSrc}/>
                <ItemTitle value={title}/>
                <ProjectDescription projectValue={description}/>
                <Button/>
            </ProjectWrapper>
        </StyledItem>

    );
};


const StyledItem = styled(Wrapper)``
const Image = styled.img`
  width: 500px;
  height: 280px;
  border-radius: 24px 8px 8px 8px;
  object-fit: fill;
  margin: 25px;
`
const ProjectWrapper = styled.div`
  width: 550px;
  height: 670px;`