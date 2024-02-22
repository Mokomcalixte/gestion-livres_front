// import axios from "axios";
// import {useState} from "react";
// import {useNavigate} from "react-router-dom";

// const LoginForm = () =>{
//     const [inputs, setInputs] = useState({
//         email:'',
//         password:''
//     })
//     const navigate = useNavigate();

//     const handleSubmit = (e) =>{
//         e.prevenDefault()
// }


// import React from 'react';
// import styled from 'styled-components';

// const sharedStyles = `
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
//   padding: 10px;
// `;

// const Button = styled.button`
//   ${sharedStyles}
//   background-color: ${props => props.color};
//   color: ${props => props.color === '#fff' ? '#333' : '#fff'};
// `;

// const Input = styled.input`
//   ${sharedStyles}
//   background-color: #f0f0f0;
//   color: #333;
// `;

// function LoginForm() {
//   return (
//     <form>
//       <Input placeholder="Entrez votre nom" />
//       <Button color="#f0f0f0">
//         Envoyer
//       </Button>
//     </form>
//   );
// }
// export default LoginForm;
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique de gestion de la soumission du formulaire
    };

    return (
        <LoginFormContainer onSubmit={handleSubmit}>
         <h2>Se connecter</h2>

            <FormInput
                type="email"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <FormInput
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <SubmitButton type="submit">Login</SubmitButton>
        </LoginFormContainer>
    );
};

const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
   
`;

const FormInput = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default LoginForm;
