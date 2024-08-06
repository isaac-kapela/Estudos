import styled from 'styled-components';

export const ConteudoContainer = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  background-color: #FFC72C;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .conteudo-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr)); 
    grid-gap: 20px;
    justify-content: center; 
  }

  .texto-container {
    font-weight: 800;
    font-size: 30px;
    color: white;
    margin-top: 80px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-itens img {
    width: 80px;
    padding-bottom: 30px;
  }
  .texto-ver{
    color:#DB0007;
  }
`;

export const ConteudoSection = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  section {
    background-color: #FEB706;
    padding-bottom: 100px;
  }

  h1 {
    text-align: center;
    padding: 20px;
    font-size: 30px;
    font-weight: 800;
    color: white;
    text-transform: uppercase;
    
  }
  
`;

export const Card = styled.div`
  border-radius: 7px;
  text-align: center;
  position: relative; 

  img {
    width: 100%;
    height: 200px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }


  h2 {
    font-size: 13px;
  }

  button {
    background-color: #FFC72C;
    color: black;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .corBranca {
    background-color: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    width:50%;
    align-items: center;
    justify-content: center;
  }
  a{
    text-decoration: none;
    color: black;
  }
`;


export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr)); 
  gap: 20px;
  margin-left: 150px;
`;
