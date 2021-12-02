import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import hpv from '../assets/images/hpv.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import { i18n } from '../translate/i18n'

import Footer from '../components/Footer'

const HPV = () => {

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
                        <h2 className="titulo">{i18n.t('hpv.title')}</h2>
                        <img src={hpv} alt="HPV" />
                        <h3>{i18n.t('hpv.subtitle1')}</h3>
                        <p>{i18n.t('hpv.p1')}</p>
                        <h3>{i18n.t('hpv.subtitle2')}</h3>
                        <p>{i18n.t('hpv.p2')}</p>
                        <p>{i18n.t('hpv.p3')}</p>
                        <h3>{i18n.t('hpv.subtitle3')}</h3>
                        <p>{i18n.t('hpv.p4')}</p>
                        <p>{i18n.t('hpv.p5')}</p>
                        <p>{i18n.t('hpv.p6')}</p>
                        <ul>
                            <li>{i18n.t('hpv.li1')}</li>
                            <li>{i18n.t('hpv.li2')}</li>
                            <li>{i18n.t('hpv.li3')}</li>
                            <li>{i18n.t('hpv.li4')}</li>
                        </ul>
                        <h3>{i18n.t('hpv.subtitle4')}</h3>
                        <p>{i18n.t('hpv.p7')} </p>
                        <h3>{i18n.t('hpv.subtitle5')}</h3>
                        <p>{i18n.t('hpv.p8')}</p>
                        <ul>
                            <li>{i18n.t('hpv.li5')}</li>
                            <li>{i18n.t('hpv.li6')}</li>
                        </ul>
                        <h3>{i18n.t('hpv.subtitle6')}</h3>
                        <p>{i18n.t('hpv.p9')}</p>
                        <h3>{i18n.t('hpv.subtitle7')}</h3>
                        <ul>
                            <li>{i18n.t('hpv.li7')}</li>
                            <li>{i18n.t('hpv.li8')}</li>
                            <li>{i18n.t('hpv.li9')}</li>
                            <li>{i18n.t('hpv.li10')}</li>
                            <li>{i18n.t('hpv.li11')}</li>
                            <li>{i18n.t('hpv.li12')}</li>
                        </ul>
                        <p>{i18n.t('hpv.p10')}</p>
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default HPV
