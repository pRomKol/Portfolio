import {Project} from "./project/Project";
import {SectionTitle} from "../../components/titles/SectionTitle";
import image from "../../sources/Projects.jpg"
import {Container} from "../../components/Container";
import {S} from './Projects_Styles'
import React from "react";

export const Projects: React.FC = () => {
    return (
        <S.Projects id='projects'>
            <Container>
                <SectionTitle value={'Projects'}/>
                <S.ProjectsWrapper>
                    {projectsArray.map((project, index) => (
                        <Project key={index}
                                 title={project.title}
                                 description={project.description}
                                 imgSrc={project.imgSrc}
                                 href={project.href}/>

                    ))}
                </S.ProjectsWrapper>
            </Container>
        </S.Projects>
    );
};


const projectsArray = [
    {
        title: 'Task list',
        imgSrc: image,
        description: 'This is a tasks list where you can set tasks and track their completion, but in order to do this, you need to register :) You can use a common password and login to view the functionality',
        href: 'https://check-list-eight.vercel.app/'

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