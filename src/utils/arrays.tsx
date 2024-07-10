import { Binary, Code, Database, FileJson, GitBranch, SquareFunction } from "lucide-react";
import React from "react";

interface ChipsContentItem {
  icon: React.ReactNode,
  label: string
}

type ChipsContentProps = ChipsContentItem[]

const chipsContent: ChipsContentProps= [
  { icon: <Binary className="text-primary w-4 h-4"/>, label: 'Programação Web' },
  { icon: <SquareFunction className="text-primary w-4 h-4"/>, label: 'Frontend' },
  { icon: <Code className="text-primary w-4 h-4"/>, label: 'Backend' },
  { icon: <GitBranch className="text-primary w-4 h-4"/>, label: 'Git - Controle de Versão' },
  { icon: <Database className="text-primary w-4 h-4"/>, label: 'Banco de Dados' },
  { icon: <FileJson className="text-primary w-4 h-4"/>, label: 'Projetos de Verdade' },
]

const cardCoursesArray = [
  {
    title: 'Typescript', 
    description: 'entenda como funciona este superset de Javascript e deixe suas aplicações mais robustas', 
    complexity: 'Intermediário'
  },
  {
    title: 'Web Design', 
    description: 'tipografia, alinhamento, gestalt, teoria das cores, responsividade e muitos mais.', 
    complexity: 'Iniciante'
  },
  {
    title: 'Node Js', 
    description: 'crie suas próprias APIs, inicie um servidores, construa autenticações', 
    complexity: 'Intermediário'
  },
  {
    title: 'React', 
    description: 'Evolua no Frontend desenvolvendo aplições reativas e robustas com React.', 
    complexity: 'Intermediário'
  },
]

export {chipsContent, cardCoursesArray}