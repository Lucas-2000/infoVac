import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import febreAmarela from '../assets/images/febreamarela.jpg'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'
import { i18n } from '../translate/i18n'

const FebreAmarela = () => {
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
                        <h2 className="titulo">{i18n.t('fa.Title')}</h2>
                        <img src={febreAmarela} alt="Febre amarela" />
                        <p>{i18n.t('fa.p1')}</p><br/>
                        <p>{i18n.t('fa.p2')}</p>
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default FebreAmarela
