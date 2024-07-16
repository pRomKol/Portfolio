import React from 'react';
import {S} from '../HeaderMenu_Styles'
import {MenuItems} from "../Header";

export const Menu: React.FC<{ menuItem: Array<MenuItems> }> = (props: { menuItem: Array<MenuItems> }) => {
    return (

            <S.MenuItems>
                {props.menuItem.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.Link href={item.href}>
                            {item.title}
                            <S.Mask>
                                <span>
                                    {item.title}
                                </span>
                            </S.Mask>
                            <S.Mask>
                                <span>
                                    {item.title}
                                </span>
                            </S.Mask>
                        </S.Link>
                    </S.MenuItem>
                })}
            </S.MenuItems>

    );
};
