import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import febre from '../assets/images/febretifosa.jpg'
import '../styles/vaccines.scss'

const FebreTifoide = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <div id="page-vaccines">
                <main>
                    <strong>Vacina Febre Tifoide</strong>
                    <img src={febre} alt="Febre Tifoide" />
                    <strong>Do que é feita?</strong>
                    <p>Trata-se de vacina inativada, portanto, não tem como causar a doença.</p>
                    <p>É composta por polissacarídeos da cápsula da bactéria (Salmonella typhi), fenol, cloreto de sódio, fosfato dissódico diidratado, fosfato monossódico diidratado e água para injeção.</p>
                    <strong>Indicação:</strong>
                    <ul>
                        <li>
                            Crianças a partir de 2 anos de idade, adolescentes e adultos que viajam para áreas de alta incidência da doença, em situações específicas de longa permanência e após análise médica criteriosa.
                        </li>
                        <li>
                            Profissionais que lidam com águas contaminadas e dejetos.
                        </li>
                    </ul>
                    <strong>Contraindicação:</strong>
                    <p>
                        Hipersensibilidade conhecida a qualquer um dos componentes da vacina.
                    </p>
                    <strong>Esquema de doses:</strong>
                    <p>
                    Uma dose. A vacina confere proteção por três anos, de modo que a revacinação pode ser recomendada após este período, se o risco de adoecimento persistir ou retornar.
                    </p>
                    <strong>Via de aplicação:</strong>
                    <p>Intramuscular ou subcutânea.</p>
                    <strong>Cuidados antes, durante e após a vacinação:</strong>
                    <ul>
                        <li>Em caso de febre recomenda-se adiar a vacinação até a melhora.</li>
                        <li>Não são necessários cuidados especiais antes da vacinação.</li>
                        <li>Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos, pode ser usada medicação para dor, sob recomendação médica.</li>
                        <li>Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.</li>
                        <li>Sintomas de eventos adversos persistentes, que se prolongam por mais de 72 horas (dependendo do sintoma), devem ser investigados para verificação de outras causas.</li>
                    </ul>
                    <strong>Efeitos e eventos adversos:</strong>
                    <p>A vacina febre tifoide causa poucas reações, sendo as mais frequentes relacionadas com o local da aplicação: dor, em 3,6% a 9,4% dos vacinados; vermelhidão, em 2,4% a 5,4%; inchaço, em 1,7% a 1,8%. Outras possíveis reações: febre, em 1,5% a 16,2%; dor de cabeça, em 10% a 7,8%; mal-estar, em 0,9% a 4%; náuseas, em 2,1% a 5%; e coceira, em 1,7% a 1,8%.</p>
                    <strong>Onde pode ser encontrada:</strong>
                    <p>Nos serviços privados de vacinação e centros de atendimento ao viajante.</p>
                </main>
            </div>
        </div>
    )
}

export default FebreTifoide
