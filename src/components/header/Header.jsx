import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';

function Header() {
    return (
        <div className="header_wrapper">
            <div className="header_container">
                <Link to="/">
                    <img className="header_logo" alt={'Logo'} src={Logo} />
                </Link>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
