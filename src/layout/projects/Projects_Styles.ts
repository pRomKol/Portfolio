import styled from "styled-components";
import {theme} from "../../components/globalstyle/Theme";
import {font} from "../../components/globalstyle/Common";
//Section styles
const ProjectsWrapper = styled.div`
  display: flex;
  gap: 60px 34px;
  flex-wrap: wrap;
  @media screen and (max-width: 1184px) {
    align-items: center;
    justify-content: center;
  }
`

const Projects = styled.section`
  padding-bottom: 140px;
`


//Project styles
const Image = styled.img`
  border-radius: 24px 8px 8px 8px;
  object-fit: fill;
  width: 100%;

`

const Project = styled.div`
  padding: 25px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  min-width: 330px;
  border: 1px solid #A39D9D;
  border-radius: 50px 0;
  width: 360px;
  flex-grow: 1;
`

//Project description styles
const ProjectDescription = styled.span`
  font-size: 18px;
  margin-bottom: 50px;
  font-weight: 500;
  position: relative;

  &::before {
    content: '';
    height: 4px;
    background: ${theme.colors.accent};
    position: absolute;
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
    top: -40px;
  }
`
//Project title styles
const ProjectTitle = styled.h3`
  ${font({weight: 500, Fmax: 30, Fmin: 25,})}

  margin: 40px auto 67px auto;
  font-size: 30px;
  //margin: 40px 25px 67px 0;
  font-weight: 600;
  line-height: 88.5%;

`
export const S = {
    Projects,
    ProjectsWrapper,
    Image,
    Project,
    ProjectDescription,
    ProjectTitle
}