import {S} from './Header_Styles'
import {Logo} from "../../components/logo/Logo";
import {IconsBlock} from "../../components/IconsBlock";
import {Container} from "../../components/Container";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import React, {useEffect} from "react";

export const items = ['Projects', 'Technologies', 'About me']
export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Header>
            <Container>
                <Wrapper justify={'space-between'} alignCustom={'center'}>
                    <Logo/>
                    {width <= breakpoint ? <MobileMenu menuItem={items}/>
                                         : <DesktopMenu menuItem={items}/>}
                    <IconsBlock/>
                </Wrapper>
            </Container>
        </S.Header>

    );
};

