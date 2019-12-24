import React from 'react';
import logo from './logo1.png';
import s from './Header.module.css';

const Header = () => {
    return <div className={s.header}>
        <img src={logo} className={s.logo} />
    </div>
}

export default Header;