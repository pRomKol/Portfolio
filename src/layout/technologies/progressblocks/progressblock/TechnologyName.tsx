import React, {FC} from 'react';
import {ItemTitle} from "../../../projects/project/ProjectTitle";
type TechnologyNamePropsType = {
    name: string
}
export const TechnologyName: FC<TechnologyNamePropsType>  = ({name}) => {
    return (
        <div>
            <ItemTitle value={name}/>
        </div>
    );
};

