
import Logo from "../../assets/logo.png";
import imgMenu from "../../assets/menu-cll.png"
import imgMenu2 from "../../assets/menu-cll2.png"
import * as S from './navBar_style'

const Navbar = () => {

  return (
    <S.NavbarContainer>
      <header>

        <nav>

          <div>
            <ul>
              <div>
                <img src={Logo} alt="" />
              </div>

              <li>
                <div className="imgNav">
                <img src={imgMenu} alt="" />
               <span>Baixe o App</span> 
              </div>

              <div className="imgNav imgNav2">
                <span>Peça seu Méqui</span> 
                <img src={imgMenu2} alt="" />
                </div>
              </li>
              
            </ul>
          </div>
        </nav>

      </header>
    </ S.NavbarContainer>

  );
};

export default Navbar;
