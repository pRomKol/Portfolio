import React from 'react';
import {S} from '../HeaderMenu_Styles'

export const Menu: React.FC<{ menuItem: Array<string> }> = (props: { menuItem: Array<string> }) => {
    return (

            <S.MenuItems>
                {props.menuItem.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.Link href=''>
                            {item}
                            <S.Mask>
                                <span>
                                    {item}
                                </span>
                            </S.Mask>
                            <S.Mask>
                                <span>
                                    {item}
                                </span>
                            </S.Mask>
                        </S.Link>
                    </S.MenuItem>
                })}
            </S.MenuItems>

    );
};
