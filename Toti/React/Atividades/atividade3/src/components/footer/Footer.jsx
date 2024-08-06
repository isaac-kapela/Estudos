import Logo from "../../assets/logo.png";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";
import * as S from "./footer_style";

const Footer = () => {
  return (
    <S.FooterContainer>
      <footer>
        <div>
          <ul>
          <div>
            <a href="">
              <img src={Logo} alt="" /> © McDonald’s 2024
            </a>
          </div>
          <div className="imgContainer">
            <li>
              <img className="imgFooter" src={playStore} alt="" />
              <img className="imgFooter imgNav2" src={appStore} alt="" />
            </li>
            </div>
          </ul>
        </div>
      </footer>
    </S.FooterContainer>
  );
};

export default Footer;
