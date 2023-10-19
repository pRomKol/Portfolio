import React from 'react';
import styled from "styled-components";

 export const Menu = (props:{menuItem: Array<string>}) => {
    return (
        <StyledNav>
            <ul>
                {props.menuItem.map((item, index)=> {
                    return <li key={index}>
                        <a href=''>{item}</a>
                    </li>
                })}
            </ul>
        </StyledNav>
    );
};
const StyledNav= styled.nav`
    ul{
      display: flex;
      gap: 30px;
    }
 
`







