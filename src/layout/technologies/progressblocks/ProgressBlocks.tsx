
import {ProgressBlock} from "./progressblock/ProgressBlock";

export const ProgressBlocks = () => {
    return (
        <div>
            {progressBlockArray.map((block) => ( <ProgressBlock progress={block.progress} title={block.title}/>))}
        </div>
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
        progress: '77%',
        title: 'Styled components'

    }]
