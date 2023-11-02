import {Menu} from "../../menu/Menu";
import React from "react";
import {S} from "../../HeaderMenu_Styles"


export const MobileMenu:React.FC<{ menuItem: Array<string> }> = (props: { menuItem: Array<string> }) => {
    return (
        <S.HeaderNav>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobilePopup isOpen={false}>
                <Menu menuItem={props.menuItem}/>
            </S.MobilePopup>
        </S.HeaderNav>
    );
};


