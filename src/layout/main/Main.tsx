import React from 'react';
import {Title} from "../../components/titles/Title";
import {ShortBiography} from "./shortbiography/ShortBiography";
import {Button} from "../../components/button/Button";
import photo from "../../sources/clipdrop.webp"
import {Container} from "../../components/Container";
import mySvg from '../../sources/test.svg';
import {S} from './Main_Styles'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.MainWrapper>
                    <S.Content>
                        <Title/>
                        <ShortBiography/>
                        <Button primary>
                            Let`s begin
                        </Button>
                    </S.Content>
                    <S.Photo src={photo}/>
                    <S.BackgroundImg src={mySvg} alt={'Avatar Background'}/>
                </S.MainWrapper>
            </Container>
        </S.Main>
    );
};

