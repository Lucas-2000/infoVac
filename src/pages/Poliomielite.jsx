import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import poliomielite from '../assets/images/poliomielite.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import { i18n } from '../translate/i18n'

import Footer from '../components/Footer'

const Poliomelite = () => {
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
                        <h2 className="titulo">{i18n.t('polio.title')}</h2>
                        <img src={poliomielite} alt="Poliomielite" />
                        <p>{i18n.t('polio.p1')}</p><br/>
                        <p>{i18n.t('polio.p2')}</p>
                        <p>{i18n.t('polio.p3')}</p>
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Poliomelite
