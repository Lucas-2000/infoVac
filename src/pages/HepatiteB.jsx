import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import hepatite from '../assets/images/hepatiteb.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import { i18n } from '../translate/i18n'

import Footer from '../components/Footer'

const HepatiteB = () => {
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
                        <h2 className="titulo">{i18n.t('hepatite.title')}</h2>
                        <img src={hepatite} alt="Hepatite B" />
                        <h3>{i18n.t('hepatite.subtitle1')}</h3>
                        <p>{i18n.t('hepatite.p1')}</p>
                        <p>{i18n.t('hepatite.p2')}</p>
                        <p>{i18n.t('hepatite.p3')}</p>
                        <h3>{i18n.t('hepatite.subtitle2')}</h3>
                        <p>{i18n.t('hepatite.p4')} </p>
                        <p>{i18n.t('hepatite.p5')}</p>
                        <p>{i18n.t('hepatite.p6')}</p>
                        <p>{i18n.t('hepatite.p7')}</p>
                        <h3>{i18n.t('hepatite.subtitle3')}</h3>
                        <p>{i18n.t('hepatite.p8')}</p>
                        <p>{i18n.t('hepatite.p9')}</p>
                        <p>{i18n.t('hepatite.p10')}</p>
                        <p>{i18n.t('hepatite.p11')}</p>
                        <p>{i18n.t('hepatite.p12')}</p>
                        <h2 className="titulo">{i18n.t('hepatite.title2')}</h2>

                        <h3>{i18n.t('hepatite.subtitle4')}</h3>
                        <p>{i18n.t('hepatite.p13')}</p>
                        <p>{i18n.t('hepatite.p14')}</p>
                        <p>{i18n.t('hepatite.p15')}</p>
                        <p>{i18n.t('hepatite.p16')}</p>

                        <h3>{i18n.t('hepatite.subtitle5')}</h3>
                        <p>{i18n.t('hepatite.p17')}</p>
                        <p>{i18n.t('hepatite.p18')}</p>
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default HepatiteB
