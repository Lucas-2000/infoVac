import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import hpv from '../assets/images/hpv.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import ScrollIndicator from './ScrollIndicator'

const HPV = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <ScrollIndicator/>
            <div id="page-vaccines">
                <main>
                    <Fade bottom>
                    <strong className="titulo">Vacina da HPV</strong>
                    <img src={hpv} alt="HPV" />
                    <strong>O que é?</strong>
                    <p>O HPV (sigla em inglês para Papiloma vírus Humano) é um vírus que infecta a pele ou mucosas (oral, genital ou anal) das pessoas, provocando verrugas ano genitais (na região genital e ânus) e câncer, a depender do tipo de vírus. A infecção pelo HPV é uma Infecção Sexualmente Transmissível (IST).</p>
                    <strong>Formas de transmissão</strong>
                    <p>A transmissão do HPV se dá por contato direto com a pele ou mucosa infectada. A principal forma de transmissão é pela via sexual, que inclui contato oral-genital, genital-genital ou mesmo manual-genital. Portanto, o contágio com o HPV pode ocorrer mesmo na ausência de penetração vaginal ou anal. Também pode haver transmissão durante o parto.</p>
                    <p>Como muitas pessoas infectadas pelo HPV não apresentam sinais ou sintomas, elas não sabem que têm o vírus, mas podem transmiti-lo.</p>
                    <strong>Sinais e sintomas</strong>
                    <p>A infecção pelo HPV não apresenta sintomas na maioria das pessoas. Em alguns casos, o HPV pode ficar latente de meses a anos, sem manifestar sinais (visíveis a olho nu), ou apresentar manifestações subclínicas (não visíveis a olho nu).</p>
                    <p>A diminuição da resistência do organismo pode desencadear a multiplicação do HPV e, consequentemente, provocar o aparecimento de lesões. A maioria das infecções em mulheres (sobretudo em adolescentes) tem resolução espontânea, pelo próprio organismo, em um período aproximado de até 24 meses.</p>
                    <p>As primeiras manifestações da infecção pelo HPV surgem, aproximadamente, entre dois e oito meses, mas pode demorar até 20 anos para aparecer algum sinal da infecção. As manifestações costumam ser mais comuns em gestantes e em pessoas com imunidade baixa.</p>

                    <ul>
                        <li>Lesões clínicas – apresentam-se como verrugas na região genital e no ânus (denominadas tecnicamente condilomas acuminados e popularmente conhecidas como "crista de galo", "figueira" ou "cavalo de crista"). Podem ser únicas ou múltiplas, de tamanho variável, achatadas ou papulosas (elevadas e sólidas). Em geral, são assintomáticas, mas pode haver coceira no local. Essas verrugas, normalmente, são causadas por tipos de HPV não cancerígenos.</li>
                        <li>Lesões subclínicas (não visíveis ao olho nu) – podem ser encontradas nos mesmos locais das lesões clínicas e não apresentam sinais/sintomas. As lesões subclínicas podem ser causadas por tipos de HPV de baixo e de alto risco para o desenvolvimento de câncer</li>
                        <li>Podem acometer vulva, vagina, colo do útero, região perianal, ânus, pênis (geralmente na glande), bolsa escrotal e/ou região pubiana. Menos frequentemente, podem estar presentes em áreas extragenitais, como conjuntivas e mucosas nasal, oral e laríngea.</li>
                        <li>Mais raramente, crianças que foram infectadas no momento do parto podem desenvolver lesões verrucosas nas cordas vocais e laringe (Papiloma tose Respiratória Recorrente).</li>
                    </ul>
                    <strong>Prevenção HPV</strong>
                    <p> Existe uma diferença entre a prevenção do hpv para outras ISTs. O papilomavirus não se previne apenas com preservativos, pois não protegem totalmente a região pubiana masculina, diferente do preservativo feminino que protege mais. O fator de prevenção tido como mais efetivo atualmente é a vacina quadrivalente, que é ofertada na rede publica de saúde (SUS). Outro aspecto importante para prevenção se dá por meio da conscientização da população através de meios de comunicação. </p>
                    <strong>Diagnóstico</strong>
                    <p>O diagnóstico do HPV é atualmente realizado por meio de exames clínicos e laboratoriais, dependendo do tipo das lesões (clínicas ou subclínicas).</p>
                    <ul>
                        <li>Lesões clínicas – podem ser diagnosticadas por meio do exame clínico urológico (pênis), ginecológico (vulva/vagina/colo uterino), anal (ânus e região perianal) e dermatológico (pele).</li>
                        <li>Lesões subclínicas – podem ser diagnosticadas por exames laboratoriais, como o exame preventivo Papanicolau (citopatologia), colpos copia, periscópica e anus copia, e por meio de biopsias e histopatológica, a fim de distinguir as lesões benignas das malignas. </li>
                    </ul>
                    <strong>Tratamento</strong>
                    <p>O objetivo do tratamento das verrugas ano genitais (região genital e ânus) é a destruição das lesões. Independentemente da realização do tratamento, as lesões podem desaparecer, permanecer inalteradas ou aumentar em número e/ou volume.</p>
                    <strong>Sobre o tratamento:</strong>
                    <ul>
                        <li>Deve ser individualizado, considerando características (extensão, quantidade e localização) das lesões, disponibilidade de recursos e efeitos adversos.</li>
                        <li>Os tipos de tratamento são químicos, cirúrgicos e estimuladores da imunidade.</li>
                        <li>Podem ser domiciliares (auto aplicados: imiquimode, podofilotoxina) ou ambulatoriais (aplicados no serviço de saúde: ácido tricloroacético – ATA, podofilina, eletro cauterização, exérese cirúrgica e crioterapia), conforme indicação profissional para cada caso.</li>
                        <li>Podofilina e imiquimode não devem ser usadas na gestação.</li>
                        <li>O tratamento das verrugas ano genitais não elimina o vírus e, por isso, as lesões podem reaparecer. As pessoas infectadas e suas parcerias devem retornar ao serviço, caso se identifiquem novas lesões.</li>
                        <li>Além do tratamento de lesões visíveis, é necessário que os profissionais de saúde realizem exame clínico ano genital completo, pois pode haver lesões dentro de vagina e ânus não identificadas pela própria pessoa afetada.</li>
                    </ul>
                    <p>Pessoas com imunodeficiência – as recomendações de tratamento do HPV são as mesmas para pessoas com imunodeficiência (ex.: pessoas vivendo com HIV, transplantadas). Porém, nesse caso, o paciente requer acompanhamento mais atento, já que pessoas com imunodeficiência tendem a apresentar pior resposta ao tratamento. </p>
                    </Fade>
                </main>
            </div>
        </div>
    )
}

export default HPV
