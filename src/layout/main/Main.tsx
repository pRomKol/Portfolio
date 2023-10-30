import React from 'react';
import styled from "styled-components";
import {Title} from "../../components/titles/Title";
import {ShortBiography} from "./shortbiography/ShortBiography";
import {Button} from "../../components/button/Button";
import photo from "../../sources/clipdrop.webp"
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {Container} from "../../components/Container";

import mySvg from '../../sources/test.svg';
import {theme} from "../../components/globalstyle/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper alignCustom={'center'} justify={'space-around'} wrap={'wrap'}>
                    <StyledContent>
                        <Title/>
                        <ShortBiography/>
                        <Button primary>
                            Let`s begin
                        </Button>
                    </StyledContent>
                    <Photo src={photo}/>
                    {/*<StyledBackgroundImg>*/}
                        <StyledBackground src={mySvg} alt={'avatarBackground'}/>
                    {/*</StyledBackgroundImg>*/}
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
@media ${theme.media.tablet}{
  padding: 50px 0;
  align-items: start;
  min-height: auto;
}
`

const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0;
  border: 5px solid #8643DC;
  z-index: 1;
  position: relative;
  @media ${theme.media.tablet}{
    width: 310px;
    height: 380px;
    margin-top: 30px;
  }
`



const StyledBackground = styled.img`
  position: absolute;
  //right: -275px;
  //top: 50px;
  @media ${theme.media.tablet}{
    width: 300px;
    height: 300px;
  }`

