import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import febreAmarela from '../assets/images/febreamarela.jpg'
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from 'react-reveal/Fade';
import ScrollIndicator from './ScrollIndicator';
import Footer from '../components/Footer'

const FebreAmarela = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <section className="banner-vacinas">
            <div className="banner-text">
                    <div className="content col">
                        <h1>Como funcionam as Vacinas?</h1>
                        <h2>Saiba informações cruciais sobre as vacinas mais conhecidas</h2>
                    </div>
                </div>
                <a href="#page-vaccines">
                <div className="banner-button">Saiba Mais</div>
                </a>
            </section>
            <ScrollIndicator />
            <div id="page-vaccines">
                <main>
                    <Fade bottom>
                    <strong className="titulo">Vacina da febre amarela</strong>
                    <img src={febreAmarela} alt="Febre amarela" />
                    <p>A FEBRE AMARELA é uma doença viral aguda, imunoprevenível, transmitida ao homem e a primatas não humanos (macacos), por meio da picada de mosquitos infectados.</p><br/>
                    <p>A vacina é a principal ferramenta de prevenção e controle da febre amarela. O Sistema Único de Saúde (SUS) oferta vacina contra febre amarela para a população. O Brasil adota o esquema vacinal de apenas uma dose durante toda a vida, sendo que a pessoa que recebeu uma dose da vacina antes de completar (5) cinco anos , está indicada a dose de reforço, independentemente da idade que tiver.</p>
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default FebreAmarela
