import React from 'react';
import Header from '../components/Header';
import card1 from '../assets/images/card1.svg';
import card2 from '../assets/images/card2.svg';
import card3 from '../assets/images/card3.svg';
import { Link } from 'react-router-dom'
import vac_illustrator from '../assets/images/vac_illustrator.svg';
import '../styles/home.scss';
import Footer from '../components/Footer';
import ScrollIndicator from './ScrollIndicator';
import { i18n } from '../translate/i18n'

const Home = () => {
    return (
        <main>
            <Header />
            <section className="banner">
                <div className="contain">
                    <div className="content col">
                        <h1>{i18n.t('titleBanner.home')}</h1>
                        <h2>{i18n.t('subtitleBanner.home')}</h2>
                    </div>
                    <div className="col">
                        <img alt="banner_alt" src={vac_illustrator} />
                    </div>
                </div>
            </section>
            <ScrollIndicator element="cards"/>
            
            <section className="cards">
                <div className="row">
                    <div className="col-md-4 px-22">
                        <Link to='/Projeto'>
                        <div className="prevention-card ">
                            <img src={ card1} className="img-2" alt=""/>
                            <div className="card-detail">
                                <h3 className="card-title">{i18n.t('cardTitle.projeto')}</h3>
                                <p className="card-line">{i18n.t('cardSubtitle.projeto')}</p>
                            </div>
                        </div></Link>
                    </div>

                    <div className="col-md-4 px-22">
                        <div className="prevention-card ">
                        <Link to='/Vaccines'>
                            <img src={card2} className="img-2" alt=""/>
                            <div className="card-detail">
                                <h3 className="card-title">{i18n.t('cardTitle.vacinas')}</h3>
                                <p className="card-line">{i18n.t('cardSubtitle.vacinas')}</p>
                            </div></Link>
                        </div>
                    </div>

                    <div className="col-md-4 px-22">
                        <Link to='/Historia'>
                        <div className="prevention-card ">
                            <img src={card3} className="img-2" alt=""/>
                            <div className="card-detail">
                                <h3 className="card-title">{i18n.t('cardTitle.historia')}</h3>
                                <p className="card-line">{i18n.t('cardSubtitle.historia')}</p>
                            </div>
                        </div></Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Home
