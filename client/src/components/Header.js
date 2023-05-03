import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Header.css"


const Header = ({connectWallet, buttonText}) => {
    return (
        <nav className='header-container'>
            <div className="menus"><p>Faucet</p></div>
            
            <div className="menus"><button onClick={connectWallet}>{buttonText}</button></div>

        </nav>

    )
}

export default Header;

