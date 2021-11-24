import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import febreAmarela from '../assets/images/febreamarela.jpg'
import Fade from 'react-reveal/Fade';

const FebreAmarela = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
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
        </div>
    )
}

export default FebreAmarela
