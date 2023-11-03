import {Menu} from "../../menu/Menu";
import React, {useState} from "react";
import {S} from "../../HeaderMenu_Styles"
import {IconsBlock} from "../../../../components/IconsBlock";


export const MobileMenu:React.FC<{ menuItem: Array<string> }> = (props: { menuItem: Array<string> }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }
    return (
        <S.HeaderNav>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick }>
                <span></span>
            </S.BurgerButton>
            <S.MobilePopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu menuItem={props.menuItem}/>
                <IconsBlock/>
            </S.MobilePopup>
        </S.HeaderNav>
    );
};


