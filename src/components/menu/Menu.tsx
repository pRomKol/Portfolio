import React from 'react';
import styled from "styled-components";

 export const Menu = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Technologies</a>
                </li>
                <li>
                    <a href="">About me</a>
                </li>
            </ul>
        </StyledNav>
    );
};
const StyledNav= styled.nav`
    uL{
      display: flex;
      gap: 30px;
    }
 
`







