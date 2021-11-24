import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import covid from '../assets/images/covid.png'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import ScrollIndicator from './ScrollIndicator'

const Covid = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <ScrollIndicator/>
            <div id="page-vaccines">
                <main>
                    <Fade bottom>
                    <strong className="titulo">Vacina da Covid</strong>
                    <img src={covid} alt="Covid" />
                    <strong>Quais e como são as vacinas Covid-19 em estudo ou já em utilização?</strong>
                    <p>Várias são as tecnologias aplicadas nas vacinas que estão em desenvolvimento e/ou já em uso ao redor do mundo. Todas se dirigem contra a proteína S (de spike: espícula, em português), que é responsável pela adesão do SARS-CoV-2 às nossas células, com consequente invasão e infecção.</p>
                    <p>De acordo com as plataformas tecnológicas utilizadas, podemos dividi-las em categorias:</p>
                    <ul>
                        <li>Vacinas de vírus inteiros, atenuados ou inativados. Exemplo: Butantan/Sinovac (Coronavac);</li>
                        <li>Vacinas genéticas, de RNA mensageiro (mRNA) ou DNA. Exemplos: Pfizer/BioNTech e Moderna;</li>
                        <li>Vacinas baseadas em vetores replicantes ou não replicantes. Exemplos: Fiocruz/Oxford/AstraZeneca, Janssen/Johnson & Johnson e Sputnik V;</li>
                        <li>Vacinas de subunidades baseadas em proteína do vírus. Exemplo: Novavax;</li>
                        <li>De partículas semelhantes ao vírus (VLP).</li>
                    </ul>
                    <p>Dessas, já se encontram em uso as vacinas de mRNA, as de vetores não replicantes e as de vírus inteiros inativados. No Brasil, estão aprovadas para uso emergencial ou já registradas as vacinas Fiocruz/Oxford/AstraZeneca, Butatan/Sinovac (Coronavac), Pfizer/BioNTech e Janssen.</p>
                    <strong>Como funcionam as vacinas de vírus inteiros inativados, como a Butantan/Sinovac (Coronavac)?</strong>
                    <p>As vacinas são feitas a partir do vírus SARS-CoV-2 inativado, ou seja, morto. A inativação é feita com o auxílio de substâncias químicas que destroem o material genético do vírus e, consequentemente, impedem a sua replicação, o que o torna incapaz de causar a doença. Esse processo, no entanto, mantém íntegra a cápsula do vírus, onde está a proteína S, responsável pela ligação e penetração em nossas células.</p>
                    <p>Uma vez no organismo, o vírus vacinal é percebido como um agente estranho e desencadeia a resposta do sistema imunológico. As primeiras células envolvidas nessa resposta (células apresentadoras de antígeno) “absorvem” o vírus, o destroem em seu interior e levam a proteína S para sua superfície.</p>
                    <p>Nesse momento, os chamados linfócitos T auxiliares entram em ação. Eles detectam a proteína, encaixam-se a ela e recrutam os linfócitos B, que produzirão os anticorpos específicos contra a proteína S. Os linfócitos B também são ativados pelo próprio vírus vacinal.</p>
                    <p>Enquanto a imunidade durar, caso a pessoa vacinada tenha contato com o vírus SARS-CoV-2, o organismo será capaz de “lembrar” como neutralizá-lo rapidamente.</p>
                    <strong>Como funcionam as vacinas baseadas em vetores virais não replicantes, como a vacina de Fiocruz/Oxford/AstraZeneca, Janssen e Sputnik V?</strong>
                    <p>Para desenvolver este tipo de vacina, os pesquisadores inserem apenas o gene que codifica a produção de proteína S, responsável pela ligação do novo coronavírus com as nossas células, dentro de outro vírus, modificado para que seja incapaz de se replicar dentro do nosso organismo e causar doença ou qualquer alteração no genoma de nossas células. Esse vírus “carreador” do código genético que instrui a formação da proteína S é, portanto, apenas um vetor da informação genética para que as células humanas passem a fabricar a proteína S.</p>
                    <p>Após a vacinação e a entrada do vetor vacinal na célula humana, esse gene que codifica a proteína S é transformado em uma molécula chamada RNA mensageiro (mRNA), que contém instruções para a produção de proteínas S, o que ocorre fora do núcleo das nossas células, onde está o nosso genoma. Essas proteínas produzidas se fixam na superfície celular.</p>
                    <strong>Como funcionam as vacinas baseadas em mRNA (RNA mensageiro), como as vacinas da Pfizer?</strong>
                    <p>Vacinas usando a tecnologia de RNA mensageiro (mRNA) e sendo aplicadas em larga escala pode ser uma novidade, mas a tecnologia já vem sendo estudada há bastante tempo.</p>
                    <p>Em laboratório, os cientistas desenvolvem o mRNA sintético, que ensinará ao organismo a fabricar a proteína S do SARS-CoV-2, responsável pela ligação do vírus com as nossas células. Por ser muito instável, o mRNA é recoberto por uma capa de lipídios (tipo de gordura) que o protegerá. É essencial deixar claro que a molécula não contém outra informação, não é capaz de realizar qualquer outra tarefa e não penetra no núcleo de nossas células. Ou seja, não consegue causar a Covid-19 ou qualquer alteração no genoma humano.</p>
                    <p>Uma vez que a vacina é injetada e capturada pelas células apresentadoras de antígeno, são fabricadas a partir das “instruções” do mRNA as proteínas S do novo coronavírus. Elas, então, são transportadas até a superfície da célula, onde os processos de defesa são desencadeados:</p>
                    <strong>As vacinas são eficazes contra as novas variantes do SARS-CoV-2 que surgiram até o momento?</strong>
                    <p>Diante das evidências atuais, embora possa haver alguma perda de eficácia a depender da variante e da vacina específica, as vacinas continuam cumprindo seus papéis.  Essa questão vem sendo e continuará sendo acompanhada de perto pela ciência. Caso surja alguma variante que escape das vacinas atuais, os esquemas vacinais poderão ser revisados e os fabricantes rapidamente poderão adaptar suas vacinas.</p>
                    <strong>Por que se imunizar?</strong>
                    <p>A imunização é uma ferramenta eficaz e segura para prevenir doenças infecciosas. A vacinação elimina ou reduz drasticamente o risco de adoecimento ou de manifestações graves, que podem levar à internação e até mesmo ao óbito. Por ano, segundo a Organização Mundial da Saúde (OMS), evita de duas a três milhões de mortes.</p>
                    <strong>Programa Brasileiro de Vacinação contra a Covid-19</strong>
                    <p>Desenvolvido pelo Programa Nacional de Imunizações (PNI) em cooperação com o comitê de especialistas da Câmara Técnica Assessora, o Plano Nacional de Operacionalização da Campanha de Vacinação contra a Covid-19 (PNO) contém as diretrizes para a condução da campanha no país.</p>
                    <p>O documento foi elaborado de acordo com a viabilidade operacional das ações e sob princípios similares aos estabelecidos pela Organização Pan-Americana de Saúde (OPAS) e a Organização Mundial da Saúde (OMS). O conteúdo é atualizado por meio de informes técnicos sempre que necessário. </p>
                    </Fade>
                </main>
            </div>
        </div>
    )
}

export default Covid
