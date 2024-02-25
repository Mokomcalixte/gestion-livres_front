 import { useNavigate } from "react-router-dom";
 import styled from 'styled-components';
 import LoginForm from "../components/loginForm";
import biblio from "../assets/images/biblio.jpg"
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
{*background-image: url(${biblio}); *}
background-size: cover;
background-position: center;
height: 80vh; /* Faites en sorte que le conteneur prenne toute la taille de l'écran */
`
 export default Login;