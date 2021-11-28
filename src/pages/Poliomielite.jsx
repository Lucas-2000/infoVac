import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import poliomielite from '../assets/images/poliomielite.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import ScrollIndicator from './ScrollIndicator'
import Footer from '../components/Footer'

const Poliomelite = () => {
    return (
        <div>
            <Header />
            <section className="banner-vacinas">
            <div className="banner-text">
                    <div className="content col">
                        <h1>Como funcionam as Vacinas?</h1>
                        <h2>Saiba informações cruciais sobre as vacinas mais conhecidas</h2>
                    </div>
                </div>
                <a href="#component-menuVaccines">
                <div className="banner-button">Saiba Mais</div>
                </a>
            </section>
            <MenuVaccines />
            <div id="page-vaccines">
                <main>
                    <Fade bottom>
                    <strong className="titulo">Vacina poliomielite</strong>
                    <img src={poliomielite} alt="Poliomielite" />
                    <strong>Do que é feita:</strong>
                    <p>Vacina Oral Poliomielite (VOP) – É uma vacina oral atenuada bivalente, ou seja, composta pelos vírus da pólio tipos 1 e 3, vivos, mas “enfraquecidos”. Contém ainda cloreto de magnésio, estreptomicina, eritromicina, polissorbato 80, L-arginina e água destilada.</p>
                    <p>Vacina Inativada Poliomielite (VIP) – Por ser inativada, não tem como causar a doença. É uma vacina trivalente e injetável, composta por partículas dos vírus da pólio tipos 1, 2 e 3. Contém ainda 2-fenoxietanol, polissorbato 80, formaldeído, meio Hanks 199, ácido clorídrico ou hidróxido de sódio. Pode conter traços de neomicina, estreptomicina e polimixina B, utilizados durante a produção.</p>
                    <strong>Indicação:</strong>
                    <ul>
                        <li>Devido à erradicação da poliomielite em diversas regiões do mundo e também para evitar a paralisia que pode ser causada pelo vírus contido na vacina oral (VOP), a Organização Mundial da Saúde (OMS) recomenda que países como o Brasil, de baixo risco para o desenvolvimento da doença, passem a utilizar a vacina inativada (VIP), sempre que possível.</li>
                        <li>Desde 2016, o Programa Nacional de Imunizações (PNI) adota a vacina VIP nas três primeiras doses do primeiro ano de vida (aos 2, 4 e 6 meses de idade) e a VOP no reforço e campanhas anuais de vacinação.</li>
                        <li>A Sociedade Brasileira de Imunizações (SBIm) orienta que a VIP seja a vacina de preferência na administração de todas as doses.</li>
                        <li>A vacina poliomielite é indicada de rotina para todas as crianças menores de 5 anos.</li>
                        <li>Para viajantes adolescentes e adultos com destino a países onde a doença é endêmica, como o Paquistão e o Afeganistão, ou a locais onde há risco de transmissão e registro de casos de poliomielite causada pelo vírus vacinal.</li>
                    </ul>
                    <strong>Contraindicação:</strong>
                    <ul>
                        <p>VOP</p>
                        <li>Gestantes e todos os que convivem com esses grupos; pessoas que sofreram anafilaxia após o uso de componentes da fórmula da vacina (em especial os antibióticos neomicina, polimixina e estreptomicina); pessoas que desenvolveram a pólio vacinal após dose anterior.</li>
                        <li>Pessoas com deficiência do sistema imunológico causada por doença oumedicamentos; portadoras do vírus do HIV; gestantes e todos osque convivem com esses grupos; pessoas que sofreram anafilaxiaapós o uso de componentes da fórmula da vacina (em especial osantibióticos neomicina,</li>
                    </ul>
                    <ul>
                        <p>VIP</p>
                        <li>A história de reação alérgica grave (anafilaxia) à dose anterior da vacina, ou a algum de seus componentes, contraindica doses futuras.</li>
                    </ul>
                    <strong>Esquemas de doses:</strong>
                    <ul>
                        <li>A imunização contra a poliomielite deve ser iniciada a partir dos 2 meses de vida, com mais duas doses aos 4 e 6 meses, além dos reforços entre 15 e 18 meses e aos 5 anos de idade.</li>
                        <li>VIP – Na rotina de vacinação infantil: aos 2, 4 e 6 meses, com reforços entre 15 e 18 meses e entre 4 e 5 anos de idade. Na rede pública as doses, a partir de um ano de idade, são feitas com VOP.</li>
                        <li>VOP – Na rotina de vacinação infantil nas Unidades Básicas de Saúde, é aplicada nas doses de reforço dos 15 meses e dos 4 anos de idade e em campanhas de vacinação para crianças de 1 a 4 anos.</li>
                    </ul>
                    <strong>Via de aplicação:</strong>
                    <ul>
                        <li>VOP – Oral.</li>
                        <li>VIP – Intramuscular.</li>
                    </ul>
                    <strong>Cuidados antes, durante e após a vacinação:</strong>
                    <p>Para ambas as vacinas</p>
                    <ul>
                        <li>Em crianças com febre moderada a alta (acima de 38ºC), a vacinação deve ser adiada até que o quadro clínico melhore.</li>
                        <li>Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.</li>
                        <li>Sintomas de eventos adversos graves ou persistentes devem ser investigados para verificação de outras causas.</li>
                    </ul>
                    <p>VOP</p>
                    <ul>
                        <li>Diarreia e vômitos leves não contraindicam a vacinação, mas recomenda-se adiá-la ou repetir a dose após quatro semanas.</li>
                        <li>É aconselhável interromper a amamentação por uma hora antes e depois da administração da vacina — se o bebê golfar ou vomitar, não é preciso repetir a dose.</li>
                    </ul>
                    <strong>Efeitos e eventos adversos:</strong>
                    <ul>
                        <li>Poliomielite associada à vacina (VAPP): Ocorre quando o vírus da vacina consegue causar poliomielite na pessoa vacinada ou em quem convive com ela. Isso pode acontecer de quatro a 40 dias após a vacinação. A taxa de registros é de um caso para cada 3,2 milhões de doses aplicadas. Esse risco é muito maior (quase o dobro) quando da aplicação da primeira dose. Para quem tem comprometimento do sistema imunológico, o risco é cerca de 3.200 vezes maior. No Brasil, entre 1989 e 2011, foram registrados 46 casos de VAPP, todos em crianças (um caso para cada 1,6 milhão de doses aplicadas). Os sintomas começam com febre, dificuldade de movimentação, dor e fraqueza dos músculos, principalmente das pernas, mas pode atingir os músculos usados na respiração. Depois de alguns dias, a dor desaparece, melhora a dificuldade de movimentação, mas os músculos começam a atrofiar e a amolecer.</li>
                        <li>Meningite asséptica e encefalite: Apesar de muito rara, é um risco maior para crianças imunodeficientes. Trata-se de uma inflamação do cérebro ou das membranas que o protegem. Podem acontecer sintomas que afetam a consciência (alucinações, mudanças de personalidade, agitação, sonolência, torpor e coma), sintomas que refletem as áreas afetadas do cérebro, em geral relacionados</li>
                        <li>Com a orientação espacial ou a sensibilidade (perda localizada de movimento em determinada parte do corpo, falta de coordenação motora, movimentos involuntários, sensações estranhas ou perda de sensações em partes do corpo) e sintomas de irritação do cérebro (crises convulsivas).</li>
                        <li>Reações de alergia: São raras e se devem aos componentes da vacina. Podem acontecer urticária e erupções na pele com coceira, mas não contraindicam doses subsequentes.</li>
                        <li>Poliomielite por vírus derivado da vacina (VDPV): Acontece por uma instabilidade genética do vírus da vacina ou pela combinação do material genético do vírus vacinal com outros vírus que vivem no intestino, propiciando o surgimento de vírus mutantes capazes de causar poliomielite e de serem transmitidos para outras pessoas. Até o final de 2013, nenhum VDPV foi identificado no Brasil.</li>
                        <li>Com a apresentação inativada pode ocorrer eritema discreto no local da aplicação (em menos de 3% dos vacinados), endurecimento (em menos de 12%), e dor geralmente leve (em menos de 30% dos vacinados). A febre é rara, ocorre em menos de 10% dos vacinados. A anafilaxia também, com risco adicional para pessoas que têm alergia grave aos antibióticos da fórmula (estreptomicina, neomicina e polimixina B).</li>
                    </ul>
                    <strong>Onde pode ser encontrada:</strong>
                    <p>Apresentação isolada está disponível nas Unidades Básicas de Saúde para as três primeiras doses do esquema infantil de rotina. As demais doses para a prevenção da poliomielite são feitas com a vacina VOP.</p>
                    <p>Nas Unidades Básicas de Saúde, para as doses de reforço e nas campanhas de vacinação.</p>
                    </Fade>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Poliomelite
