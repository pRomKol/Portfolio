import styled from "styled-components";
type  GridWrapperPropsType = {
    columns: string
    rows: string
    gap?: string
}
const GridWrapper = styled.div<GridWrapperPropsType>`
  display: grid;
  grid-template-columns: ${props=>props.columns};
  grid-template-rows: ${props=>props.rows}; 
  gap: ${props=>props.gap ||'0px'};;
`