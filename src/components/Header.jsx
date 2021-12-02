import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import logotipo from '../assets/images/logotipo.png';
import Brazil from '../assets/images/brazil.png'
import Mexico from '../assets/images/mexico.png'
import { i18n } from '../translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng'

const Header = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleSelectChange = event =>{
      localStorage.setItem(I18N_STORAGE_KEY, event.target.value)
      window.location = window.location
  }


  return (
    <header id="component-header">
        <div className="header--contain">
            <div className="header--logotipo">
            <Link to='/'>
                <img className="logotipo" src={logotipo}/>
            </Link>
            </div>
        <nav>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {i18n.t('menu.home')}
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/vaccines'
                className='nav-links'
                onClick={closeMobileMenu}
                >
               {i18n.t('menu.vacinas')}
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/Historia'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                {i18n.t('menu.historia')}
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/Projeto'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                {i18n.t('menu.projeto')}
                </Link>
            </li>
            </ul>
        </nav>
        <label>
            <input type="radio" name="PT" value="pt-BR" onChange={handleSelectChange}/>
            <img src={Brazil} alt="Brazil"/>
        </label>
        <label>
            <input type="radio" name="ES" value="es-SP" onChange={handleSelectChange}/>
            <img src={Mexico} alt="Mexico"/>
        </label>
        </div>
    </header>
  );
}

export default Header
