import React from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <header className="special-bg">
          <Navbar></Navbar> 
          <HeaderBody></HeaderBody>
        </header>
    );
};

export default Header;