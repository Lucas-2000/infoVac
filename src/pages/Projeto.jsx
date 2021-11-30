import React from 'react'
import Header from '../components/Header'
import '../styles/global.scss'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'
import Professor1 from '../assets/images/Professor1.png'
import Professor2 from '../assets/images/Professor2.png'
import Kalili from '../assets/images/Kalili.jpg'

const Projeto = () => {
    return (
        <div>
            <Header />
            <section className="banner-projeto">
            <div className="banner-text">
                    <div className="content col">
                        <h1>Conheça o Projeto...</h1>
                        <h2>Descubra qual o objetivo e quem está por trás desse projeto de extensão</h2>
                    </div>
                </div>
                <a href="#page">
                <div className="banner-button">Saiba Mais</div>
                </a>
            </section>
            <section id="page">
                    <Fade bottom>
                        <h1>PROJETO DE EXTENSÃO INTERNACIONAL</h1>
                        <p>
                             Os projetos de extensão internacional fazem parte da internacionalização do currículo. Por isso, eles tem uma proposta de conteúdo internacional e os encontros acontecem com o professor do Brasil e com o professor da universidade parceira em espanhol ou inglês. 
                        </p><br/>
                        <h2 className="title">Objetivo do projeto</h2>
                        <p>
                        Os microrganismos estão em toda a parte, tanto no ambiente como no nosso corpo. Quando uma pessoa é suscetível e eles encontram um organismo adverso, isso pode causar doença e morte.
                        </p><br/>
                        <p>
                        O corpo tem muitas formas de se defender dos agentes patogénicos (organismos causadores de doença). A pele, as mucosas e os cílios (pelos microscópicos que retiram os fragmentos dos pulmões) funcionam como barreiras físicas para evitar, desde logo, que os agentes patogénicos entrem no corpo.  Quando um agente patogénico infeta o corpo, as nossas defesas, chamadas de sistema imunitário, são desencadeadas e o agente patogénico é atacado e destruído ou vencido.
                        Mas precisamos ficar doentes para gerar imunidade contra o agente patogénico?
                        </p><br/>
                        <p>
                        Claro que não, temos as vacinas que estimula nosso organismo a criar células de defesa, assim quando entrar em contato com agente patogénico perigoso no futuro, o seu sistema imunitário será capaz de responder imediatamente, protegendo contra a doença. 
                        </p><br/>
                        <p>
                        Mas quais vacinas fazem parte do Sistema único de saúde no Brasil e em outros países? Por que não todas as vacinas na rede particular fazem parte do Sistema Único de Saúde? E como poderiam ser adicionadas?
                        Este e alguns pontos serão discutidos e ver quais iniciativas podem ser feitas para alertar da importância da vacina para evitar que doenças erradicadas voltem.
                        </p><br/>
                        <section className="professores">
                            <h2 className="title">Professores Orientadores</h2><br/>

                            <div className="professor">
                                <img src={Professor1} alt="" className="img-professor" />
                                <p>
                                    <h3>Profa. Alessandra Finardi Dastoli</h3>
                                    Mestrado pela Universidade de São Paulo na área de Biotecnologia, Especialização em Engenharia Genética pelo Instituto Butantan, Graduada em Biologia pela Universidade São Judas. Curso de Biologia Molecular Computacional pela USP. Experiências nas áreas de genética, biologia molecular, Imunologia (citometria de fluxo). Docente da Universidade São Judas nos Cursos de saúde e Ciências Biológicas. Pesquisadora convidada do Hospital Alemão Oswaldo Cruz
                                </p><br/>
                            </div>
                            <div className="professor">
                                <img src={Professor2} alt="" className="img-professor" />
                                <aside>
                                <p>
                                    <h3>Prof. Raul Barroso</h3>
                                    Médico Cirujano con Maestría y especialidad en Nutrición Clínica, candidato a Doctor en Ciencias de la Salud por la Universidad Anáhuac México, Campus Norte. 
                                    Embajador para México y América Latina de la International Association of Medical Science Educators (IAMSE). 
                                    Actual Vicepresidente de la Sociedad Mexicana de Anatomía para el bienio 2021-2022, miembro de la Asociación Panamericana de Anatomía. 
                                    Miembro de diferentes comités editoriales de revistas indexadas entre las que destacan el European Journal of Anatomy y Proceedings of Scientific Research.
                                    Responsable de las líneas de investigación: o Deterioro cognitivo y su asociación al estado nutricional. o Nuevas tecnologías educativas (VR y AR) aplicadas a la educación médica.
                                </p><br/></aside>
                                </div>
                                <div className="professor">
                                <img src={Kalili} alt="" className="img-professor" />
                                <aside>
                                <p>
                                    <h3>Prof. Roberto Marcos Kalili</h3>
                                    Degree in Engineering from Mackenzie University in 1989, post-degree in Finance (master’s dregree), 1998, Marketing and Designer especialist – complementary courses. WEB developer (PHP, Coldfusion). Professor in Mackenzie University (since 1990) and São Judas University (since 2013), teaching for Engineering courses and IT.
                                    I was a Corporate IT Manager in Brasilata S/A Embalagens Metálicas (one of ten best can industries from Brasil), responsible for 3 national unities (SP, RS, GO), managing their budget and projects.
                                    Build, implemented and manage some projects like industry automation, ERP (including millennium bug), trainings, business intelligence development, PABX projects, and more. System and projects management using SCRUM methodology. Head from HR IT selection and responsibilities and jobs distribution.
                                    Was a partner in benefits agency (Redevantagens), responsible for artists, magazines and important people’s discount clubs, doing the base development and management (including dashboards and control).
                                    Actually, CTI in Actapar, applying consulting in Horizontal Innovation, in partner with mr. Antônio Carlos Teixeira Álvares, FGV Teacher and Innovation expert.
                                </p><br/></aside>
                                </div>

                        </section>
                        <section className="alunos">
                            <h2 className="title">Alunos participantes</h2><br/>
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
            <Footer/>
        </div>
    )
}

export default Projeto
