import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import logotipo from '../assets/images/logotipo.png';

const Header = () => {
    return (
        <header id="component-header">
            <div className="header--contain">
                <div className="header--logotipo">
                <Link to='/'>
                    <img src={logotipo}/>
                </Link>
                    
                    {/* <p>Informativo sobre vacinas</p> */}
                </div>
                <button>Menu</button>
                <nav className="pages-button">

                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/vaccines'>Vacinas</Link>
                    </li>
                </nav>
            </div>
        </header>
    )
}

export default Header
