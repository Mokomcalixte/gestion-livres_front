 import { useNavigate } from "react-router-dom";
 import styled from 'styled-components';
 import LoginForm from "../components/loginForm";
import backlogin from "../assets/images/backlogin.png"
import Home from "./home";

 const Login = () =>{
     return(
         <div>
            <LoginContainer>
                <LoginForm/>
               
            </LoginContainer>
         </div>
     );

}

const LoginContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
{background-image: url(${backlogin}); }
background-size: cover;
background-position: center;
height: 80vh; /* Faites en sorte que le conteneur prenne toute la taille de l'écran */
`
 export default Login;