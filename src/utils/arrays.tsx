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

export {chipsContent}