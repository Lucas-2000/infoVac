import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import bcg from '../assets/images/bcg.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';

import Footer from '../components/Footer'

const BCG = () => {
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
            
            <div id="page-vaccines">
                <main>
                    <Fade bottom>
                        <h2 className="titulo">Vacina BCG</h2>
                        <img src={bcg} alt="BCG" />
                        <p>A vacina BCG previne a tuberculose e por isso é de grande importância para a vida humana, de modo que está no calendário nacional de vacinas do Brasil. Ela foi criada para prevenir o desenvolvimento grave da tuberculose, que ataca os pulmões e se não tratada pode trazer sérios malefícios para o sistema respiratório. É indicada dos primeiros dias de vida até os 5 anos de idade, a fim de não acarretar a doença que tem como sintomas clássicos: a tosse com mais de 3 semanas seguidas, sangue ou catarro no peito, febre em alguns casos, sudorese noturna, falta de apetite, entre outros.  </p>
                        <p>É comum que a vacina BCG deixe uma cicatriz típica no local da vacinação, sendo considerado um bom sinal. Porém, a ausência desta cicatriz não é indicativa de ausência de proteção, ou seja, a eficácia da vacina não depende da cicatriz, e em alguns casos é comum que não apareça. A revacinação só deve ser feita caso não se tenha a comprovação no cartão de  vacina  que a mesma foi tomada.</p>
                        <h3>Informações importantes:</h3>
                        <ul>
                            <li>Como é aplicada? Por via intradérmica (injeção sob a pele). </li>
                            <li>Quando é preciso tomar a vacina? Após o nascimento, na maternidade, em apenas uma dose.</li>
                            <li>Quais os benefícios da vacina? Proteção contra as formas graves da tuberculose, doença contagiosa, produzida por bactéria que atinge principalmente os pulmões e que, se não tratada, pode provocar sérios problemas respiratórios, emagrecimento, fraqueza e até levar à morte.</li>
                        </ul>
                    </Fade>
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default BCG
