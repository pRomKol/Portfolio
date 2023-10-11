import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {IconsBlock} from "../../components/IconsBlock";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <IconsBlock/>
        </StyledHeader>

    );
};
const StyledHeader = styled.header`
  background-color: #0F1624;
  display: flex;
`

