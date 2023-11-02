import styled from "styled-components";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {theme} from "../../components/globalstyle/Theme";

//Section styles
const Experience = styled.section`
  display: flex;
  min-height: 50vh;
`

//Experience block styles
const ExperienceBlocks = styled(Wrapper)`
  height: auto;
  --items-count: 4;
  gap: var(--gap);
  --gap: 32px;
  --block-max-width: 260px;
  flex-direction: row;
  position: relative;
  
  @media ${theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  &::after {
    display: none;
    @media ${theme.media.tablet} {
      content: '';
      background: ${theme.colors.accent};
      position: absolute;
      height: 10px;
      transform: rotate(-90deg);
      width: 397px;
      display: block;
      left: -193px;
      top: 240px;
    }
  }
  &::before {
    @media ${theme.media.tablet} {
      display: none;
    }
    content: '';
    background: ${theme.colors.accent};
    position: absolute;
    width: calc(100% - var(--offset) * 2);
    height: 10px;
    --offset: min(calc((100% - (var(--items-count) - 1) * var(--gap)) / var(--items-count) / 2), var(--block-max-width) / 2);
    left: var(--offset);
    top: 40px;

  }
`

//Experience block styles
const ExperienceBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
@media ${theme.media.tablet} {
  display: flex;
  align-items: center;
  flex-direction: row;
}
`

//Years styles
const Years = styled.h2`
  margin: 0;
  position: relative;
  @media ${theme.media.tablet}{
    margin-left: 40px;
  }
&::before{
  content:'';
  width: 25px;
  height: 25px;
  border-radius: 100%;
  position: absolute;
  background-color: #fff;
  transform: translateX(50%);
  top: 32px;
  z-index: 99;
  @media ${theme.media.tablet}{
    transform: translateX(-47px);
    top: 4px;
  }
}`

//Experience description
const ExperienceDescription = styled.div`

  display: flex;
  text-align: center;
  justify-content: center;
  overflow-wrap: break-word;
  margin-top: 40px;
@media ${theme.media.tablet} {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 0 0 40px;
}
`
export const S = {
    Experience,
    ExperienceBlocks,
    ExperienceBlock,
    Years,
    ExperienceDescription
}