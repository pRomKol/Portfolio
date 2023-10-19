import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {IconsBlock} from "../../components/IconsBlock";
import {Container} from "../../components/Container";
import {Wrapper} from "../../components/wrappers/FlexWrapper";
import {HeaderMenu} from "./menu/HeaderMenu";

export const items = ['Projects', 'Technologies', 'About me']
export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <Wrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItem={items}/>
                    <IconsBlock/>
                </Wrapper>
            </Container>
        </StyledHeader>

    );
};
const StyledHeader = styled.header`
  background-color: #0F1624;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`

