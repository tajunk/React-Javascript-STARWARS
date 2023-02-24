import React from 'react';
import Character from './Character';
import './App.css';

const Characters = ({ characters }) => {
  return (
    <section>
      <div className='charContainer'>
        {characters.map((character, index) => {
          return <Character key={index} {...character}></Character>;
        })}
      </div>
    </section>
  );
};

export default Characters;
