import {Project} from "./project/Project";
import {SectionTitle} from "../../components/titles/SectionTitle";
import image from "../../sources/Projects.jpg"
import {Container} from "../../components/Container";
import {S} from './Projects_Styles'
import React from "react";

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle value={'Projects'}/>
                <S.ProjectsWrapper>
                    {projectsArray.map((project, index) => (
                        <Project key={index}
                                 title={project.title}
                                 description={project.description}
                                 imgSrc={project.imgSrc}/>
                    ))}
                </S.ProjectsWrapper>
            </Container>
        </S.Projects>
    );
};


const projectsArray = [
    {
        title: 'PROJECT 1',
        imgSrc: image,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'PROJECT 2',
        imgSrc: image,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'PROJECT 3',
        imgSrc: image,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'PROJECT 4',
        imgSrc: image,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

]