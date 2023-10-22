import React from 'react';
import styled from "styled-components";
import {Title} from "../../components/titles/Title";
import {ShortBiography} from "./shortbiography/ShortBiography";
import {Button} from "../../components/button/Button";
import photo from "../../sources/clipdrop.webp"
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../components/globalstyle/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper alignCustom={'center'} justify={'space-between'}>
                    <StyledContent>
                        <Title/>
                        <ShortBiography/>
                        <Button/>
                    </StyledContent>
                   <StyledPhoto>
                       <Photo src={photo}/>
                   </StyledPhoto>
                </Wrapper>

            </Container>
        </StyledMain>
    );
};

const StyledContent = styled.div`
    justify-content: start;
   
`
const StyledMain = styled.section`
  min-height: 100vh;
  padding: 125px 0;
  display: flex;
  align-items: center;
  
`

const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0px;
  border: 5px solid #8643DC;
`
const StyledPhoto = styled.div`
position: relative;
 &::before {
 }`
