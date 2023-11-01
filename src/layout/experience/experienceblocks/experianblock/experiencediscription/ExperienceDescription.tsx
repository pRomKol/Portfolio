import React, {FC} from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/globalstyle/Theme";
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

  display: flex;
  text-align: center;
  justify-content: center;
  overflow-wrap: break-word;
  margin-top: 40px;
@media ${theme.media.tablet} {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 0 0 40px;
}
`