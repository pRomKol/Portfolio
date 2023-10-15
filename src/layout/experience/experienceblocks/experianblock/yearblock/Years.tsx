import React, {FC} from 'react';
import styled from "styled-components";
type YearsPropsType = {
    value: string
}
export const Years: FC<YearsPropsType> = ({value}) => {
    return (
        <StyledYears>
            {value}
        </StyledYears>
    );
};
const StyledYears = styled.h2`
  margin: 0;`

