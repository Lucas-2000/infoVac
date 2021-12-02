import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import bcg from '../assets/images/bcg.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import { i18n } from '../translate/i18n'

import Footer from '../components/Footer'

const BCG = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <section className="banner-vacinas">
            <div className="banner-text">
                    <div className="content col">
                        <h1>{i18n.t('titleBanner.vacinas')}</h1>
                        <h2>{i18n.t('subtitleBanner.vacinas')}</h2>
                    </div>
                </div>
                <a href="#page-vaccines">
                    <div className="banner-button">{i18n.t('button.saiba')}</div>
                </a>
            </section>
            
            <div id="page-vaccines">
                <main>
                    <Fade bottom>
                        <h2 className="titulo">{i18n.t('bcg.Title')}</h2>
                        <img src={bcg} alt="BCG" />
                        <p>{i18n.t('bcg.p1')}</p>
                        <p>{i18n.t('bcg.p2')}</p>
                        <h3>{i18n.t('bcg.p3')}</h3>
                        <ul>
                            <li>{i18n.t('bcg.li1')} </li>
                            <li>{i18n.t('bcg.li2')}</li>
                            <li>{i18n.t('bcg.li3')}</li>
                        </ul>
                    </Fade>
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default BCG
