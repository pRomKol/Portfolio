import React, {FC} from 'react';
import styled from "styled-components";
type ExperienceDescriptionPropsType = {
    value: string
}
export const ExperienceDescription: FC<ExperienceDescriptionPropsType> = ({value}) => {
    return (
        <StyledExperienceDescription>
            {value}
        </StyledExperienceDescription>
    );
};

const StyledExperienceDescription = styled.div`
max-width: 260px
`