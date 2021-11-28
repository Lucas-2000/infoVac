import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/menuVaccines.scss'
import yellow from '../assets/images/injections/injection_yellow.svg';
import blue from '../assets/images/injections/injection_blue.svg';
import bluelight from '../assets/images/injections/injection_bluelight.svg';
import green from '../assets/images/injections/injection_green.svg';
import orange from '../assets/images/injections/injection_orange.svg';
import pink from '../assets/images/injections/injection_pink.svg';
import red from '../assets/images/injections/injection_red.svg';

const MenuVaccines = () => {
    return (
        <div id="component-menuVaccines">
            <div className="contain">
                <nav>
                    <Link to='/vaccines/febretifoide' style={{ textDecoration: 'none' }}>
                        <li>
                            <p>Febre Tifoide</p>
                            <img src={yellow}/>    
                        </li>
                    </Link>

                    <Link to='/vaccines/hepatiteb' style={{ textDecoration: 'none' }}>
                        <li>
                            <p>Hepatite B</p>
                            <img src={blue}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/febreamarela' style={{ textDecoration: 'none' }}>
                        <li>
                            <p>Febre Amarela</p>
                            <img src={bluelight}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/poliomielite' style={{ textDecoration: 'none' }}>
                        <li>
                            <p>Poliomielite</p>
                            <img src={green}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/bcg' style={{ textDecoration: 'none' }}>
                        <li>
                            <p>BCG</p>
                            <img src={orange}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/hpv' style={{ textDecoration: 'none' }}>
                        <li>
                            <p>HPV</p>
                            <img src={pink}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/covid' style={{ textDecoration: 'none' }}>
                        <li>
                            <p>Covid</p>
                            <img src={red}/>
                        </li>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default MenuVaccines
