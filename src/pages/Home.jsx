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

const Home = () => {
    return (
        <main>
            <Header />
            <section className="banner">
                <div className="contain">
                    <div className="content col">
                        <h1>Vacinação</h1>
                        <h1>e suas importâncias.</h1>
                        <h2>Proteja-se, sua vida vale mais!</h2>
                    </div>
                    <div className="col">
                        <img alt="banner_alt" src={vac_illustrator} />
                    </div>
                </div>
            </section>
            <ScrollIndicator/>
            <section className="cards">
                <div className="row">
                    <div className="col-md-4 px-22">
                        <Link to='/Projeto'>
                        <div className="prevention-card ">
                            <img src={ card1} className="img-2" alt=""/>
                            <div className="card-detail">
                                <h3 className="card-title">Conheça o Projeto</h3>
                                <p className="card-line">Descubra qual o objetivo e quem está por trás desse projeto de extensão</p>
                            </div>
                        </div></Link>
                    </div>

                    <div className="col-md-4 px-22">
                        <div className="prevention-card ">
                        <Link to='/Vaccines'>
                            <img src={card2} className="img-2" alt=""/>
                            <div className="card-detail">
                                <h3 className="card-title">Como funcionam as Vacinas?</h3>
                                <p className="card-line">Saiba informações cruciais sobre as vacinas mais conhecidas</p>
                            </div></Link>
                        </div>
                    </div>

                    <div className="col-md-4 px-22">
                        <Link to='/Historia'>
                        <div className="prevention-card ">
                            <img src={card3} className="img-2" alt=""/>
                            <div className="card-detail">
                                <h3 className="card-title">Um pouco da história</h3>
                                <p className="card-line">Conheça um pouco de como teve início a vacinação no mundo atual</p>
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
