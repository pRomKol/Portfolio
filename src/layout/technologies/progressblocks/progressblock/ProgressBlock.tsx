
import {ProgressLine} from "./ProgressLine";
import {TechnologyName} from "./TechnologyName";
import {FC} from "react";
type ProgressBlockPropsType = {
    title: string
    progress: string
}
 export const ProgressBlock: FC<ProgressBlockPropsType> = ({title,progress}) => {
    return (
        <div>
            <TechnologyName name={title} />
            <ProgressLine progressValue={progress}/>
        </div>
    );
};

