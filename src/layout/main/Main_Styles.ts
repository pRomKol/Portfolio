import styled from "styled-components";
import {theme} from "../../components/globalstyle/Theme";

const MainWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${theme.media.laptop}{
    flex-direction: column;
  }
`

const Content = styled.div`
  justify-content: start;
  @media ${theme.media.laptop} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

const Main = styled.section`
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
  
  border-image: repeating-linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%) 1;
  border-radius: 50px 0;
  position: relative;
  z-index: 1;
  
  
  @media ${theme.media.laptop}{
    width: 310px;
    height: 380px;
    margin-top: 30px;
  }
`

const BackgroundImg = styled.img`
  position: absolute;
  right: 0;
  top: 400px;
  
  @media ${theme.media.tablet} {
    width: 300px;
    height: 300px;
  }`

export const S = {
    Main,
    MainWrapper,
    BackgroundImg,
    Photo,
    Content
}