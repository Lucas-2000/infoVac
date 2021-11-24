import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import hepatite from '../assets/images/hepatiteb.jpg'
import '../styles/vaccines.scss'
import Fade from 'react-reveal/Fade';
import ScrollIndicator from './ScrollIndicator'

const HepatiteB = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <ScrollIndicator/>
            <div id="page-vaccines">
                <main>
                    <Fade bottom>
                    <strong className="titulo">Vacina da hepatite B</strong>
                    <img src={hepatite} alt="Hepatite B" />
                    <strong>Introdução</strong>
                    <p>A Hepatite B foi identificada em 1963 pelo geneticista Baruch Blumberg, ao isolar o que chamou de “Antígeno da Austrália” (agora chamado HBsAg) no soro de um aborígene australiano.</p>
                    <p>A doença é causa pelo vírus HBV que causa uma grave infecção no fígado, podendo gerar sintomas como dor abdominal, amarelamento dos olhos e da pele, e urina escura. Sua transmissão ocorre, principalmente, pelo contato com o sangue e/ou outros fluidos e secreções corporais contaminados. É considerada como uma infecção sexualmente transmissível.</p>
                    <p>Já a doença em sua forma crônica se refere a infecção de longo prazo, podendo ao longo do tempo causar problemas sérios de saúde como danos no fígado câncer hepático, cirrose e até a morte.</p>
                    <strong>Origem da vacina</strong>
                    <p>Os primeiros vestígios do uso de vacinas, com a introdução de versões atenuadas de vírus no corpo das pessoas, estão relacionados ao combate à varíola no século 10, na China. Porém, a teoria era aplicada de forma bem diferente: os chineses trituravam cascas de feridas provocadas pela doença e assopravam o pó, com o vírus morto, sobre o rosto das pessoas.</p>
                    <p>Foi em 1798 que o termo “vacina” surgiu pela primeira vez, graças a uma experiência do médico e cientista inglês Edward Jenner. Ele ouviu relatos de que trabalhadores da zona rural não pegavam varíola, pois já haviam tido a varíola bovina, de menor impacto no corpo humano. Ele então introduziu os dois vírus em um garoto de oito anos e percebeu que o rumor tinha de fato uma base científica. A palavra vacina deriva justamente de Variolae vaccinae, nome científico dado à varíola bovina.</p>
                    <p>Em 1881, quando o cientista francês Louis Pasteur começou a desenvolver a segunda geração de vacinas, voltadas a combater a cólera aviária e o carbúnculo, ele sugeriu o termo para batizar sua recém-criada substância, em homenagem a Jenner.</p>
                    <p>A partir de então, as vacinas começaram a ser produzidas em massa e se tornaram um dos principais elementos para o combate a doenças no mundo.</p>
                    <strong>Primeira vacina</strong>
                    <p>Em 1789, Edward Jenner, médico britânico, observou que algumas vacas tinham feridas nas tetas semelhantes às provocadas pela varíola no corpo de humanos. Os animais tinham uma versão mais leve da doença, a varíola bovina (cowpox), ou bexiga vacum. Em maio de 1796, Jenner resolveu pôr à prova a sabedoria popular que dizia que as pessoas que lidavam com gado não contraiam varíola humana. Ao observar que as mulheres responsáveis pela ordenha, quando expostas ao vírus bovino, tinham uma versão mais suave da doença, ele conduziu sua primeira experiência com James Phipps, um menino de oito anos: o médico inoculou na criança pus extraído das bolhas das mãos de Sarah Nelmes, uma leiteira que havia adquirido a varíola bovina através do contato com gado. O menino teve um pouco de febre e algumas lesões, mas não desenvolveu a infecção da varíola completa, tendo uma recuperação rápida. A partir daí, Jenner pegou o líquido da ferida de outro paciente com varíola humana e novamente expôs o garoto ao material. Semanas depois, James Phipps não havia desenvolvido a doença. Estava descoberta assim a propriedade de imunização, que recebeu o nome de vacina (do latim vacca). </p>
                    <p>Em 1797, Edward Jenner publicou os resultados de sua experiência no tratado “Investigação Sobre a Causa e os Efeitos da Varíola Vacum”, que foi apresentado à Royal Society de Londres, a Academia de Ciências do Reino Unido.</p>
                    <p>Rahima Banu, uma garota indiana de três anos, foi a última pessoa a se contaminar de forma natural pelo vírus da varíola – ela adoeceu em 16 de outubro de 1975, mas felizmente sobreviveu. A doença foi considerada erradicada em todo o mundo pela Organização Mundial da Saúde em dezembro de 1979, depois de ter matado mais de 300 milhões de pessoas só no século XX. Algumas amostras do vírus são mantidas em laboratórios, no Centro de Controle e Prevenção de Doenças, em Atlanta, nos Estados Unidos, e no Centro Estadual de Pesquisa em Virologia e Biotecnologia VECTOR, em Koltsovo, na Rússia.</p>
                    <strong>Vacina Hepatite B</strong>
                        <p>A Hepatite B foi identificada em 1963 pelo geneticista Baruch Blumberg, ao isolar o que chamou de "Antígeno da Austrália" (agora chamado de HBsAg) no soro de um aborígene australiano. Essa descoberta possibilitou que fosse feita a primeira vacina contra hepatite B, através da obtenção do antígeno imunizante diretamente do sangue de portadores humanos do vírus, o que significou uma abordagem única para a produção de uma vacina. </p>
                        <p>Por esse feito, Blumberg recebeu o Prêmio Nobel de Fisiologia ou Medicina (compartilhado com Daniel Carleton Gajdusek por seu trabalho sobre kuru), em 1976. </p>
                        <p>Mais tarde, em 1981, uma vacina derivada do tratamento de plasma sanguíneo, formulada pela equipe do Dr. Maurice Hilleman, foi licenciada. Já em 1986, uma nova técnica que usava antígeno cultivado em leveduras, criada pelo bioquímico chileno Pablo DT Valenzuela, suplantou a fórmula anterior. Considerada um marco da engenharia genética, a vacina de Valenzuela é derivada da tecnologia de recombinação de DNA, um grande avanço para o desenvolvimento de vacinas.</p>
                        <p>Atualmente, a vacina usada na prevenção da doença contém uma das proteínas do vírus, o antígeno de superfície da hepatite B (HBsAg), sendo produzida por células de levedura, nas quais o gene para HBsAg é inserido. A resposta imune ocorre quando os anticorpos do sistema imunológico para HBsAg são estabelecidos na corrente sanguínea, esse anticorpo é conhecido como anti-HBs e forma a memória do sistema imunológico contra a infecção.</p>
                    <strong>Importância da vacina</strong>
                        <p>A Hepatite B é uma doença grave do fígado causada pelo vírus da Hepatite B, que circula no sangue e nos líquidos do corpo de uma pessoa infectada.</p>
                        <p>A história de infecção pelo vírus da hepatite é marcada por evolução silenciosa: muitas vezes, só é   diagnosticadas muitos anos após estar infectados, onde acabam sendo uma das maiores causas de transplantes hepáticos no mundo. Quando realizado diagnóstico precoce e permite um tratamento adequado isso tem impacto na qualidade de vida do paciente e tem grandes chances de não desenvolver cirrose.</p>
                        <p>Por ser uma doença de transmissão parenteral. O agente infeccioso pode ocorrer por solução de continuidade (pele e mucosas), via parenteral (compartilhamento de agulhas, seringas, material de manicure e pedicure, lâminas de barbear e depilar, tatuagens, piercings, procedimentos odontológicos ou cirúrgicos que não atendam às normas de biossegurança, entre outros) e relações sexuais desprotegidas também é uma via muito predominante. E a transmissão vertical (materno-infantil) também é importante pode ter uma evolução desfavorável. </p>
                        <p>Por não ter cura apenas tratamento para melhora da qualidade de vida é importante a vacinação contra a hepatite, ela tem grande eficácia elevada para prevenir as doenças causadas pelo vírus principalmente em crianças por esse motivo é realizado o esquema vacinal no primeiro ano de vida. Desde 1998 o Ministério da Saúde, recomenda a vacinação universal das crianças a partir do nascimento. A primeira dose nas primeiras 12-24h de vida onde resulta em uma elevada eficácia na prevenção da infecção vertical. A partir de 2001, a faixa etária foi ampliada até 19 anos de idade. Essa eficácia vai diminuindo após os 40 anos. Porém sendo liberado pelo ministério da saúde a vacinação até os 59 anos de idade.</p>
                        <p>A vacina contra hepatite tem eficácia a longo prazo não sendo necessário reforços ao longo dos anos.</p>
                    <strong className="titulo">Esquema de vacinação</strong>
                    
                    <strong>Vacinação no Brasil</strong>
                    <p>A vacinação contra a hepatite b no Brasil é aplicada da seguinte forma, a 1º dose ao nascer, a 2º aos dois meses de idade, 3º no quarto mês e a 4º no sexto mês, a aplicação em crianças menores em menores de 02 anos deve ser realizada na coxa, já em adultos no músculo deltoide.</p>
                    <p>Já para crianças de 07 anos sem cartão de vacina, é seguido o esquema especifico sendo, a 1º dose após 30 dias a 2º e passados 06 meses da primeira aplicação é dá-se a 3º dose.</p>
                    <p>Sendo as dosagens 0,5 ml para menores de 19 anos e 1,0 ml a partir dos 20 anos. Crianças de até 06 anos inicia ou completa o esquema vacinal com a penta.</p>
                    <p>Gestantes podem tomar em qualquer idade e a administração subcutânea deve ser feita apenas em pacientes hemofílicos.</p>

                    <strong>Onde pode ser encontrada:</strong>
                    <p>No esquema vacinal infantil, é dada a 1º ao nascer, a 2º após dois meses e a 3º ao sexto mês, não havendo a aplicação da quarta dose.</p>
                    <p>Em qualquer outra idade, a primeira dose é aplicada na data escolhida, a segunda dose um mês depois e a terceira dose seis meses após a primeira dose.</p>
                    <p>No México, a vacina é aplicada em postos de vacinação e consultórios particulares, já em hospitais e instituições públicas aplica-se gratuitamente ao nascimento, aos 2 e 6 meses de idade.</p>
                    
                    </Fade>
                </main>
            </div>
        </div>
    )
}

export default HepatiteB
