import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import logotipo from '../assets/images/logotipo.png';

const Header = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <header id="component-header">
        <div className="header--contain">
            <div className="header--logotipo">
            <Link to='/'>
                <img src={logotipo}/>
            </Link>
        <nav>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/vaccines'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                Vacinas 
                </Link>
                </li>
            </ul>
        </nav>
        </div>
    </div>
    </header>
  );
}

export default Header
