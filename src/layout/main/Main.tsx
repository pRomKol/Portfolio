import React from 'react';
import styled from "styled-components";
import {Title} from "../../components/titles/Title";
import {ShortBiography} from "./shortbiography/ShortBiography";
import {Button} from "../../components/button/Button";
import photo from "../../sources/clipdrop.webp"
import {Container} from "../../components/Container";
import mySvg from '../../sources/test.svg';
import {theme} from "../../components/globalstyle/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainWrapper>
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
                </MainWrapper>
            </Container>
        </StyledMain>
    );
};

const MainWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${theme.media.laptop}{
    flex-direction: column;
  }
`

const StyledContent = styled.div`
  justify-content: start;
  @media ${theme.media.laptop} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
const StyledMain = styled.section`
  min-height: 100vh;
  padding: 125px 0;
  display: flex;
  align-items: center;
@media ${theme.media.laptop}{
  padding: 50px 0;
  align-items: start;
  min-height: auto;
}
`

const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border: 5px solid;
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-image: repeating-linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%) 1;
  border-radius: 50px 0;
  z-index: 1;
  position: relative;
  @media ${theme.media.laptop}{
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

