import React from 'react';
import logo from '../../img/logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
        </nav>
    );
};

export default Header;