
import PropTypes from 'prop-types';
import * as S from "./conteudo_style";

function Card({ imagem, texto }) {

  function clickou (){
    alert("Você vai ser redirecionado para o site do Burger King!, aperte no Ok para continuar!");
  }
  return (
    <S.Card>
      <div className='corBranca'>
      <img src={imagem} alt="img" />
      
      <h2>{texto}</h2>
      <button onClick={clickou}> <a href="https://www.burgerking.com.br/" target='_blank'> clique aqui</a></button>
      </div>
    </S.Card>
  );
}

Card.propTypes = {
  imagem: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired
};

export default Card;
