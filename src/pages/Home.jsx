import React from 'react';
import Header from '../components/Header';
import vaccines from '../assets/images/vaccines.jpg';
import vac_illustrator from '../assets/images/vac_illustrator.svg';
import Fade from 'react-reveal/Fade';
import '../styles/home.scss';

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
            <section id="page-home">
                <main>
                    <Fade bottom>
                        <h2>História da vacina – Para entender sua Importância</h2>
                        <p>
                            Em 8 de maio de 1980, a Organização Mundial de Saúde declarava erradicada uma das piores, mais cruéis e catastróficas moléstias já existentes. Tratava-se da varíola, doença infecto-contagiosa exclusiva do homem, causada por um vírus chamado Orthopoxvirus variolae. Durante os 80 anos em que a varíola ficou ativa, a varíola matou mais de 300 milhões de indivíduos. Esse número é bem superior ao de outras moléstias, como a tuberculose, a hanseníase, a gripe espanhola, a peste e até mesmo a Aids. Nem mesmo a soma do número de mortos de todas as guerras (inclusive as mundiais), superaria o de vítimas da varíola.
                        </p><br/>
                        <p>
                            No século XV, que apareceram as primeiras descrições de indução de imunidade na tentativa de salvar vidas humanas, prevenindo a infecção pela varíola. Procedimentos realizados pelos chineses e turcos, mostrando que crostas dissecadas de pústulas de varíola humana (apenas de casos de sobreviventes à doença) eram inaladas ou sopradas nas narinas das crianças com o auxílio de um tubo de prata, estas não adquiriam a doença.
                        </p><br/>
                        <p>
                            Em 1796, o médico inglês Edward Jenner introduziu um grande avanço nos procedimentos da variolização. Naquela época, Jenner fazia atendimentos médicos em área rural da Inglaterra e observou que ordenhadores que contraíam a varíola bovina, uma forma branda da moléstia que provocava pústulas no úbere e nas tetas das vacas, se tornavam imunes à varíola humana. Este fato o deixou muito intrigado e o levou a formular a seguinte hipótese: se o fluido das pústulas da varíola bovina fosse inoculado em indivíduos saudáveis, eles se tornariam imunes à varíola humana? Para testar essa hipótese, Jenner inoculou fluido da varíola bovina em um garoto de 8 anos de idade e, posteriormente, infectou-o, intencionalmente, com a varíola humana! Felizmente, ele estava certo, e o garoto não adoeceu (Fig. 1). 
                        </p><br/>
                        <div className="img-text">
                            <img src={vaccines} alt="Vacina aplicada em garoto de 8 anos" />
                            <p>Fig. 2. Edward Jenner e o garoto de 8 anos (<a href="https://www.bio.fiocruz.br/index.php/br/noticias/1738-conheca-a-historia-das-vacinas" target="_blank" rel="noreferrer">https://www.bio.fiocruz.br/index.php/br/noticias/1738-conheca-a-historia-das-vacinas</a>)</p>
                        </div>
                        <p>
                            A descoberta de Jenner foi utilizada em campanhas de vacinação mundial pela Organização Mundial da Saúde (OMS). As campanhas resultaram na erradicação da varíola humana em todos os países. A partir de 1980, a OMS convocou todos os laboratórios no mundo para destruir os estoques do vírus da varíola, a fim de evitar que ele pudesse ser reintroduzido no ambiente de forma acidental ou mesmo criminosa. Dois laboratórios têm a guarda oficial do estoque deste vírus: o Centro de Controle de Doenças (CDC) de Atlanta, EUA, e o Instituto Vector, na Rússia. Atualmente, a grande preocupação é que esse vírus seja utilizado como arma biológica.
                        </p><br/>
                        <p>
                            Até hoje, é a única doença humana já erradicada, um exemplo do que podemos alcançar quando todas as nações trabalham em conjunto. O sucesso do programa de erradicação forneceu conhecimento e ferramentas vitais no que diz respeito à vigilância epidemiológica, aos benefícios da vacinação de bloqueio e à importância da promoção da saúde no enfrentamento a enfermidades como a poliomielite e o ebola. Além disso, permitiu estabelecer as bases para o fortalecimento de programas de imunização, de atenção primária e impulsionou o acesso universal à saúde em diversos países. No Brasil, o direito é garantido desde a Constituição de 1988.
                        </p><br/>
                    </Fade>
                </main>
            </section>
        </main>
    )
}

export default Home
