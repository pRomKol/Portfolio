import React from 'react';
import {S} from '../../HeaderMenu_Styles'
import {Menu} from "../../menu/Menu";

export const DesktopMenu:React.FC<{ menuItem: Array<string> }> = (props: { menuItem: Array<string> }) => {
    return (
        <S.DesktopNav>
            <Menu menuItem={props.menuItem}/>
        </S.DesktopNav>
    );
};


