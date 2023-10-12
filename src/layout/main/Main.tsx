import React from 'react';
import styled from "styled-components";
import {Title} from "../../components/titles/Title";
import {ShortBiography} from "./shortbiography/ShortBiography";
import {Button} from "../../components/button/Button";
import photo from "../../sources/Rectangle 6.jpg"
import {Wrapper, WrapperPropsType} from "../../components/FlexWrapper";

export const Main = (props: WrapperPropsType) => {
    return (
        <StyledMain>
            <Wrapper direction={'column'} justify={'space-around'}>
                <Title/>
                <ShortBiography/>
                <Button/>
            </Wrapper>

            <Wrapper>
                <Photo src={photo}/>
            </Wrapper>
        </StyledMain>
    );
};


const StyledMain = styled.main`
  background-color: #0F1624;
  display: flex;
  min-height: 100vh;`
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const PhotoWrapper = styled.div`
`
const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
`

