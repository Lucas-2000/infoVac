import React from 'react'
import Header from '../components/Header'
import vaccines from '../assets/images/vaccines.jpg'
import '../styles/global.scss'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'
import ScrollIndicator from './ScrollIndicator';
import { i18n } from '../translate/i18n'

const Historia = () => {
    return (
        <div>
            <Header />
            <section className="banner-historia">
            <div className="banner-text">
                    <div className="content col">
                        <h1>{i18n.t('titleBanner.historia')}</h1>
                        <h2>{i18n.t('subtitleBanner.historia')}</h2>
                    </div>
                </div>
                <a href="#page">
                <div className="banner-button">{i18n.t('button.saiba')}</div>
                </a>
            </section>
            <ScrollIndicator element="page"/>
            <section id="page">
                    <Fade bottom>
                        <h2 className="history-title">{i18n.t('historia.title')}</h2>
                        <p>
                        {i18n.t('historia.p1')}
                        </p><br/>
                        <p>
                        {i18n.t('historia.p2')}
                        </p><br/>
                        <p>
                        {i18n.t('historia.p3')}
                        </p><br/>
                        <div className="img-text">
                            <img src={vaccines} alt="Vacina aplicada em garoto de 8 anos" />
                            <p>{i18n.t('historia.img')}</p>
                        </div>
                        <p>
                        {i18n.t('historia.p4')}
                        </p><br/>
                        <p>
                        {i18n.t('historia.p5')}
                        </p><br/>
                    </Fade>
            </section>
            <Footer/>
        </div>
    )
}

export default Historia
