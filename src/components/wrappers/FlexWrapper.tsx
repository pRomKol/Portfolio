import styled from "styled-components";
export type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    alignCustom?: string
    wrap?: string
    border?: string
    radius?: string
    gap?: string
}
export const Wrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.alignCustom || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  border:  ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  gap: ${props => props.gap || '0px'};
  width: 100%;
  height: 100%;
  position: relative;
`
