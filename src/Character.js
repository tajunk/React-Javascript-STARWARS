import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

const Character = ({
  name,
  height,
  mass,
  hair_color,
  eye_color,
  birth_year,
  homeworld,
}) => {
  return (
    <article className='card'>
      <div className='card-body'>
        <h4 className='card-title'>{name}Placeholder</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Height: </b>
            <span>{height}</span>
          </li>
          <li className='list-group-item'>
            <b>Mass: </b>
            <span>{mass}</span>
          </li>
          <li className='list-group-item'>
            <b>Hair Color: </b>
            <span>{hair_color}</span>
          </li>
          <li className='list-group-item'>
            <b>Eye Color: </b>
            <span>{eye_color}</span>
          </li>
          <li className='list-group-item'>
            <b>Birth Year: </b>
            <span>{birth_year}</span>
          </li>
          <li className='list-group-item'>
            <b>Homeworld: </b>
            <span>{homeworld}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Character;
