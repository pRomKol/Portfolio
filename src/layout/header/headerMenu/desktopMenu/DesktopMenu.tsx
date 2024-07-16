import React from 'react';
import {S} from '../../HeaderMenu_Styles'
import {Menu} from "../../menu/Menu";
import {MenuItems} from "../../Header";

export const DesktopMenu:React.FC<{ menuItem: Array<MenuItems> }> = (props: { menuItem: Array<MenuItems> }) => {
    return (
        <S.DesktopNav>
            <Menu menuItem={props.menuItem}/>
        </S.DesktopNav>
    );
};


