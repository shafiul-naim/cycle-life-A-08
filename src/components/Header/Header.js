import React from 'react';
import logo from '../../img/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <p>Cycle Life</p>
        </nav>
    );
};

export default Header;