import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import febreTifoide from '../assets/images/febretifosa.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'


const FebreTifoide = () => {
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
                        <h2 className="titulo">Vacina Febre Tifoide</h2>
                        <img src={febreTifoide} alt="Febre Tifoide" />
                        <p>A febre tifóide é uma doença relativamente séria e rara causada pela bactéria Salmonella enterica typhi, popularmente conhecida como "tifo". </p>
                        <p>A Febre tifóide é mais frequente em países do sudeste Asiático e África. No Brasil é observado alguns registros da doença, que são surtos isolados nas regiões Norte e Nordeste. </p>
                        <p>
                            Uma vez que a bactéria tifóide entra na corrente sanguínea, deve ser tratada imediatamente. A pessoa pode desenvolver complicações graves em órgãos como fígado, baço, vesícula biliar e até na medula óssea, o que pode levar à morte.
                        </p>
                        <p>
                            Entre os sintomas, podemos destacar:
                        </p>
                        <ul>
                            <li>Febre alta;</li>
                            <li>Mal-estar;</li>
                            <li>Dor de cabeça;</li>
                            <li>Diarreia com sangue e constipação;</li>
                            <li>Perda do apetite;</li>
                            <li>Hepatoesplenomegalia;</li>
                            <li>Dores e inchaço no abdômen;</li>
                            <li>Náuseas e vômitos;</li>
                            <li>Tosse seca;</li>
                            <li>Bradicardia;</li>
                            <li>Manchas rosadas que aparecem na região do abdômen;</li>
                            <li>Prostração.</li>
                        </ul><br />
                        <p>Os sintomas de febre tifóide podem durar várias semanas a um mês, sem o devido tratamento. Porém a grande parte dos casos evolui bem.</p><br />
                        <p>O tratamento é à base de antibióticos e reidratação, casos graves são raros o qual é indicado a internação. A média do tratamento é de aproximadamente de 14 dias.
                        </p><br />
                        <p>A prevenção se dá por meio de uma higiene pessoal adequada, os alimentos a serem consumidos devem ser bem higienizados e preparados de forma correta, como por exemplo, lavar bem as frutas e verduras, a carne deve ser bem cozida para o consumo e manter bem armazenado.
                        </p><br />
                        <p>A vacina é disponibilizada no Brasil, porém não é recomendada de rotina devido não ser uma doença pandêmica.
                        </p><br />
                        <strong>A vacina contra a Febre Tifóide</strong>
                        <p>A Vacina inativada de Febre Tifóide, tem em sua composição polissacarídeos da cápsula da bactéria (Salmonella typhi), fenol, cloreto de sódio, fosfato dissódico diidratado, fosfato monossódico diidratado e água para injeção. Não tem risco de desenvolver a doença.
                        </p><br />
                        <p>É indicada para crianças a partir de 2 anos, adolescentes e adultos que viajam para locais de alta incidência da doença e profissionais que trabalham com água contaminada e dejetos, é contraindicado para pessoas que tenham hipersensibilidade aos componentes da vacina.
                        </p><br />
                        <p>A vacina é aplicada em dose única, com a proteção de três anos, após esta data, pode haver a revacinação se acontecer o risco de surto da doença.
                        </p><br />
                        <p>Via de aplicação: Intramuscular e subcutânea.</p><br />
                        <p>Alguns efeitos, eventos adversos e possíveis reações após a vacinação:
                        </p><br />
                        <ul>
                            <li>Dor,</li>
                            <li>Vermelhidão,</li>
                            <li>Inchaço. </li>
                        </ul><br />
                        <p>Possíveis reações como:
                        </p><br />
                        <ul>
                            <li>Febre, </li>
                            <li>Dor de cabeça, </li>
                            <li>Mal-estar, </li>
                            <li>Náuseas, </li>
                            <li>Coceira.</li>
                        </ul><br />
                        <p>A vacina pode ser encontrada nos serviços privados e centros de atendimento ao viajante.
                        </p><br />
                        <p>Importante ressaltar que a proteção da vacina contra a Febre Tifóide é dada a partir do décimo quarto dia de aplicação.
                        </p><br />
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default FebreTifoide
