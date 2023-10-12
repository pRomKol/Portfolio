import React from 'react';
import styled from "styled-components";
import {Wrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";
import {ProjectTitle} from "./ProjectTitle";
import {StyledTitlesPropsType} from "../../../components/titles/SectionTitle";
import image from "../../../sources/Projects.jpg"
import {ProjectDiscription} from "./ProjectDiscription";
export const Project = (props:StyledTitlesPropsType) => {
    return (
        <Wrapper direction={'column'} align={'center'}>
            <Image src={image} />
            <ProjectTitle value={props.title}/>
            <ProjectDiscription discription ={'12312rf'}/>
            <Button/>
        </Wrapper>
    );
};


const StyledItem = styled.div``
const Image = styled.img`
  width: 500px;
  height: 280px;
`