import React from 'react';
import styled from "styled-components";
import {Title} from "../../components/titles/Title";
import {ShortBiography} from "./shortbiography/ShortBiography";
import {Button} from "../../components/button/Button";
import photo from "../../sources/Rectangle 6.jpg"
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../components/globalstyle/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper justify={'space-around'} align={'center'}>
                    <div>
                        <Title/>
                        <ShortBiography/>
                        <Button/>
                    </div>
                    <Photo src={photo}/>
                </Wrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  color: ${theme.colors.font}; 
  min-height: 100vh;

`

const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
`

