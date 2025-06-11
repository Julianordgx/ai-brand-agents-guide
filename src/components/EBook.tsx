
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
      const sections = ['cover', 'introduction', 'why-companies-fail', 'active-vs-passive', 'framework-overview', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'conclusion'];
      
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
      <section id="cover" className="story-section bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="story-content animate-fade-in-up text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
              alt="Inteligência Artificial"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-lg mb-8"
            />
          </div>
          <h1 className="story-title">Implementando IA</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-secondary">
            Guia Estratégico para Escalar seu Negócio com Eficiência e Inteligência
          </h2>
          <div className="md-card-elevated p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Por Juliano Rodrigues e Erik Dezzotti
            </p>
            <p className="text-primary font-semibold text-xl">
              Brandpage - Consultoria de inteligência estratégica e crescimento digital
            </p>
          </div>
          <Button
            onClick={() => handleNavigate('introduction')}
            className="md-button-filled text-lg px-8 py-4"
          >
            Começar Leitura
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="story-section">
        <div className="story-content animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="story-title">Introdução</h2>
              <div className="space-y-6">
                <p className="story-text">
                  No cenário empresarial atual, a Inteligência Artificial deixou de ser uma promessa futurista para se tornar uma realidade incontornável. Empresas de todos os portes estão buscando maneiras de integrar a IA em suas operações, não apenas para otimizar processos, mas para redefinir a própria essência de seus negócios.
                </p>
                <p className="story-text">
                  No entanto, a jornada rumo à implementação eficaz da IA é frequentemente pavimentada com desafios e incertezas. Muitos líderes se sentem sobrecarregados pela complexidade tecnológica, pela avalanche de informações e pela dificuldade em discernir o que realmente funciona do que é apenas ruído.
                </p>
                <div className="md-surface bg-primary/10 border-l-4 border-primary">
                  <p className="story-text font-semibold">
                    É nesse contexto que a Brandpage se posiciona como sua parceira estratégica. Com uma metodologia comprovada e uma equipe de especialistas, a Brandpage não apenas desmistifica a IA, mas a transforma em uma ferramenta tangível para o crescimento e a eficiência.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=600&fit=crop" 
                alt="Tecnologia e IA"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Fail Section */}
      <section id="why-companies-fail" className="story-section bg-muted/30">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title text-center mb-12">Por que empresas travam com IA</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=400&fit=crop" 
                alt="Complexidade tecnológica"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
            <div>
              <p className="story-text">
                A promessa da Inteligência Artificial é sedutora: otimização de processos, insights preditivos, automação de tarefas repetitivas e um salto sem precedentes na eficiência operacional. No entanto, a realidade para muitas empresas é bem diferente.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="md-card p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Complexidade Técnica</h3>
              <p className="text-base">
                Termos como 'machine learning', 'deep learning', 'redes neurais' podem soar como uma linguagem alienígena para muitos executivos, criando um abismo entre a equipe técnica e a liderança estratégica.
              </p>
            </div>
            <div className="md-card p-8">
              <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Medo de Desperdício</h3>
              <p className="text-base">
                O receio de que investimentos não gerem o retorno esperado, amplificado pela dificuldade em identificar casos de uso que realmente agreguem valor ao negócio.
              </p>
            </div>
          </div>
          
          <div className="md-surface bg-destructive/10 border-l-4 border-destructive max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-destructive mb-4">O Resultado</h3>
            <p className="story-text">
              Uma paralisia por análise, onde o medo de cometer erros impede qualquer avanço significativo. Muitas empresas acabam construindo soluções complexas para problemas simples, resultando em projetos caros e ineficazes.
            </p>
          </div>
        </div>
      </section>

      {/* Active vs Passive AI Section */}
      <section id="active-vs-passive" className="story-section">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title text-center mb-8">IA Ativa vs. Passiva</h2>
          <p className="story-subtitle text-center mb-12">
            O que observamos hoje é uma clara divisão entre empresas que utilizam a IA de forma passiva e aquelas que a integram ativamente em sua espinha dorsal operacional.
          </p>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop" 
              alt="Código e programação"
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-lg"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="md-card p-8 opacity-60">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">😴</span>
                </div>
                <h3 className="text-2xl font-bold text-muted-foreground">IA Passiva</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-muted-foreground mr-3 mt-1">•</span>
                  <span>Chatbots básicos para atendimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-muted-foreground mr-3 mt-1">•</span>
                  <span>Automação de e-mails simples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-muted-foreground mr-3 mt-1">•</span>
                  <span>Análises de dados retrospectivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-muted-foreground mr-3 mt-1">•</span>
                  <span>Processos manuais e repetitivos</span>
                </li>
              </ul>
            </div>
            
            <div className="md-card-elevated p-8 border-2 border-primary">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">IA Ativa</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Previsão de tendências de mercado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Otimização em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Personalização em escala massiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Automação de decisões complexas</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md-surface bg-secondary/10 border-l-4 border-secondary max-w-4xl mx-auto text-center">
            <p className="text-xl font-semibold">
              A IA não é mais uma opção, mas uma necessidade estratégica. Aqueles que a abraçam ativamente estão construindo uma vantagem competitiva insuperável.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Overview Section */}
      <section id="framework-overview" className="story-section bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="story-content animate-fade-in-up text-center">
          <h2 className="story-title">AI BrandAgents Framework</h2>
          <p className="story-subtitle mb-12">
            Uma metodologia testada e comprovada para identificar, priorizar e implementar soluções de IA que geram impacto real e mensurável no seu negócio.
          </p>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop" 
              alt="Inovação e criatividade"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {[
              { step: 1, title: "Alinhar Objetivos", icon: "🎯", color: "bg-primary" },
              { step: 2, title: "Mapear Fluxos", icon: "🗺️", color: "bg-secondary" },
              { step: 3, title: "Dividir Tarefas", icon: "✂️", color: "bg-primary" },
              { step: 4, title: "Identificar Oportunidades", icon: "🔍", color: "bg-secondary" },
              { step: 5, title: "Priorizar Impacto", icon: "📈", color: "bg-primary" },
              { step: 6, title: "Executar e Expandir", icon: "🚀", color: "bg-secondary" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`${item.color} text-white w-20 h-20 rounded-full flex flex-col items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg`}>
                  <span className="text-2xl mb-1">{item.icon}</span>
                  <span className="text-sm">{item.step}</span>
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
          
          <Button
            onClick={() => handleNavigate('step1')}
            className="md-button-filled text-lg px-8 py-4"
          >
            Explorar Framework
          </Button>
        </div>
      </section>

      {/* Step 1 Section */}
      <section id="step1" className="story-section">
        <div className="story-content animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">1</div>
                <h2 className="story-title text-left m-0">Alinhar Resultados de Negócio</h2>
              </div>
              
              <div className="space-y-6">
                <p className="story-text">
                  O ponto de partida para qualquer iniciativa de IA bem-sucedida não é a tecnologia em si, mas os resultados de negócio que se deseja alcançar. Muitas empresas falham ao iniciar projetos de IA com uma mentalidade de 'vamos usar IA porque é a moda', sem antes definir claramente o problema que a IA deve resolver.
                </p>
                
                <div className="md-surface bg-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-4">Este processo envolve:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <div>
                        <strong>Identificação de Desafios Chave:</strong> Mapear os gargalos operacionais e oportunidades de crescimento
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <div>
                        <strong>Definição de KPIs:</strong> Estabelecer métricas claras e mensuráveis de sucesso
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <div>
                        <strong>Visão de Futuro:</strong> Projetar como o negócio se parecerá após a implementação da IA
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=600&fit=crop" 
                alt="Planejamento estratégico"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 Section */}
      <section id="step2" className="story-section bg-muted/30">
        <div className="story-content animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop" 
                alt="Mapeamento de processos"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-8">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">2</div>
                <h2 className="story-title text-left m-0">Mapear os Fluxos de Trabalho</h2>
              </div>
              
              <div className="space-y-6">
                <p className="story-text">
                  É impossível otimizar ou automatizar algo que não se compreende em sua totalidade. Este capítulo foca em uma análise detalhada de como as coisas são feitas atualmente, identificando cada etapa de um processo, as pessoas envolvidas, as ferramentas utilizadas e os pontos de decisão.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md-card p-6">
                    <h3 className="text-lg font-bold text-secondary mb-3">Elementos Chave</h3>
                    <ul className="text-sm space-y-2">
                      <li>• Identificação de Processos Críticos</li>
                      <li>• Desenho do Fluxo Atual (As-Is)</li>
                      <li>• Identificação de Pontos de Fricção</li>
                      <li>• Mapeamento de Dados Disponíveis</li>
                    </ul>
                  </div>
                  <div className="md-surface bg-secondary/10">
                    <h3 className="text-lg font-bold text-secondary mb-3">Resultado</h3>
                    <p className="text-sm">
                      Uma representação visual e compreensível de cada fluxo de trabalho relevante, revelando oportunidades de otimização e automação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with remaining steps... */}
      {/* Step 3 Section */}
      <section id="step3" className="story-section">
        <div className="story-content animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">3</div>
              <h2 className="story-title text-left m-0">Quebrar Fluxos em Tarefas</h2>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="story-text mb-8">
                A Inteligência Artificial, em sua essência, é uma ferramenta para automatizar ou otimizar tarefas específicas, não processos inteiros de uma só vez. A granularidade é fundamental: quanto mais detalhada for a compreensão das tarefas, mais fácil será identificar onde a IA pode ser aplicada com precisão e eficácia.
              </p>
              
              <div className="md-surface bg-primary/10">
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
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=600&fit=crop" 
                alt="Análise de tarefas"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 Section */}
      <section id="step4" className="story-section bg-muted/30">
        <div className="story-content animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">4</div>
              <h2 className="story-title text-left m-0">Identificar Oportunidades de IA</h2>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <p className="story-text max-w-4xl mx-auto">
              Este é o momento onde a compreensão profunda do seu negócio se encontra com o conhecimento das capacidades da IA, transformando problemas em soluções inovadoras. Analisamos cada tarefa individualmente, buscando responder: 'Como a IA pode otimizar, automatizar ou aprimorar esta tarefa?'
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Automação de Tarefas Repetitivas", desc: "Processamento de documentos, triagem de e-mails, entrada de dados", icon: "🤖" },
              { title: "Otimização de Decisões", desc: "Análise preditiva, precificação, gestão de estoque", icon: "📊" },
              { title: "Personalização em Escala", desc: "Recomendações, comunicações direcionadas", icon: "🎯" },
              { title: "Experiência do Cliente", desc: "Chatbots, assistentes virtuais, suporte 24/7", icon: "💬" },
              { title: "Análise de Dados Complexos", desc: "Texto, áudio, vídeo, sentimentos", icon: "🧠" },
              { title: "Detecção de Padrões", desc: "Fraudes, anomalias, tendências", icon: "🔍" }
            ].map((opportunity, index) => (
              <div key={index} className="md-card p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{opportunity.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">{opportunity.title}</h3>
                <p className="text-sm text-muted-foreground">{opportunity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 5 Section */}
      <section id="step5" className="story-section">
        <div className="story-content animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">5</div>
                <h2 className="story-title text-left m-0">Priorizar para Impacto</h2>
              </div>
              
              <div className="space-y-6">
                <p className="story-text">
                  Nem todas as ideias são igualmente valiosas ou fáceis de executar. Uma priorização eficaz garante que os recursos sejam alocados de forma inteligente, focando nas iniciativas que trarão o maior retorno sobre o investimento com o menor risco.
                </p>
                
                <div className="md-surface bg-primary/10">
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
                
                <div className="md-surface bg-secondary/10 border-l-4 border-secondary">
                  <p className="text-lg font-semibold text-secondary">
                    O objetivo é criar um roteiro que comece com projetos de menor risco e alto impacto, construindo momentum e demonstrando valor rapidamente.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop" 
                alt="Análise e priorização"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 6 Section */}
      <section id="step6" className="story-section bg-muted/30">
        <div className="story-content animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">6</div>
              <h2 className="story-title text-left m-0">Executar e Expandir</h2>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <p className="story-text max-w-4xl mx-auto">
              Este é o momento de transformar o planejamento em realidade, implementando as soluções de IA e, em seguida, escalando-as para maximizar seu impacto em toda a organização.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="md-card p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🛠️</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Desenvolvimento</h3>
                <p className="text-sm">Construir ou integrar soluções de IA com ciclos curtos de feedback e validação.</p>
              </div>
              <div className="md-card p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Monitoramento</h3>
                <p className="text-sm">Acompanhar performance e otimizar continuamente para melhores resultados.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="md-card p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Treinamento</h3>
                <p className="text-sm">Preparar equipes para utilizar novas ferramentas e processos baseados em IA.</p>
              </div>
              <div className="md-card p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">📈</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Expansão</h3>
                <p className="text-sm">Escalar soluções bem-sucedidas para outras áreas da organização.</p>
              </div>
            </div>
          </div>
          
          <div className="md-surface bg-secondary/10 border-l-4 border-secondary max-w-4xl mx-auto text-center">
            <p className="text-lg font-semibold">
              A execução e expansão não são o fim da jornada, mas o início de um ciclo contínuo de inovação.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="story-section bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="story-content animate-fade-in-up">
          <h2 className="story-title text-center mb-12">Conclusão</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                <p className="story-text">
                  Chegamos ao fim de uma jornada que, esperamos, tenha desmistificado a Inteligência Artificial e revelado seu verdadeiro potencial como catalisador de crescimento e eficiência para o seu negócio.
                </p>
                
                <div className="md-surface bg-primary/10 border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-primary mb-4">A visão de futuro é clara:</h3>
                  <p className="story-text">
                    Empresas que abraçam a IA de forma ativa e estratégica estarão na vanguarda da inovação, redefinindo seus setores e criando novas oportunidades de valor. Elas serão mais ágeis, mais eficientes, mais inteligentes e, acima de tudo, mais resilientes às disrupções do mercado.
                  </p>
                </div>
                
                <div className="md-surface bg-destructive/10 border-l-4 border-destructive">
                  <p className="text-lg font-semibold text-destructive">
                    No entanto, a janela de oportunidade para se posicionar como um líder na era da IA está se fechando rapidamente. A urgência não é apenas para adotar a IA, mas para fazê-lo de forma estratégica.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop" 
                alt="Futuro da IA"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">
              O AI BrandAgents Framework da Brandpage é a sua bússola nesta jornada
            </h3>
            <p className="story-text mb-8 max-w-4xl mx-auto">
              Com a expertise de Juliano Rodrigues e Erik Dezzotti, e a abordagem personalizada da Brandpage, sua empresa pode não apenas implementar a IA, mas integrá-la de forma que gere resultados reais e sustentáveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="md-button-filled text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/5544991471974', '_blank')}
              >
                Fale com Nosso Time
              </Button>
              <Button 
                className="md-button-outlined text-lg px-8 py-4"
                onClick={() => window.open('https://brandpage.com.br', '_blank')}
              >
                Visite Brandpage
              </Button>
            </div>
            
            <div className="md-card p-8 text-center max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-4">Créditos</h4>
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
