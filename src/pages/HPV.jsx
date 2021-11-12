import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import hpv from '../assets/images/hpv.jpg'
import '../styles/vaccines.scss'

const HPV = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <div id="page-vaccines">
                <main>
                    <strong>Vacina da HPV</strong>
                    <img src={hpv} alt="HPV" />
                    <strong>O que previne:</strong>
                    <p>Infecções persistentes e lesões pré-cancerosas causadas pelos tipos de HPV 6,11,16,18. Também previne o câncer de colo do útero, da vulva, da vagina, do ânus e verrugas genitais (condiloma).</p>
                    <strong>Do que é feita:</strong>
                    <p>Trata-se de vacina inativada, portanto, não tem como causar a doença.</p>
                    <p>É composta pelas proteínas L1 dos papilomavírus humano (HPV) tipos 6,11,16,18, sulfato de hidroxifosfato de alumínio, cloreto de sódio, L-histidina, polissorbato 80, borato de sódio e água para injeção.</p>
                    <strong>Indicação:</strong>
                    <ul>
                        <li>Meninas de 9 a 14 anos de idade;</li>
                        <li>Meninas de 15 anos que já tenham tomado uma dose;</li>
                        <li>Meninos de 11 a 14 anos;</li>
                        <li>Indivíduos de 9 a 26 anos de ambos os sexos nas seguintes condições: convivendo com HIV/Aids; pacientes oncológicos em quimioterapia e/ou radioterapia; transplantados de órgãos sólidos ou de medula óssea.</li>
                    </ul>
                    <strong>Contraindicação:</strong>
                    <p>Gestantes e pessoas que apresentaram anafilaxia após receber uma dose da vacina ou a algum de seus componentes.</p>
                    <strong>Esquemas de doses:</strong>
                    <ul>
                        <li>A vacina é licenciada para meninas e mulheres a partir dos 9 anos aos 45 anos e para meninos e homens entre 9 e 26 anos. O esquema deve ser iniciado o mais cedo possível.</li>
                        <li>São recomendadas duas ou três doses, dependendo da idade de início da vacinação.</li>
                        <li>Para meninas e meninos de 9 a 14 anos, 11 meses e 29 dias são indicadas duas doses, com intervalo de seis meses entre elas (0 - 6 meses).</li>
                        <li>A partir dos 15 anos, são três doses: a segunda, um a dois meses após a primeira, e a terceira, seis meses após a primeira dose (0 - 1 a 2 - 6 meses).</li>
                        <li>Independentemente da idade, pessoas imunodeprimidas por doença ou tratamento devem receber três doses: a segunda, um a dois meses após a primeira, e a terceira, seis meses após a primeira dose (0 - 1 a 2 - 6 meses).</li>
                    </ul>
                    <strong>Via de aplicação:</strong>
                    <p>Intramuscular</p>
                    <strong>Cuidados antes, durante e após a vacinação:</strong>
                    <ul>
                        <li>Antes da vacinação, é preciso questionar a mulher sobre a possibilidade de gravidez. Contudo, se a vacina for aplicada sem que se saiba da gravidez, nenhuma intervenção se faz necessária.</li>
                        <li>Não são necessários cuidados especiais antes da vacinação.</li>
                        <li>Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora.</li>
                        <li>Compressas frias aliviam a reação no local da aplicação.</li>
                        <li>Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.</li>
                        <li>Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais de 24 a 72 horas (dependendo do sintoma), devem ser investigados para verificação de outras causas.</li>
                    </ul>
                    <strong>Efeitos e eventos adversos:</strong>
                    <p>Na Inglaterra, após dois anos de incorporação da vacina no calendário do governo, e da administração de 4,5 milhões de doses, somaram-se 4.703 eventos adversos. Desse total, 17% foram manifestações no local da aplicação (dor, vermelhidão e inchaço); 11%, manifestações alérgicas (urticária e prurido); e 37%, manifestações gerais como náuseas, vômitos e dor de cabeça. Foram registradas ainda reações psicogênicas (21%) descritas como pânico e desmaios causados pelo medo da injeção e não pela vacina – principalmente em adolescentes e mulheres jovens. Não ocorreu nenhum caso de doença neurológica, paralisia ou doença autoimune.</p>
                    <strong>Onde pode ser encontrada:</strong>
                    <p>Nas Unidades Básicas de Saúde</p>
                </main>
            </div>
        </div>
    )
}

export default HPV
