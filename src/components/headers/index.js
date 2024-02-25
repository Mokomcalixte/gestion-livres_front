import React from "react";
import styled from "styled-components";

// Créez un composant stylé pour le conteneur avec l'arrière-plan d'image Remplacez 'chemin/vers/votre/image.jpg' par le chemin de votre image


// Créez un composant stylé pour le bouton
const Button = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 0 10px; /* Ajoutez de la marge entre les boutons */
    cursor: pointer;
`;

const Header = () => {
    return (
        <div>
            <Button>Login</Button>
            <Button>Connexion</Button>
            </div>
    );
};

export default Header;
