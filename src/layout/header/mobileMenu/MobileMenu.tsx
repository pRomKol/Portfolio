import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../components/globalstyle/Theme";

export const MobileMenu = (props: { menuItem: Array<string> }) => {
    return (
        <StyledHeaderNav>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobilePopup isOpen={false}>
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
            </MobilePopup>
        </StyledHeaderNav>
    );
};
const StyledHeaderNav = styled.nav`
display: none;
  @media ${theme.media.tablet} {
    display: block;
  }`


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
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-color: #0F1624;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 40px;
    bottom: 50px;
    ${props => props.isOpen && css<{isOpen: boolean}>`
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
      ${props => props.isOpen && css<{isOpen: boolean}>`
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
      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0px);
        width: 36px;
    `}
    }
  }`

const MenuItems = styled.ul`

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

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(3px);

      & + ${Mask} {
        transform: skewX(12deg) translateX(-3px);
      }
    }
  }`