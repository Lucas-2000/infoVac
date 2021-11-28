import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'

const Vaccines = () => {
    return (
        <div>
            <Header />
            <section className="banner-vacinas">
            <div className="banner-text">
                    <div className="content col">
                        <h1>Como funcionam as Vacinas?</h1>
                        <h2>Saiba informações cruciais sobre as vacinas mais conhecidas</h2>
                    </div>
                </div>
                <a href="#component-menuVaccines">
                <div className="banner-button">Saiba Mais</div>
                </a>
            </section>
            <MenuVaccines />
        </div>
    )
}

export default Vaccines
