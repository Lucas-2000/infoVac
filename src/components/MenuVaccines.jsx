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
                <h2>Selecione abaixo para saber referente alguma vacina</h2>
                <nav>
                    <Link to='/vaccines/febretifoide'>
                        <li>
                            <p>Febre Tifoide</p>
                            <img src={yellow}/>    
                        </li>
                    </Link>

                    <Link to='/vaccines/hepatiteb'>
                        <li>
                            <p>Hepatite B</p>
                            <img src={blue}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/febreamarela'>
                        <li>
                            <p>Febre Amarela</p>
                            <img src={bluelight}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/poliomielite'>
                        <li>
                            <p>Poliomielite</p>
                            <img src={green}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/bcg'>
                        <li>
                            <p>BCG</p>
                            <img src={orange}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/hpv'>
                        <li>
                            <p>HPV</p>
                            <img src={pink}/>
                        </li>
                    </Link>

                    <Link to='/vaccines/covid'>
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
