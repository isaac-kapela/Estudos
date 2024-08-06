
import ImgConteudo from "../../assets/hamburguerCont.png";
import ImgMini from "../../assets/miniHam.png";
import Casquinha from "../../assets/casquinha.png";
import batata from "../../assets/batata.png";
import MacSofa from "../../assets/macSofa.png";
import MacLoja from "../../assets/MacLoja.jpeg";
import MacPessoa from "../../assets/MacPessoa.jpeg";
import * as S from './conteudo_style';
import Card from "./Card";


export default function Conteudo() {


  return (
    <main>
      <S.ConteudoContainer>
        <div className="conteudo-container">
          <div className="img-container">
            <img src={ImgConteudo} alt="" />
          </div>
          <div className="texto-container">
            <h1>BATEU AQUELA <br></br> <span className="texto-ver">#FOME</span> DE <span className="texto-ver">MÉQUI</span>?</h1>
          </div>
        </div>
        <ul className="img-itens">
          <li><img src={ImgMini} alt="" /></li>
          <li><img src={batata} alt="" /></li>
          <li><img src={Casquinha} alt="" /></li>
        </ul>
      </S.ConteudoContainer>

      <S.ConteudoSection>
        <section>
          <div className="conteudo">
            <h1>Promoção</h1>

            <S.Card>
              <S.CardContainer>
                <Card imagem={MacSofa} texto="Que tal um #MéquiNoSofá?" />
                <Card imagem={MacLoja} texto="venha conhecer nossa nova loja" />
                <Card imagem={MacPessoa} texto="Confira as medidas que o Méqui adotou!" />
              </S.CardContainer>
            </S.Card>

          </div>

        </section>

      </S.ConteudoSection>

    </main>
  );
}
