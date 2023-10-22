import React, {FC} from 'react';
import styled from "styled-components";
import {theme} from "../../../../components/globalstyle/Theme";

type ProgressValuePropsType = {
    progressValue: string


}
export const ProgressLine: FC<ProgressValuePropsType> = ({progressValue}) => {
    return (
        <StyledProgressLine>
            <StyledProgress progressValue={progressValue}/>
        </StyledProgressLine>
    );
};

const StyledProgressLine = styled.div`
  width: 900px;
  height: 18px;
  border-radius: 83px;
  background-color: #162950;
  margin-bottom: 25px;
`
const StyledProgress = styled.div<ProgressValuePropsType>`
  width: ${props => props.progressValue || 'auto'};
  background: ${theme.colors.accent};


  height: 100%;
  border-radius: 83px;
`