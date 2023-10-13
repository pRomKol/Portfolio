import React, {FC} from 'react';
import styled from "styled-components";

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
  background-color: #fff;
  border-radius: 83px;
`
const StyledProgress = styled.div<ProgressValuePropsType>`
  width: ${props => props.progressValue || 'auto'};
  background-color: black;
  height: 100%;
  border-radius: 83px;
`