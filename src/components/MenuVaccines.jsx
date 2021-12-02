import React, { useState } from 'react'
import { Link as Href } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/menuVaccines.scss'
import yellow from '../assets/images/injections/injection_yellow.svg';
import blue from '../assets/images/injections/injection_blue.svg';
import bluelight from '../assets/images/injections/injection_bluelight.svg';
import green from '../assets/images/injections/injection_green.svg';
import orange from '../assets/images/injections/injection_orange.svg';
import pink from '../assets/images/injections/injection_pink.svg';
import { i18n } from '../translate/i18n';

const MenuVaccines = () => {
    return (
        <div id="component-menuVaccines">
            <div className="contain">
                <nav>
                    <Link to="page-vaccines" smooth={true} activeClass="active" spy={true} duration={200}>
                        <Href to='/vaccines/febretifoide' style={{ textDecoration: 'none' }}>
                            <li>
                                <p>{i18n.t('menuVacinas.febreTifoide')}</p>
                                <img src={yellow} />
                            </li>
                        </Href>
                    </Link>


                    <Link to="page-vaccines" smooth={true} activeClass="active" spy={true} duration={200}>
                        <Href to='/vaccines/hepatiteb' style={{ textDecoration: 'none' }}>
                            <li>
                                <p>{i18n.t('menuVacinas.hepatite')}</p>
                                <img src={blue} />
                            </li>
                        </Href>
                    </Link>

                    <Link to="page-vaccines" smooth={true} activeClass="active" spy={true} duration={200}>
                        <Href to='/vaccines/febreamarela' style={{ textDecoration: 'none' }}>
                            <li>
                                <p>{i18n.t('menuVacinas.febreAmarela')}</p>
                                <img src={bluelight} />
                            </li>
                        </Href>
                    </Link>

                    <Link to="page-vaccines" smooth={true} activeClass="active" spy={true} duration={200}>
                        <Href to='/vaccines/poliomielite' style={{ textDecoration: 'none' }}>
                            <li>
                                <p>{i18n.t('menuVacinas.poliomelite')}</p>
                                <img src={green} />
                            </li>
                        </Href>
                    </Link>

                    <Link to="page-vaccines" smooth={true} activeClass="active" spy={true} duration={200}>
                        <Href to='/vaccines/bcg' style={{ textDecoration: 'none' }}>
                            <li>
                                <p>{i18n.t('menuVacinas.bcg')}</p>
                                <img src={orange} />
                            </li>
                        </Href>
                    </Link>

                    <Link to="page-vaccines" smooth={true} activeClass="active" spy={true} duration={200}>
                        <Href to='/vaccines/hpv' style={{ textDecoration: 'none' }}>
                            <li>
                                <p>{i18n.t('menuVacinas.hpv')}</p>
                                <img src={pink} />
                            </li>
                        </Href>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default MenuVaccines
