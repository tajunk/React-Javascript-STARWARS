import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Button = () => {
  const [btnName, setBtnName] = useState('People');

  return (
    <DropdownButton id='dropdown-item-button' title={btnName}>
      <Dropdown.Item as='button' id='people'>
        People
      </Dropdown.Item>
      <Dropdown.Item as='button' id='planets'>
        Planets
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default Button;
