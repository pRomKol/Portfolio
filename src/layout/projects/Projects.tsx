import {Project} from "./project/Project";
import {SectionTitle} from "../../components/titles/SectionTitle";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import styled from "styled-components";
import image from "../../Projects.jpg"

export const Projects = () => {


    return (
        <StyledProjects>
            <SectionTitle value={'Projects'}/>
            <Wrapper justify={'center'} wrap={'wrap'} gap={'60px'}>
                {/*<Project title={'Project 1'} imgSrc={image} description={'A'}/>*/}
                {/*<Project title={'Project 2'} imgSrc={image} description={'B'}/>*/}
                {/*<Project title={'Project 3'} imgSrc={image} description={'C'}/>*/}
                {/*<Project title={'Project 4'} imgSrc={image} description={'D'}/>*/}
                {projectsArray.map((project) => (
                    <Project title={project.title} description={project.description} imgSrc={project.imgSrc}/>
                ))}
            </Wrapper>
        </StyledProjects>
    );
};
const StyledProjects = styled.section`
 
  min-height: 100vh;
`


const projectsArray = [
    {
        title: 'pr 1',
        imgSrc: image,
        description: 'A'
    },
    {
        title: 'pr 2',
        imgSrc: image,
        description: 'B'
    },
    {
        title: 'pr 3',
        imgSrc: image,
        description: 'C'
    },
    {
        title: 'pr 4',
        imgSrc: image,
        description: 'D'
    },

]