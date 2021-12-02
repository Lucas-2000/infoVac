import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import { i18n } from '../translate/i18n'

const Vaccines = () => {
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
                <a href="#component-menuVaccines">
                </a>
            </section>
        </div>
    )
}

export default Vaccines
