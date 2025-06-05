# Proposta de Modernização do Informe de Rendimentos (IRPF)

[![Demo Screenshot](https://raw.githubusercontent.com/bernaferrari/proposta-irpf-json/main/public/og-image.png)](https://proposta-irpf-json.vercel.app/)

## 📋 Sobre o Projeto

Este projeto demonstra uma **solução inovadora** para modernizar o processo de declaração do Imposto de Renda Pessoa Física (IRPF) no Brasil. Em vez de obrigar contribuintes a digitar manualmente dados de PDFs, a proposta é que bancos forneçam arquivos **estruturados JSON** que possam ser **importados automaticamente** pelo programa da Receita Federal.

### 🎯 Problema Atual

- ⏱️ **Processo manual demorado**: Horas gastas digitando dados que já existem digitalmente
- ❌ **Alto índice de erros**: Erros de digitação geram inconsistências
- 📄 **PDFs não estruturados**: Informações em formato não processável
- 😤 **Experiência frustrante**: Processo arcaico para milhões de contribuintes

## 🚀 Demo Online

Acesse ao site com a proposta: [**proposta-irpf-json.vercel.app**](https://proposta-irpf-json.vercel.app/)

## 💡 Solução Proposta

Em vez do PDF tradicional que exige digitação manual, os bancos disponibilizariam um arquivo JSON estruturado junto com o informe de rendimentos. Este arquivo seria importado automaticamente pelo programa IRPF, eliminando erros de transcrição e economizando horas de trabalho para milhões de contribuintes.

**Benefícios principais:**

- **Zero digitação**: Importação automática de todos os dados
- **Eliminação de erros**: Dados vindos diretamente dos bancos
- **Economia de tempo**: Processo que levava horas agora leva segundos
- **Maior conformidade**: Redução de inconsistências na declaração

## 🏃‍♂️ Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/)

### Instalação

Após clonar o repositório, siga os passos abaixo:

1. **Instale as dependências e execute**

   ```bash
   pnpm install
   pnpm dev
   ```

2. **Acesse a aplicação**

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
