import React from 'react';
import {Title} from "../../components/titles/Title";
import {ShortBiography} from "./shortbiography/ShortBiography";
import {Button} from "../../components/button/Button";
import photo from "../../sources/MyPhoto.jpg"
import {Container} from "../../components/Container";
import mySvg from '../../sources/test.svg';
import {S} from './Main_Styles'
import styled from "styled-components";
import {theme} from "../../components/globalstyle/Theme";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.MainWrapper>
                    <S.Content id='aboutMe'>
                        <Title/>
                        <ShortBiography/>
                        <a href="#projects">
                            <Button primary>
                                Let`s begin
                            </Button>
                        </a>
                    </S.Content>
                    <S.BackgroundImg src={mySvg} alt={'Avatar Background'}/>
                    <PhotoWrapper>
                        <S.Photo src={photo}/>
                    </PhotoWrapper>
                </S.MainWrapper>
            </Container>
        </S.Main>
    );
};

const PhotoWrapper = styled.div`
  position: relative;
  color: #FFF;
  background: #000;
  background-clip: padding-box;
  border-radius: 50px 0;
  @media ${theme.media.laptop} {
    margin-top: 30px;
  }

  &::before {
    content: "";

    position: absolute;
    inset: 0;
    border-radius: 50px 0;
    padding: 6px;
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
  }`