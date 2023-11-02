import styled from "styled-components";
import {font} from "../../components/globalstyle/Common";
import {theme} from "../../components/globalstyle/Theme";

type ProgressValuePropsType = {
    progressValue: string
}

//Technologies section styles
const Technologies = styled.section`
  display: flex;
  min-height: 80vh;
`

//Progress block styles
const ProgressBlock = styled.div`
    width: 100%;
`

//Additional styles
const Addition = styled.h2`
  ${font({weight:600, Fmax: 44, Fmin: 36,})}
  margin: 100px 0 70px 0;
  
 display: flex;
  text-align: center;
  
`

//Progress block technologies name
const TechnologyName = styled.h3`
  color: #FFF;
  font-size: 24px;
  font-weight: 600;
  margin-left: 25px;
`

//Progress line styles
const ProgressLine = styled.div`
  height: 18px;
  border-radius: 83px;
  background-color: #162950;
  margin-bottom: 25px;
`

const Progress = styled.div<ProgressValuePropsType>`
  width: ${props => props.progressValue || 'auto'};
  background: ${theme.colors.accent};
  height: 100%;
  border-radius: 83px;
`


export const S = {
    Technologies,
    ProgressBlock,
    Addition,
    TechnologyName,
    Progress,
    ProgressLine
}