// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';
import React from "react";
import LoginForm from "./components/loginForm";


function App() {
  return (
    <div>
    <LoginContainer>
      <LoginForm/>
    </LoginContainer>
    </div>
  );
}

const LoginContainer = styled.div`
display: flex;
justify-content: center;

`

export default App;
