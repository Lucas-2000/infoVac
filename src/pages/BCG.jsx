import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import bcg from '../assets/images/bcg.jpg'
import '../styles/vaccines.scss'

const BCG = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <div id="page-vaccines">
                <main>
                    <strong>Vacina BCG</strong>
                    <img src={bcg} alt="BCG" />
                    <strong>Do que é feita:</strong>
                    <p>É composta pelo bacilo de Calmette-Guérin – origem do nome BCG – obtido pela atenuação (enfraquecimento) de uma das bactérias que causam a tuberculose. Completam sua composição o glutamato de sódio e a solução fisiológica (soro a 0,9%).</p>
                    <strong>Indicação:</strong>
                    <p>A vacina é indicada de rotina a partir do nascimento até antes de a criança completar 5 anos de idade.</p>
                    <p>Pessoas de qualquer idade que convivem com portadores de hanseníase (lepra).</p>
                    <strong>Contraindicação:</strong>
                    <p>Pessoas imunodeprimidas e recém-nascidos de mães que usaram medicamentos que possam causar imunodepressão do feto durante a gestação.</p>
                    <p>Prematuros, até que atinjam 2 kg de peso.</p>
                    <strong>Esquema de doses:</strong>
                    <p>Dose única.</p>
                    <strong>Local de aplicação:</strong>
                    <p>Intradérmica.</p>
                    <strong>Cuidados antes, durante e após a vacinação:</strong>
                    <p>A vacinação não requer qualquer cuidado prévio.</p>
                    <p>Na maioria das vezes, haverá uma reação no local da aplicação com posterior formação de cicatriz. É importante não colocar produtos, medicamentos ou curativos, pois trata-se de uma resposta esperada e normal à vacina.</p>
                    <p>A revacinação de crianças que não desenvolveram cicatriz deixou de ser recomendada pelo Ministério da Saúde em fevereiro de 2019.</p>
                    <strong>Efeitos e eventos adversos:</strong>
                    <p>A BCG quase sempre deixa uma cicatriz característica, com até 1 cm de diâmetro, no local em que foi aplicada – como rotina, no braço direito. Essa reação é esperada! A resposta à vacina demora cerca de três meses (12 semanas), podendo se prolongar por até seis meses (24 semanas), e começa com uma mancha vermelha elevada no local da aplicação, evolui para pequena úlcera, que produz secreção até que vai cicatrizando.</p>
                    <p>Eventos adversos possíveis: úlceras com mais de 1 cm ou que demoram muito a cicatrizar; gânglios ou abscessos na pele e nas axilas; disseminação do bacilo da vacina pelo corpo, causando lesões em diferentes órgãos.</p>
                    <p>Segundo o Ministério da Saúde (MS), os gânglios surgem em cerca de 10% dos vacinados.</p>
                    <p>Qualquer que seja o evento, o serviço de vacinação deve notificá-lo ao órgão de vigilância em Saúde e encaminhar o paciente ao posto de saúde para acompanhamento e tratamento adequados.</p>
                    <strong>Onde pode ser encontrada:</strong>
                    <p>Nas Unidades Básicas de Saúde e nos serviços privados de vacinação.</p>
                </main>
            </div>
        </div>
    )
}

export default BCG
