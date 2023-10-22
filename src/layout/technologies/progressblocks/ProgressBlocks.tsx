
import {ProgressBlock} from "./progressblock/ProgressBlock";
import styled from "styled-components";

export const ProgressBlocks = () => {
    return (
        <StyledProgressBlock>
            {progressBlockArray.map((block) => ( <ProgressBlock progress={block.progress} title={block.title}/>))}
        </StyledProgressBlock>
    );
};
const progressBlockArray = [
    {
        progress: '78%',
        title: 'Html'
    },
    {
        progress: '69%',
        title: 'Css & Sass'
    },
    {
        progress: '60%',
        title: 'React'
    },
    {
        progress: '69%',
        title: 'Styled components'

    }]
const StyledProgressBlock = styled.div`
`