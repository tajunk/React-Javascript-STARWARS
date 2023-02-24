import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Button from './Button';
import Characters from './Characters';
import apiUrls from './Urls';

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await Promise.all(
        apiUrls.map((apiUrls) => fetch(apiUrls).then((res) => res.json()))
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters().then((response) => setCharacters(response));
  }, []);

  return (
    <main>
      <Button />
      <Characters characters={characters} />
    </main>
  );
}

export default App;
