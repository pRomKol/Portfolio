import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {IconsBlock} from "../../components/IconsBlock";
import {Container} from "../../components/Container";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {HeaderMenu} from "./menu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const items = ['Projects', 'Technologies', 'About me']
export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <Wrapper justify={'space-between'} alignCustom={'center'}>
                    <Logo/>
                    <HeaderMenu menuItem={items}/>
                    <MobileMenu menuItem={items}/>
                    <IconsBlock/>
                </Wrapper>
            </Container>
        </StyledHeader>

    );
};
const StyledHeader = styled.header`
  background-color: #0F1624;
  padding: 20px 0;
  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
  //z-index: 999;
`

