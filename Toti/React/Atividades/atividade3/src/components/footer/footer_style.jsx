import styled from 'styled-components';

export const FooterContainer = styled.header`
padding-bottom:10px;
padding-top:10px;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .imgContainer {
    margin-left: auto; 
  }

  li {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  a {
    list-style: none;
    text-decoration: none;
    color: black;
  }

  img {
    width: 30px;
    margin-right: 10px;
  }

  .imgFooter {
    width: 100px;
  }
`;
