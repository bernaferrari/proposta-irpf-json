# Proposta de Modernização do Informe de Rendimentos (IRPF)

## 📋 Sobre o Projeto

Este projeto demonstra uma **solução inovadora** para modernizar o processo de declaração do Imposto de Renda Pessoa Física (IRPF) no Brasil. Em vez de obrigar contribuintes a digitar manualmente dados de PDFs, a proposta é que bancos forneçam arquivos **estruturados JSON** que possam ser **importados automaticamente** pelo programa da Receita Federal.

### 🎯 Problema Atual

- ⏱️ **Processo manual demorado**: Horas gastas digitando dados que já existem digitalmente
- ❌ **Alto índice de erros**: Erros de digitação geram inconsistências
- 📄 **PDFs não estruturados**: Informações em formato não processável
- 😤 **Experiência frustrante**: Processo arcaico para milhões de contribuintes

### ✨ Solução Proposta

- 🚀 **Importação automática**: Zero digitação manual
- 📊 **Dados estruturados**: Arquivos JSON padronizados
- ✅ **Eliminação de erros**: Dados vindos diretamente dos bancos
- ⚡ **Experiência simplificada**: Processo rápido e intuitivo

## 🚀 Demo Online

Acesse a demonstração interativa: [**demo-irpf-bancario.vercel.app**](https://demo-irpf-bancario.vercel.app)

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/) com App Router
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes**: [shadcn/ui](https://ui.shadcn.com/)
- **Gráficos**: [Recharts](https://recharts.org/)
- **Syntax Highlighting**: [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- **Ícones**: [Lucide React](https://lucide.dev/)

## 📁 Estrutura do Projeto

```txt
├── app/
│   ├── page.tsx                      # Página principal
│   ├── technical/                    # Documentação técnica
│   └── layout.tsx                    # Layout global
├── components/
│   ├── hero-section.tsx              # Seção principal
│   ├── current-problem-section.tsx   # Problemas atuais
│   ├── proposed-solution-section.tsx # Solução proposta
│   ├── benefits-section.tsx          # Benefícios
│   ├── simple-demo-section.tsx       # Demonstração interativa
│   ├── implementation-*.tsx          # Guias de implementação
│   ├── ui/                           # Componentes base (shadcn/ui)
│   └── ...outros componentes
├── lib/
│   └── utils.ts                     # Utilitários
└── styles/
    └── globals.css                  # Estilos globais
```

## 🏃‍♂️ Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/demo-irpf-bancario.git
   cd demo-irpf-bancario
   ```

2. **Instale as dependências e execute**

   ```bash
   pnpm install
   pnpm dev
   ```

3. **Acesse a aplicação**

   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📊 Funcionalidades Demonstradas

### 🎮 Demo Interativo

- **Seleção de Bancos**: Escolha múltiplas instituições financeiras
- **Visualização de Dados**: Veja como os dados seriam consolidados
- **Importação Simulada**: Experimente o processo de importação automática
- **Gráficos e Tabelas**: Visualização clara dos dados financeiros

### 📄 Especificação Técnica

- **Schema JSON Completo**: Estrutura detalhada dos dados
- **Guias de Implementação**: Para bancos e Receita Federal
- **Exemplos de Código**: Implementação prática em JavaScript com Zod
- **Validação de Dados**: Regras e critérios de conformidade

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

</div>
# proposta-irpf-json
