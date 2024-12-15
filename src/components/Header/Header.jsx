import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { GoHome } from 'react-icons/go';
import { MdAddCircleOutline } from 'react-icons/md';

const Header = () => (
  <header className="header">
    <img src="./logo.svg" className="logo" alt="logo" />
    <nav>
      <button className="btnhome">
        <GoHome></GoHome> <Link to="/">Home</Link>
      </button>
      <button className="btnNuevo">
        <MdAddCircleOutline></MdAddCircleOutline>
        <Link to="/new-video">Nuevo Video</Link>
      </button>
    </nav>
  </header>
);

export default Header;
