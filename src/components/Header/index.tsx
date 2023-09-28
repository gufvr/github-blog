import { HeaderContainer } from "./styles";
import logoSrc from '../../assets/logoSrc.png';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  )
}