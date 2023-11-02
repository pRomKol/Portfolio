import styled, {css} from "styled-components";
import {theme} from "../../components/globalstyle/Theme";

const MenuItems = styled.ul`
  display: flex;
  gap: 80px;
  justify-content: center;
@media screen and (max-width: 1024px) {
  gap: 35px
}
`

const DesktopNav = styled.nav`
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

const HeaderNav = styled.nav`
`

//mobile menu

const MobilePopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(15, 22, 36, 0.8);
  z-index: 999;
display: none;
  ${props => props.isOpen && css<{isOpen: boolean}> `
  display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  //top: 0;
  //right: 0;
  width: 100px;
  height: 100px;
  background-color: rgba(15, 22, 36, 0);
  right: 0;
  top: -10px;
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      transform: translateY(-10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0px);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 26px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0px);
        width: 36px;
      `}
    }
  }`


export const S = {
    Link,
    MenuItem,
    Mask,
    MenuItems,
    HeaderNav,
    MobilePopup,
    BurgerButton,
    DesktopNav
}
