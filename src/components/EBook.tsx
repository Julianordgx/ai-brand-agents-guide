
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Button } from '@/components/ui/button';

const EBook: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['cover', 'introduction', 'why-companies-fail', 'active-vs-passive', 'framework-overview', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'lab', 'conclusion'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Cover Section */}
      <section id="cover" className="story-section bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="story-content animate-fade-in-up">
          <h1 className="story-title">Implementando IA</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-secondary">
            Guia Estratégico para Escalar seu Negócio com Eficiência e Inteligência
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Por Juliano Rodrigues e Erik Dezzotti
            </p>
            <p className="text-primary font-semibold text-xl">
              Brandpage - Consultoria de inteligência estratégica e crescimento digital
            </p>
          </div>
          <Button
            onClick={() => handleNavigate('introduction')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg"
          >
            Começar Leitura
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="story-section">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title">Introdução</h2>
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              No cenário empresarial atual, a Inteligência Artificial deixou de ser uma promessa futurista para se tornar uma realidade incontornável. Empresas de todos os portes estão buscando maneiras de integrar a IA em suas operações, não apenas para otimizar processos, mas para redefinir a própria essência de seus negócios.
            </p>
            <p className="story-text">
              No entanto, a jornada rumo à implementação eficaz da IA é frequentemente pavimentada com desafios e incertezas. Muitos líderes se sentem sobrecarregados pela complexidade tecnológica, pela avalanche de informações e pela dificuldade em discernir o que realmente funciona do que é apenas ruído.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <p className="story-text font-semibold">
                É nesse contexto que a Brandpage se posiciona como sua parceira estratégica. Com uma metodologia comprovada e uma equipe de especialistas, a Brandpage não apenas desmistifica a IA, mas a transforma em uma ferramenta tangível para o crescimento e a eficiência.
              </p>
            </div>
            <p className="story-text">
              Este eBook foi cuidadosamente elaborado para CEOs, líderes de Growth e equipes de SalesOps que buscam não apenas entender a IA, mas implementá-la de forma estratégica para escalar seus negócios com inteligência e eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* Why Companies Fail Section */}
      <section id="why-companies-fail" className="story-section bg-muted/30">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title">Por que empresas travam com IA</h2>
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              A promessa da Inteligência Artificial é sedutora: otimização de processos, insights preditivos, automação de tarefas repetitivas e um salto sem precedentes na eficiência operacional. No entanto, a realidade para muitas empresas é bem diferente.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Complexidade Técnica</h3>
                <p className="text-sm">
                  Termos como 'machine learning', 'deep learning', 'redes neurais' podem soar como uma linguagem alienígena para muitos executivos, criando um abismo entre a equipe técnica e a liderança estratégica.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Medo de Desperdício</h3>
                <p className="text-sm">
                  O receio de que investimentos não gerem o retorno esperado, amplificado pela dificuldade em identificar casos de uso que realmente agreguem valor ao negócio.
                </p>
              </div>
            </div>
            
            <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
              <h3 className="text-lg font-bold text-destructive mb-2">O Resultado</h3>
              <p className="story-text">
                Uma paralisia por análise, onde o medo de cometer erros impede qualquer avanço significativo. Muitas empresas acabam construindo soluções complexas para problemas simples, resultando em projetos caros e ineficazes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active vs Passive AI Section */}
      <section id="active-vs-passive" className="story-section">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title">IA Ativa vs. Passiva</h2>
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-subtitle text-center">
              O que observamos hoje é uma clara divisão entre empresas que utilizam a IA de forma passiva e aquelas que a integram ativamente em sua espinha dorsal operacional.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-muted-foreground mb-4">IA Passiva</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-2">•</span>
                    Chatbots básicos para atendimento
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-2">•</span>
                    Automação de e-mails simples
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-2">•</span>
                    Análises de dados retrospectivas
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-2">•</span>
                    Processos manuais e repetitivos
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-8 rounded-lg border-2 border-primary">
                <h3 className="text-2xl font-bold text-primary mb-4">IA Ativa</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Previsão de tendências de mercado
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Otimização em tempo real
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Personalização em escala massiva
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Automação de decisões complexas
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
              <p className="text-lg font-semibold">
                A IA não é mais uma opção, mas uma necessidade estratégica. Aqueles que a abraçam ativamente estão construindo uma vantagem competitiva insuperável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview Section */}
      <section id="framework-overview" className="story-section bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title">AI BrandAgents Framework</h2>
          <p className="story-subtitle">
            Uma metodologia testada e comprovada para identificar, priorizar e implementar soluções de IA que geram impacto real e mensurável no seu negócio.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 my-12">
            {[
              { step: 1, title: "Alinhar Objetivos", color: "bg-primary" },
              { step: 2, title: "Mapear Fluxos", color: "bg-secondary" },
              { step: 3, title: "Dividir Tarefas", color: "bg-primary" },
              { step: 4, title: "Identificar Oportunidades", color: "bg-secondary" },
              { step: 5, title: "Priorizar Impacto", color: "bg-primary" },
              { step: 6, title: "Executar e Expandir", color: "bg-secondary" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
          
          <Button
            onClick={() => handleNavigate('step1')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg"
          >
            Explorar Framework
          </Button>
        </div>
      </section>

      {/* Step 1 Section */}
      <section id="step1" className="story-section">
        <div className="story-content animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">1</div>
            <h2 className="story-title text-left">Alinhar Resultados de Negócio</h2>
          </div>
          
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              O ponto de partida para qualquer iniciativa de IA bem-sucedida não é a tecnologia em si, mas os resultados de negócio que se deseja alcançar. Muitas empresas falham ao iniciar projetos de IA com uma mentalidade de 'vamos usar IA porque é a moda', sem antes definir claramente o problema que a IA deve resolver.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Este processo envolve:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <strong>Identificação de Desafios Chave:</strong> Mapear os gargalos operacionais e oportunidades de crescimento
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <strong>Definição de KPIs:</strong> Estabelecer métricas claras e mensuráveis de sucesso
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <strong>Visão de Futuro:</strong> Projetar como o negócio se parecerá após a implementação da IA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 Section */}
      <section id="step2" className="story-section bg-muted/30">
        <div className="story-content animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">2</div>
            <h2 className="story-title text-left">Mapear os Fluxos de Trabalho</h2>
          </div>
          
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              É impossível otimizar ou automatizar algo que não se compreende em sua totalidade. Este capítulo foca em uma análise detalhada de como as coisas são feitas atualmente, identificando cada etapa de um processo, as pessoas envolvidas, as ferramentas utilizadas e os pontos de decisão.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-secondary mb-3">Elementos Chave</h3>
                <ul className="text-sm space-y-2">
                  <li>• Identificação de Processos Críticos</li>
                  <li>• Desenho do Fluxo Atual (As-Is)</li>
                  <li>• Identificação de Pontos de Fricção</li>
                  <li>• Mapeamento de Dados Disponíveis</li>
                </ul>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-secondary mb-3">Resultado</h3>
                <p className="text-sm">
                  Uma representação visual e compreensível de cada fluxo de trabalho relevante, revelando oportunidades de otimização e automação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 Section */}
      <section id="step3" className="story-section">
        <div className="story-content animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">3</div>
            <h2 className="story-title text-left">Quebrar Fluxos em Tarefas</h2>
          </div>
          
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              A Inteligência Artificial, em sua essência, é uma ferramenta para automatizar ou otimizar tarefas específicas, não processos inteiros de uma só vez. A granularidade é fundamental: quanto mais detalhada for a compreensão das tarefas, mais fácil será identificar onde a IA pode ser aplicada com precisão e eficácia.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Para cada tarefa, analisamos:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>O que é a tarefa?</strong> Descrição clara da ação</p>
                  <p><strong>Quem a executa?</strong> Responsável pela tarefa</p>
                  <p><strong>Como é executada?</strong> Passos e ferramentas</p>
                  <p><strong>Quanto tempo leva?</strong> Duração média</p>
                </div>
                <div>
                  <p><strong>Frequência:</strong> Periodicidade da tarefa</p>
                  <p><strong>Custo associado:</strong> Custo direto/indireto</p>
                  <p><strong>Desafios:</strong> Problemas e ineficiências</p>
                  <p><strong>Dados envolvidos:</strong> Entradas e saídas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 Section */}
      <section id="step4" className="story-section bg-muted/30">
        <div className="story-content animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">4</div>
            <h2 className="story-title text-left">Identificar Oportunidades de IA</h2>
          </div>
          
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              Este é o momento onde a compreensão profunda do seu negócio se encontra com o conhecimento das capacidades da IA, transformando problemas em soluções inovadoras. Analisamos cada tarefa individualmente, buscando responder: 'Como a IA pode otimizar, automatizar ou aprimorar esta tarefa?'
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Automação de Tarefas Repetitivas", desc: "Processamento de documentos, triagem de e-mails, entrada de dados" },
                { title: "Otimização de Decisões", desc: "Análise preditiva, precificação, gestão de estoque" },
                { title: "Personalização em Escala", desc: "Recomendações, comunicações direcionadas" },
                { title: "Experiência do Cliente", desc: "Chatbots, assistentes virtuais, suporte 24/7" },
                { title: "Análise de Dados Complexos", desc: "Texto, áudio, vídeo, sentimentos" },
                { title: "Detecção de Padrões", desc: "Fraudes, anomalias, tendências" }
              ].map((opportunity, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-secondary mb-2">{opportunity.title}</h3>
                  <p className="text-sm text-muted-foreground">{opportunity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 5 Section */}
      <section id="step5" className="story-section">
        <div className="story-content animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">5</div>
            <h2 className="story-title text-left">Priorizar para Impacto</h2>
          </div>
          
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              Nem todas as ideias são igualmente valiosas ou fáceis de executar. Uma priorização eficaz garante que os recursos sejam alocados de forma inteligente, focando nas iniciativas que trarão o maior retorno sobre o investimento com o menor risco.
            </p>
            
            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Critérios de Priorização:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Impacto no Negócio:</strong> Contribuição para resultados</li>
                    <li><strong>Viabilidade Técnica:</strong> Possibilidade de implementação</li>
                    <li><strong>Complexidade:</strong> Esforço e recursos necessários</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Disponibilidade de Dados:</strong> Qualidade e acessibilidade</li>
                    <li><strong>Adesão Organizacional:</strong> Aceitação da equipe</li>
                    <li><strong>ROI Esperado:</strong> Retorno sobre investimento</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg font-semibold text-secondary">
                O objetivo é criar um roteiro que comece com projetos de menor risco e alto impacto, construindo momentum e demonstrando valor rapidamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 6 Section */}
      <section id="step6" className="story-section bg-muted/30">
        <div className="story-content animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">6</div>
            <h2 className="story-title text-left">Executar e Expandir</h2>
          </div>
          
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              Este é o momento de transformar o planejamento em realidade, implementando as soluções de IA e, em seguida, escalando-as para maximizar seu impacto em toda a organização.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-secondary mb-3">Desenvolvimento</h3>
                  <p className="text-sm">Construir ou integrar soluções de IA com ciclos curtos de feedback e validação.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-secondary mb-3">Monitoramento</h3>
                  <p className="text-sm">Acompanhar performance e otimizar continuamente para melhores resultados.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-secondary mb-3">Treinamento</h3>
                  <p className="text-sm">Preparar equipes para utilizar novas ferramentas e processos baseados em IA.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-secondary mb-3">Expansão</h3>
                  <p className="text-sm">Escalar soluções bem-sucedidas para outras áreas da organização.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
              <p className="text-lg font-semibold">
                A execução e expansão não são o fim da jornada, mas o início de um ciclo contínuo de inovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Section */}
      <section id="lab" className="story-section bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title">Laboratório de IA</h2>
          <p className="story-subtitle">
            Explore ferramentas e recursos práticos para implementar IA em sua empresa
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Rotinas Imprimíveis: "Hora de Dormir"</h3>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" 
                  alt="Rotinas Imprimíveis" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-muted-foreground mb-6">
                Material prático para implementar rotinas automatizadas em processos empresariais.
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => window.open('#', '_blank')}
              >
                Acessar Produto
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Consultoria Express</h3>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop" 
                  alt="Consultoria Express" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-muted-foreground mb-6">
                Análise personalizada via formulário com resposta em vídeo para sua estratégia de IA.
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => window.open('#', '_blank')}
              >
                Solicitar Consultoria
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="story-section bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title">Conclusão</h2>
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="story-text">
              Chegamos ao fim de uma jornada que, esperamos, tenha desmistificado a Inteligência Artificial e revelado seu verdadeiro potencial como catalisador de crescimento e eficiência para o seu negócio.
            </p>
            
            <div className="bg-primary/10 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">A visão de futuro é clara:</h3>
              <p className="story-text">
                Empresas que abraçam a IA de forma ativa e estratégica estarão na vanguarda da inovação, redefinindo seus setores e criando novas oportunidades de valor. Elas serão mais ágeis, mais eficientes, mais inteligentes e, acima de tudo, mais resilientes às disrupções do mercado.
              </p>
            </div>
            
            <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
              <p className="text-lg font-semibold text-destructive">
                No entanto, a janela de oportunidade para se posicionar como um líder na era da IA está se fechando rapidamente. A urgência não é apenas para adotar a IA, mas para fazê-lo de forma estratégica.
              </p>
            </div>
            
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                O AI BrandAgents Framework da Brandpage é a sua bússola nesta jornada
              </h3>
              <p className="story-text mb-8">
                Com a expertise de Juliano Rodrigues e Erik Dezzotti, e a abordagem personalizada da Brandpage, sua empresa pode não apenas implementar a IA, mas integrá-la de forma que gere resultados reais e sustentáveis.
              </p>
              
              <div className="space-y-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg mr-4"
                  onClick={() => window.open('https://wa.me/5544991471974', '_blank')}
                >
                  Fale com Nosso Time
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-lg"
                  onClick={() => window.open('https://brandpage.com.br', '_blank')}
                >
                  Visite Brandpage
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-lg font-bold text-dark-gray mb-2">Créditos</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Autores:</strong> Juliano Rodrigues e Erik Dezzotti
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Empresa:</strong> Brandpage - Consultoria de inteligência estratégica e crescimento digital
              </p>
              <p className="text-sm text-primary">
                Site: https://brandpage.com.br | Contato: https://wa.me/5544991471974
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EBook;
