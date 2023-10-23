import React from 'react';
import styled from "styled-components";
import {Title} from "../../components/titles/Title";
import {ShortBiography} from "./shortbiography/ShortBiography";
import {Button} from "../../components/button/Button";
import photo from "../../sources/clipdrop.webp"
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {Container} from "../../components/Container";
import {Icon} from "../../components/icon/Icon";


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

                       <Photo src={photo}/>
                        {/*<div style={{ position: 'absolute', width: 666, height: 666, background: 'red', right: 0, top: 0}}>*/}
                        {/*</div>*/}
                        <StyledBackgroundImg>
                            <Icon iconId={'backgroundImg'} width={"668"} height={"668"} viewBox={"0 0 668 668"}/>
                        </StyledBackgroundImg>
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
  z-index: 1;
`
const StyledBackgroundImg = styled.div`
position: absolute;
right: 0;
  top: 0;
`


