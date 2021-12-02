import React from 'react'
import Header from '../components/Header'
import '../styles/global.scss'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'
import Professor1 from '../assets/images/Professor1.png'
import Professor2 from '../assets/images/Professor2.png'
import Kalili from '../assets/images/Kalili.jpg'
import ScrollIndicator from './ScrollIndicator';
import { i18n } from '../translate/i18n'

const Projeto = () => {
    return (
        <div>
            <Header />
            <section className="banner-projeto">
                <div className="banner-text">
                    <div className="content col">
                        <h1>{i18n.t('titleBanner.projeto')}</h1>
                        <h2>{i18n.t('subtitleBanner.projeto')}</h2>
                    </div>
                </div>
                <a href="#page">
                    <div className="banner-button">{i18n.t('button.saiba')}</div>
                </a>
            </section>
            <ScrollIndicator />
            <section id="page">
                <Fade bottom>
                    <h2>{i18n.t('projeto.title')}</h2>
                    <p>
                    {i18n.t('projeto.p1')}
                    </p><br />
                    <h2 className="title">{i18n.t('projeto.title2')}</h2>
                    <p>
                    {i18n.t('projeto.p2')}
                    </p><br />
                    <p>
                    {i18n.t('projeto.p3')}
                    </p><br />
                    <p>
                    {i18n.t('projeto.p4')}
                    </p><br />
                    <p>
                    {i18n.t('projeto.p5')}
                    </p><br />
                    <section className="professores">
                        <h2 className="title">{i18n.t('projeto.title3')}</h2><br />

                        <div className="professor">
                            <img src={Professor1} alt="" className="img-professor" />
                            <p>
                                <h3>Profa. Alessandra Finardi Dastoli</h3>
                                {i18n.t('projeto.p6')}
                            </p><br />
                        </div>
                        <div className="professor">
                            <img src={Professor2} alt="" className="img-professor" />
                            <aside>
                                <p>
                                    <h3>Prof. Raul Barroso</h3>
                                    {i18n.t('projeto.p7')}
                                </p><br /></aside>
                        </div>
                        <div className="professor">
                            <img src={Kalili} alt="" className="img-professor" />
                            <aside>
                                <p>
                                    <h3>Prof. Roberto Marcos Kalili</h3>
                                    {i18n.t('projeto.p8')}
                                </p><br /></aside>
                        </div>
                    </section>
                    <section className="alunos">
                        <h2 className="title">{i18n.t('projeto.title4')}</h2><br />
                        <table>
                            <tr>
                                <td>Alexandra de Oliveira S Silva</td>
                                <td>Ana Carolina Vilas Boas de Menezes</td>
                                <td>Ana Lucia de Almeida Dias</td>
                                <td>Dayana Cristina Moura Paulista</td>
                            </tr>
                            <tr>
                                <td>João Victor Lopes</td>
                                <td>Luis Roberto Hernández Jiménez</td>
                                <td>Luiza da Silvai</td>
                                <td>Luna Yessenia Valle Camacho</td>
                            </tr>
                            <tr>
                                <td>Mayara Ferrari Rigoni</td>
                                <td>Mileny Gabriely da Silva Sousa</td>
                                <td>Alexandra de O. S. Silva</td>
                                <td>Ana Carolina V. B. De Menezes</td>
                            </tr>
                            <tr>
                                <td>Ana Lucia de A. Dias</td>
                                <td>Dayana Cristina M. Paulista</td>
                                <td>João Victor Lopes</td>
                                <td>Luis Roberto H. Jiménez</td>
                            </tr>
                            <tr>
                                <td>Luiza da Silva</td>
                                <td>Luna Y. V. Camacho</td>
                                <td>Mayara F. Rigoni</td>
                                <td>Mileny Gabriely da S. Sousa</td>
                            </tr>
                            <tr>
                                <td>Angela Cristina da Silva</td>
                                <td>Eduardo Henrique Hack Sanso</td>
                                <td>Caylane Laiza de Carvalho</td>
                                <td>Sheila Rodrigues Dos Santos</td>
                            </tr>
                            <tr>
                                <td>Émelim da Silva Santos</td>
                                <td>Maria Eduarda Sete e Silva</td>
                                <td>Gabriel Carvalho Fernandes</td>
                                <td>Isabela Anile Lavechia</td>
                            </tr>
                            <tr>
                                <td>Fernanda Moura</td>
                                <td>Isabelle Maciel</td>
                                <td>Jaqueline Santos</td>
                                <td>Larisse Grasiele</td>
                            </tr>
                            <tr>
                                <td>Maria Luiza</td>
                                <td>Naiara Kfuri</td>
                                <td>Paula Carolina</td>
                                <td>Thamiris Cardoso</td>
                            </tr>
                            <tr>
                                <td>BEATRIZ KATTENEGE VAZ</td>
                                <td>ELISÂNGELA APARECIDA DA SILVA</td>
                                <td>GABRIEL VINICIUS MAGELLA E SILVA</td>
                                <td>GUSTAVO HENRIQUE SILVA VILAÇA</td>
                            </tr>
                            <tr>
                                <td>LÍVIA EMERICK TAVARES</td>
                                <td>MARIA CAROLINA TRINDADE</td>
                                <td>MARCUS CINICIUS RODRIGUES ARAÚJO</td>
                                <td>MARIANA MATOS DE CASTRO</td>
                            </tr>
                            <tr>
                                <td>LARISSA FERREIRA LOURENÇO</td>
                            </tr>
                        </table>
                    </section>
                </Fade>
            </section>
            <Footer />
        </div>
    )
}

export default Projeto
