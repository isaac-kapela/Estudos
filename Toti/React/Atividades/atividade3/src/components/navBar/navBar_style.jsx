import styled from 'styled-components';

export const NavbarContainer = styled.header`
padding-bottom: 8px;
padding-top: 8px;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  img {
    width: 30px;
  }
  .imgContainer {
    margin-left: auto; 
  }
  .imgNav{
    display: flex;
    align-items: center;
    margin-right: 30px;
  }

  .imgNav2 {
    background-color: #FFC72C;
    color: black;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    
  }
`;
