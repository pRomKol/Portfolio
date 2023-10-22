import {Project} from "./project/Project";
import {SectionTitle} from "../../components/titles/SectionTitle";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import styled from "styled-components";
import image from "../../sources/Projects.jpg"
import {Container} from "../../components/Container";

export const Projects = () => {


    return (
        <StyledProjects>
            <Container>
                <SectionTitle value={'Projects'}/>
                <Wrapper wrap={'wrap'} gap={'60px 34px'}>
                    {/*<Project title={'Project 1'} imgSrc={image} description={'A'}/>*/}
                    {/*<Project title={'Project 2'} imgSrc={image} description={'B'}/>*/}
                    {/*<Project title={'Project 3'} imgSrc={image} description={'C'}/>*/}
                    {/*<Project title={'Project 4'} imgSrc={image} description={'D'}/>*/}
                    {projectsArray.map((project) => (
                        <Project title={project.title} description={project.description} imgSrc={project.imgSrc}/>
                    ))}
                </Wrapper>
            </Container>

        </StyledProjects>
    );
};
const StyledProjects = styled.section`
 padding-bottom: 140px;
`


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