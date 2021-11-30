import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import poliomielite from '../assets/images/poliomielite.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import ScrollIndicator from './ScrollIndicator'
import Footer from '../components/Footer'

const Poliomelite = () => {
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
                    <strong className="titulo">Vacina poliomielite</strong>
                    <img src={poliomielite} alt="Poliomielite" />
                    <p>A poliomielite é uma doença infecto contagiosa causada pelo vírus poliovirus, transmitida diretamente de uma pessoa para outra através da saliva ou material contaminado com fezes (transmissão oral-fecal). Atinge em maior quantidade crianças de até 4 anos de idade, podendo afetar adultos também.</p><br/>
                    <p>Grande parte dos casos é assintomático ou apresenta sintomas semelhantes aos da gripe; em casos mais raros pode levar a paralisia dos membros inferiores – o poliovirus tem maior afinidade com os neurônios motores e por conta disso a paralisia afeta apenas os membros inferiores. A paralisia é assimétrica, afetando apenas um dos membros inferiores e tem como característica a perda de força muscular e manutenção da sensibilidade. </p>
                    <p>A poliomielite não possui tratamento, mas pode ser prevenida através da vacinação. No Brasil, a vacinação é dada pelo SUS (Sistema Único de Saúde) através dos postos de saúde. A vacina é aplicada no bebê em três doses – aos 2, 4 e 6 meses – e possui duas doses de reforço que devem ser aplicadas aos 15 meses e 5 anos.</p>
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Poliomelite
