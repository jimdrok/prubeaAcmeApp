import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #fCFCFC;
    margin: 0;
    margin-bottom: 40px;
  }

  html {
  min-height: 100%;
  position: relative;
}


`;

export const Text = styled.label`
  color: ${(props) => props.color || '#000'};
  font-size: 18px;
  margin: auto;

  text-align: center;

`;

export const ConterText = styled.div`
  display: flex;
  justify-content: center;
`



export const FormAuth = styled.form`
  background-color: #fff;
  margin: 150px auto  0 auto;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.10);
  background-color: #ffffff;

`;