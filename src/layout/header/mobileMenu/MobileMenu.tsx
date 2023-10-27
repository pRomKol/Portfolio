import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/globalstyle/Theme";

export const MobileMenu = (props: { menuItem: Array<string> }) => {
    return (
        <StyledHeaderNav>
            <BurgerButton>
                <span></span>
            </BurgerButton>
            <MenuItems>
                {props.menuItem.map((item, index) => {
                    return <MenuItem key={index}>
                        <Link href=''>
                            {item}
                            <Mask>
                                <span>
                                    {item}
                                </span>
                            </Mask>
                            <Mask>
                                <span>
                                    {item}
                                </span>
                            </Mask>
                        </Link>
                    </MenuItem>
                })}
            </MenuItems>
        </StyledHeaderNav>
    );
};
const StyledHeaderNav = styled.nav`
  
 @media ${theme.media.tablet}{
   display: none;
 }`
const BurgerButton = styled.button`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
span {
  display: block;
  width: 36px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 40px;
  bottom: 50px;
  &::before{
    content: '';
    display: block;
    width: 36px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 40px;
    bottom: 50px;
  }
  &::after{}
}`

const MenuItems = styled.ul`
  display: flex;
  gap: 80px;
  justify-content: center;
`

const Link = styled.a`
  font-weight: 500;
  line-height: normal;
  color: transparent`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  //outline: 1px solid red;
  color: #ffffff;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const MenuItem = styled.li`
position: relative;
&::before {
  content: '';
  display: inline-block;
  height: 2px;
  background: ${theme.colors.accent};
  position: absolute;
  top: 50%;
  left: -10px;
  right: -10px;
  z-index: 1;
  transform: scale(0%); 
}
  &:hover{
    &::before{
      transform: scale(1);
    }
  ${Mask}{
    transform: skewX(12deg) translateX(3px);
    & + ${Mask} {
    transform: skewX(12deg) translateX(-3px);
  }
  }
  }`