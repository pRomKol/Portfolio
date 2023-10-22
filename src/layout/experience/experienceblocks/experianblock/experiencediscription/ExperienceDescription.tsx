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
max-width: 260px;
  display: flex;
  text-align: center;
  justify-content: center;
  overflow-wrap: break-word;
  margin-top: 20px;
`