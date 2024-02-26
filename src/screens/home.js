import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [books, setBooks] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3003/books')
            .then(response => {
                setBooks(response.data.data);
                
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const handleLoginClick = () => {
        navigate('/login'); // Redirection vers la page de connexion
    };

    return (
        <div>
        <NavbarWrapper>
        <h1>Mon Application</h1>
        <div>
          <SearchBar type="text" placeholder="Rechercher..." />
          <NavButton>Connexion</NavButton>
          <NavButton onClick={handleLoginClick}>Login</NavButton>
          {/*<NavButton>Liste des livres</NavButton>*/}
        </div>


      </NavbarWrapper>
      <div>
        <BookListContainer>
            {books.map((book, index) => (
                <BookItem key={index}>
                    <BookImage src={book?.lienImage} />
                    <div>{book ? book.titre : "No title"}</div>
                    <div>{book ? book.auteur : "Pas d'auteur"}</div>
                    <div>{book ? book.date : "Pas de date"}</div>
                    <div>{book ? book.genre : "Pas de genre"}</div>
                </BookItem>
            ))}
                </BookListContainer>
        </div>
    </div>
    );
};


// Styled component for the navbar
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 1rem;
`;

// Styled component for the buttons
const NavButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: blue;
  border: 2px solid blue;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
`;

// Styled component for the search bar
const SearchBar = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid blue;
  border-radius: 5px;
  margin: 0 5px 0 39px;
`;

const BookListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px; /* Espace entre chaque élément */
`;

const BookItem = styled.div`
    border-color: red;

`;
const BookImage = styled.img`
    
`;

export default Home;
