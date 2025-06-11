
import React from 'react';
import { X, Menu, BookOpen, Target, AlertTriangle, Zap, Eye, Users, MapPin, Scissors, Search, TrendingUp, Play, Lightbulb, CheckCircle } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const menuItems = [
  { id: 'cover', title: 'Capa', icon: BookOpen },
  { id: 'introduction', title: 'Introdução', icon: Target },
  { id: 'why-companies-fail', title: 'Porque as Empresas Travam', icon: AlertTriangle },
  { id: 'active-vs-passive', title: 'IA Ativa vs. Passiva', icon: Zap },
  { id: 'framework-overview', title: 'Visão Geral do Framework', icon: Eye },
  { id: 'step1', title: 'Passo 1: Alinhar Objetivos', icon: Target },
  { id: 'step2', title: 'Passo 2: Mapear Fluxos', icon: MapPin },
  { id: 'step3', title: 'Passo 3: Dividir Tarefas', icon: Scissors },
  { id: 'step4', title: 'Passo 4: Identificar Oportunidades', icon: Search },
  { id: 'step5', title: 'Passo 5: Priorizar para Impacto', icon: TrendingUp },
  { id: 'step6', title: 'Passo 6: Executar e Expandir', icon: Play },
  { id: 'lab', title: 'Laboratório de IA', icon: Lightbulb },
  { id: 'conclusion', title: 'Conclusão', icon: CheckCircle }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, activeSection, onNavigate }) => {
  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-6 left-6 z-50 p-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar-nav ${isOpen ? 'open' : ''}`}>
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-primary">AI Brand Agents</h2>
          <p className="text-sm text-muted-foreground">Framework Estratégico</p>
        </div>

        <nav className="py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  onNavigate(item.id);
                  onToggle();
                }}
              >
                <Icon size={20} className="mr-3" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
