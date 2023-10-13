import React from 'react';
import {GitSkillsIcon} from "./giticon/GitSkillsIcon";
import {GitHubSkillIcon} from "./githubicon/GitGubSkillsIcon";
import {FigmaSkillsIcon} from "./figmaskillsicon/FigmaSkillsIcon";


export const SkillsIconsBlock = () => {
    return (
        <div>
            <GitSkillsIcon/>
            <GitHubSkillIcon/>
            <FigmaSkillsIcon/>

        </div>
    );
};

