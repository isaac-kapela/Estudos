import styled from "styled-components";

export const HeaderContainer = styled.header`
  .nav-container {
    width: 100%;
    height: 110px;
    background:#93ccc6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    position: absolute;
  }
  .nav-container .logo {
    width: 70px;
  }

  .nav-container .logo img {
    border-radius: 50%;
  }

  .hamburger {
    display: none;
  }

  .navBar ul {
    display: flex;
  }

  .navBar ul li a {
    display: block;
    color: black;
    font-size: 15px;
    padding: 10px 25px;
    border-radius: 25px;
    transition: 0.5s;
    margin: 0 10px;
  }

  .navBar ul li a:hover {
    color: black;
    background: white;
  }

  /* Responsividade */
  @media screen and (max-width: 860px) {
    .navBar ul li a {
      display: block;
      color: white;
      font-size: 15px;
      padding: 10px 25px;
      border-radius: 25px;
      transition: 0.5s;
      margin: 0 10px;
    }
  }

  @media screen and (max-width: 900px) {
    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger .linha {
      width: 30px;
      height: 3px;
      background: white;
      margin: 6px 0;
    }

    .navBar {
      height: 0;
      position: absolute;
      top: 110px;
      right: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(
        to bottom right,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      );
      transition: 0.5s;
      overflow: hidden;
    }

    .navBar.ativa {
      height: 250px;
    }

    .navBar ul {
      display: block;
      margin: 21px auto 0 auto;
      text-align: center;
      transition: 0.5s;
      opacity: 0;
    }

    .navBar.ativa ul {
      opacity: 1;
    }

    .navBar ul li a {
      margin-bottom: 12px;
    }
  }
`;

export const sectionContainer = styled.section`
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 130px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .cards .card {
    flex: 0 0 calc(33.33% - 20px);
    margin-bottom: 20px;
    box-sizing: border-box;
    
  }
  .cards .card h2 {
    text-align: center;
    font-weight: 200;
  }

  .cards img {
    width: 60%;
    border-radius: 8px;
    border: solid #ccc 5px;
    transition: all 0.2s ease-in-out;
    box-shadow: 4px 4px 10px #b7b6b6, -4px -4px 10px #fff;
  }

  .cards img:hover {
    box-shadow: -4px -4px 10px #b7b6b6, 4px 4px 10px #fff;
  }
`;
