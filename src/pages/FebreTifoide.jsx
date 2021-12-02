import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import febreTifoide from '../assets/images/febretifosa.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'
import { i18n } from '../translate/i18n'


const FebreTifoide = () => {
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
                        <h2 className="titulo">{i18n.t('FT.Title')}</h2>
                        <img src={febreTifoide} alt="Febre Tifoide" />
                        <p>{i18n.t('FT.p1')}</p>
                        <p>{i18n.t('FT.p2')}</p>
                        <p>
                        {i18n.t('FT.p3')}
                        </p>
                        <p>
                        {i18n.t('FT.p4')}
                        </p>
                        <ul>
                            <li>{i18n.t('FT.li1')}</li>
                            <li>{i18n.t('FT.li2')}</li>
                            <li>{i18n.t('FT.li3')}</li>
                            <li>{i18n.t('FT.li4')}</li>
                            <li>{i18n.t('FT.li5')}</li>
                            <li>{i18n.t('FT.li6')}</li>
                            <li>{i18n.t('FT.li7')}</li>
                            <li>{i18n.t('FT.li8')}</li>
                            <li>{i18n.t('FT.li9')}</li>
                            <li>{i18n.t('FT.li10')}</li>
                            <li>{i18n.t('FT.li11')}</li>
                            <li>{i18n.t('FT.li12')}</li>
                        </ul><br />
                        <p>{i18n.t('FT.p5')}</p><br />
                        <p>{i18n.t('FT.p6')}
                        </p><br />
                        <p>{i18n.t('FT.p7')}
                        </p><br />
                        <p>{i18n.t('FT.p8')}
                        </p><br />
                        <strong>{i18n.t('FT.subtitle')}</strong>
                        <p>{i18n.t('FT.p9')}
                        </p><br />
                        <p>{i18n.t('FT.p10')}
                        </p><br />
                        <p>{i18n.t('FT.p11')}
                        </p><br />
                        <p>{i18n.t('FT.p12')}</p><br />
                        <p>{i18n.t('FT.p13')}
                        </p><br />
                        <ul>
                            <li>{i18n.t('FT.li13')}</li>
                            <li>{i18n.t('FT.li14')}</li>
                            <li>{i18n.t('FT.li15')} </li>
                        </ul><br />
                        <p>{i18n.t('FT.p14')}
                        </p><br />
                        <ul>
                            <li>{i18n.t('FT.li16')}</li>
                            <li>{i18n.t('FT.li17')}</li>
                            <li>{i18n.t('FT.pli18')}</li>
                            <li>{i18n.t('FT.li19')} </li>
                            <li>{i18n.t('FT.li10')}</li>
                        </ul><br />
                        <p>{i18n.t('FT.p15')}
                        </p><br />
                        <p>{i18n.t('FT.p16')}
                        </p><br />
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default FebreTifoide
