import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import hepatite from '../assets/images/hepatiteb.jpg'
import '../styles/vaccines.scss'

const HepatiteB = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <div id="page-vaccines">
                <main>
                    <strong>Vacina da hepatite B</strong>
                    <img src={hepatite} alt="Hepatite B" />
                    <strong>O que previne:</strong>
                    <p>Trata-se de vacina inativada, portanto, não tem como causar a doença.</p>
                    <p>É composta por proteína de superfície do vírus da hepatite B purificado, hidróxido de alumínio, cloreto de sódio e água para injeção. Pode conter fosfato de sódio, fosfato de potássio e borato de sódio.</p>
                    <p>A rede pública utiliza a apresentação multidose (mais de uma dose por frasco), que contém timerosal (derivado do mercúrio) como conservante.</p>
                    <strong>Indicação:</strong>
                    <p>Para pessoas de todas as faixas etárias. Faz parte da rotina de vacinação das crianças, devendo ser aplicada, de preferência, nas primeiras 12-24 horas após o nascimento, para prevenir hepatite crônica – forma que acomete 90% dos bebês contaminados ao nascer.</p>
                    <p>Especialmente indicada para gestantes não vacinadas.</p>
                    <strong>Contraindicação:</strong>
                    <p>Não deve ser aplicada em pessoas que apresentaram anafilaxia com qualquer componente da vacina ou com dose anterior. Ou nas que desenvolveram púrpura trombocitopênica após dose anterior de vacina com componente hepatite B.</p>
                    <strong>Esquema de doses:</strong>
                    <ul>
                        <li>Para a vacinação rotineira de crianças, o Programa Nacional de Imunizações (PNI) adotou o esquema de quatro doses: uma dose em formulação isolada ao nascimento e doses aos 2, 4 e 6 meses de vida, incluídas na vacina pentavalente de células inteiras. A Sociedade Brasileira de Pediatria (SBP) e a Sociedade Brasileira de Imunizações (SBIm) recomendam os esquemas de quatro doses (adotado pelo PNI) ou de três doses: ao nascimento, em formulação isolada, e aos 2 e 6 meses de vida, como parte da vacina hexavalente acelular. Aos 4 meses é recomendada a vacina penta acelular, que não contém o antígeno hepatite B em sua formulação.</li>
                        <li>Para crianças mais velhas, adolescentes e adultos não vacinados no primeiro ano de vida, o PNI, a SBP e a SBIm recomendam três doses, com intervalo de um ou dois meses entre primeira e a segunda doses e de seis  meses entre a primeira e a terceira.</li>
                    </ul>
                    <strong>Via de aplicação:</strong>
                    <ul>
                        <li>Não são necessários cuidados especiais antes da vacinação.</li>
                        <li>Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora.</li>
                        <li>Compressas frias aliviam a reação no local da aplicação.</li>
                        <li>Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.</li>
                        <li>Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais que 24 a 72 horas (dependendo do sintoma), devem ser investigados para verificação de outras causas.</li>
                    </ul>
                    <strong>Efeitos e eventos adversos:</strong>
                    <ul>
                        <li>Em 3% a 29% dos vacinados pode ocorrer dor no local da aplicação; endurecimento, inchaço e vermelhidão acometem de 0,2% a 17% das pessoas.</li>
                        <li>Em relação às manifestações gerais, de 1% a 6% dos vacinados apresentam febre bem tolerada e autolimitada nas primeiras 24 horas após a aplicação; cansaço, tontura, dor de cabeça, irritabilidade e desconforto gastrintestinal acometem de 1% a 20%.</li>
                        <li>A ocorrência de púrpura trombocitopênica idiopática após administração da vacina hepatite B é um evento raro, registrado em menos de 0,01% dos vacinados, e até hoje não foi bem estabelecido se esses poucos casos estão de fato relacionados à vacina ou se foi apenas coincidência. Nestes casos, as manchas roxas ou avermelhadas na pele e a diminuição da contagem de plaquetas que caracterizam a doença surgiram poucos dias a até dois meses depois da vacinação.</li>
                        <li>Anafilaxia também é muito rara: um caso em 600 mil adolescentes e adultos vacinados, sendo mais rara ainda em crianças.</li>
                        <li>Tais eventos adversos estão relacionados à vacina hepatite B isolada. Aqueles associados às vacinas combinadas com componente hepatite B podem ser encontrados nos tópicos que tratam de cada uma especificamente: DTPa-VIP-HB/Hib e DTPw-HB/Hib e vacina combinada hepatite A e B.</li>
                    </ul>
                    <strong>Onde pode ser encontrada:</strong>
                    <ul>
                        <li>Na rede pública, para todas as pessoas. Pode ser usada a vacina hepatite B isolada ou, para as doses dos 2, 4 e 6 meses de idade, na apresentação combinada a outras vacinas.</li>
                        <li>Nos serviços privados de vacinação é encontrada em apresentação isolada para todas as idades; em apresentação combinada DTPa-VIP-HB/Hib para menores de 7 anos; e na apresentação combinada com a vacina hepatite A (vacina hepatite A e B) para crianças maiores de 1 ano, adolescentes e adultos.</li>
                    </ul>
                </main>
            </div>
        </div>
    )
}

export default HepatiteB
