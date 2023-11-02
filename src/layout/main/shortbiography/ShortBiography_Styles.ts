import {theme} from "../../../components/globalstyle/Theme";
import styled from "styled-components";
import {font} from "../../../components/globalstyle/Common";

const ShortBiography = styled.h2`
${font({weight:500, Fmax: 18, Fmin: 16, color: '#BCBCBC'})}
  max-width: 482px;
  margin: 15px 0 60px 0;
  @media ${theme.media.laptop}{
  text-align: center;
  }`
export const S = {
    ShortBiography
}