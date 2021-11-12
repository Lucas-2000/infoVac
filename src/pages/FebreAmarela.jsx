import React from 'react'
import Header from '../components/Header'
import MenuVaccines from '../components/MenuVaccines'
import febreAmarela from '../assets/images/febreamarela.jpg'

const FebreAmarela = () => {
    return (
        <div>
            <Header />
            <MenuVaccines />
            <div id="page-vaccines">
                <main>
                    <strong>Vacina da febre amarela</strong>
                    <img src={febreAmarela} alt="Febre amarela" />
                    <strong>Do que é feita:</strong>
                    <p>No Brasil estão disponíveis duas vacinas: a produzida por Bio-Manguinhos – Fiocruz, utilizada pela rede pública, e a produzida pela Sanofi Pasteur, utilizada pelos serviços privados de vacinação e eventualmente pela rede pública. Ambas são elaboradas a partir de vírus vivo atenuado, cultivado em ovo de galinha. A vacina de Biomanguinhos apresenta em sua formulação gelatina bovina, eritromicina, canamicina, cloridrato de L-histidina, L-alanina, cloreto de sódio e água para injeção. Já a da Sanofi Pasteur contém: lactose, sorbitol, cloridrato de L-histidina, L-alanina e solução salina.</p>
                    <p>As duas têm perfis de segurança e eficácia semelhantes, estimados em mais de 95% para maiores de 2 anos.</p>
                    <p>É importante ressaltar que os estudos para o uso de doses fracionadas, recomendado apenas durante campanhas do Ministério da Saúde, em localidades e períodos bem definidos, foram realizados apenas com a vacina de Bio-Manguinhos. Não há, portanto, autorização para a administração de doses fracionadas da vacina da Sanofi Pasteur.</p>
                    <strong>Indicação:</strong>
                    <p>Pessoas a partir de 9 meses de idade.</p>
                    <strong>Contraindicações:</strong>
                    <ul>
                        <li>Crianças abaixo de 6 meses de idade.</li>
                        <li>Indivíduos infectados pelo HIV, sintomáticos e com imunossupressão grave comprovada por exame de laboratório.</li>
                        <li>Pessoas com imunodepressão grave por doença ou uso de medicação.</li>
                        <li>Pacientes que tenham apresentado doença neurológica desmielinizante no período de seis semanas após a aplicação de dose anterior da vacina.</li>
                        <li>Gestantes, salvo em situações de alto risco de infecção, o que deve ser avaliado pelo médico;</li>
                        <li>Mulheres amamentando bebês com até 6 meses. Se a vacinação não puder ser evitada, suspender o aleitamento materno por 10 dias. Procure o pediatra para mais orientações.</li>
                        <li>Pacientes submetidos a transplante de órgãos.</li>
                        <li>Pacientes com câncer.</li>
                        <li>Pessoas com história de reação anafilática relacionada a substâncias presentes na vacina (ovo de galinha e seus derivados, gelatina bovina ou outras).</li>
                        <li>Pacientes com história pregressa de doenças do timo (miastenia gravis, timoma, casos de ausência de timo ou remoção cirúrgica).</li>
                        <li>Em princípio há contraindicação para gestantes, mas a administração deve ser analisada de acordo com o grau de risco, por exemplo, na vigência de surtosrianças abaixo de 6 meses de idade.</li>
                    </ul>
                    <strong>Grupos com precaução para vacinação:</strong>
                    <p>Em situações de aumento das chances de infecção pelo vírus selvagem da febre amarela, a vacinação pode ser recomendada para pessoas com algumas condições clínicas que inicialmente seriam consideradas contraindicação. Cabe a(o) médico(a) avaliar a relação risco-benefício.</p>
                    <ul>
                        <li>Indivíduos a partir de 60 anos não previamente vacinados: embora raro, está descrito risco aumentado de eventos adversos graves na primovacinação nesta faixa etária;</li>
                        <li>Pessoas vivendo com HIV/Aids, assintomáticas e que apresentem o LT-CD4 ≥ 350 células/mm3. Poderá ser utilizado o último exame de LT-CD4 (independentemente da data), desde que a carga viral atual (menos de seis meses) se mantenha indetectável;</li>
                        <li>Pessoas após término de tratamento com quimioterapia (venosa ou oral) e sem previsão de novo ciclo: administrar a vacina após três meses do término da quimioterapia;</li>
                        <li>Pessoas que fizeram uso de medicamento anticélulas B e Fludarabina: aguardar seis meses de intervalo;</li>
                        <li>Pessoas submetidas a transplante de células tronco hematopoiéticas: administrar a vacina a partir de 24 meses após o transplante se não houver doença do enxerto versus hospedeiro e/ou recaída da doença de base e/ou uso de imunossupressor;</li>
                        <li>Síndrome Mieloproliferativa Crônica: administrar a vacina se padrão laboratorial for estável e com neutrófilos acima de 1500 céls/mm³;</li>
                        <li>Síndrome Linfoproliferativa: administrar a vacina três meses após o término da quimioterapia (exceto no caso de uso de medicamento anti-células B, quando o intervalo deve ser de seis meses);</li>
                        <li>A administração da vacina em pacientes com lúpus eritematoso sistêmico ou outras doenças autoimunes deve ser avaliada com cuidado, pois pode haver imunossupressão nesses pacientes.</li>
                        <li>Doenças hematológicas.</li>
                    </ul>
                    <strong>Esquema de doses:</strong>
                    <ul>
                        <li>Crianças até 4 anos: duas doses, aos 9 meses e aos 4 anos.</li>
                        <li>Acima de 4 anos: Não há consenso sobre a duração da proteção conferida pela vacina. De acordo com o risco epidemiológico, uma segunda dose pode ser considerada pela possibilidade de falha vacinal.</li>
                    </ul>
                    <strong>Exigência de vacinação para viajantes</strong>
                    <p>Como o Brasil é considerado endêmico para a febre amarela, alguns países (acesse a lista) só permitem a entrada de viajantes brasileiros que apresentem o Certificado Internacional de Vacinação e Profilaxia (CIVP) com registro de dose aplicada no mínimo 10 dias da viagem. A dose fracionada não é válida para esse fim.</p>
                    <strong>Via de aplicação:</strong>
                    <p>Subcutânea.</p>
                    <strong>Cuidados antes, durante e após a vacinação:</strong>
                    <ul>
                        <li>Não são necessários cuidados especiais antes da vacinação.</li>
                        <li>Em caso de febre recomenda-se adiar a vacinação até a melhora.</li>
                        <li>Para crianças até 2 anos de idade, não aplicar simultaneamente com a vacina tríplice viral e aguardar intervalo mínimo de 30 dias entre as duas vacinas.</li>
                        <li>Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.</li>
                        <li>Todo e qualquer evento adverso grave e/ou inesperado deve ser notificado às autoridades de Saúde.</li>
                    </ul>
                    <strong>Efeitos e eventos adversos:</strong>
                    <ul>
                        <li>Manifestações gerais, como febre, dor de cabeça e muscular são os eventos mais frequentes e acontecem em cerca de 4% dos que são vacinados na primeira vez e menos de 2% nas segundas doses</li>
                        <li>Manifestações locais como dor na área de aplicação ocorrem em 4% dos adultos vacinados e um pouco menos em crianças pequenas. A dor dura um ou dois dias, na forma leve ou moderada.</li>
                        <li>Reações alérgicas como erupções na pele, urticária e asma acontecem com frequência de um caso para 130 mil a 250 mil vacinados.</li>
                        <li>Apesar de muito raros, podem acontecer eventos graves: reações alérgicas, doença neurológica (encefalite, meningite, doenças autoimunes com envolvimento do sistema nervoso central e periférico) e doença em órgãos (infecção pelo vírus vacinal causando danos semelhantes aos da doença). No Brasil, entre 2007 e 2012, a ocorrência destes eventos graves foi de 0,42 caso por cem mil vacinados.</li>
                        <li>Entre 1999 e 2009, ocorreu anafilaxia na proporção de 0,023 caso para cem mil doses aplicadas.</li>
                        <li>Entre 2007 e 2012, aconteceram 116 casos (0,2 caso em cem mil vacinados) de doença neurológica, principalmente quando se tratava de primeira dose e em idosos. Já a doença nos órgãos, chamada “viscerotrópica”, neste mesmo período, ocorreu em 21 pessoas (0,04 caso em cem mil vacinados).</li>
                    </ul>
                    <strong>Onde pode ser encontrada:</strong>
                    <p>Nos serviços privados de vacinação credenciadas junto à Anvisa e nas Unidades Básicas de Saúde.</p>
                </main>
            </div>
        </div>
    )
}

export default FebreAmarela
