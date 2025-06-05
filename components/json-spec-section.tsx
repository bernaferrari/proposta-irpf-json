import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Database,
  Check,
  User,
  Wallet,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const jsonSchema = `{
  "metadados": {
    "versao_schema": "1.0.0",
    "instituicao": {
      "cnpj": "00.000.000/0001-91",
      "nome": "Banco Exemplo S.A.",
      "codigo_banco": "001"
    },
    "data_geracao": "2024-03-15",
    "ano_calendario": 2024
  },
  "contribuinte": {
    "cpf": "123.456.789-00",
    "nome": "Maria Silva Santos"
  },
  "aplicacoes_financeiras": [
    {
      "tipo": "CONTA_CORRENTE",
      "numero_conta": "12345-6",
      "saldo_31_12": 15000.00,
      "rendimentos_ano": 0.00
    }
  ],
  "rendimentos_tributacao_exclusiva": [
    {
      "tipo": "CDB",
      "instituicao": "Banco Exemplo",
      "valor_aplicado": 50000.00,
      "rendimentos_brutos": 3500.00,
      "ir_retido": 525.00,
      "rendimentos_liquidos": 2975.00
    }
  ],
  "rendimentos_isentos": [
    {
      "tipo": "DIVIDENDOS",
      "fonte_pagadora": "Empresa S.A.",
      "valor": 1200.00,
      "mes_competencia": "12"
    }
  ],
  "bens_direitos": [
    {
      "codigo": "01",
      "descricao": "Conta corrente - Banco Exemplo",
      "valor_31_12_anterior": 12000.00,
      "valor_31_12_atual": 15000.00
    }
  ]
}`;

const zodSchemaDetailed = `import { z } from 'zod'

// Schema Zod para Integração Bancária IRPF
export const InformeBancarioSchema = z.object({
  metadados: z.object({
    versao_schema: z.string().regex(/^\\d+\\.\\d+\\.\\d+$/, "Deve seguir versionamento semântico"),
    instituicao: z.object({
      cnpj: z.string().regex(/^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}-\\d{2}$/, "CNPJ inválido"),
      nome: z.string().min(1, "Nome da instituição obrigatório"),
      codigo_banco: z.string().length(3, "Código do banco deve ter 3 dígitos")
    }),
    data_geracao: z.string().date("Data inválida"),
    ano_calendario: z.number().int().min(2020).max(2030)
  }),
  
  contribuinte: z.object({
    cpf: z.string().regex(/^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$/, "CPF inválido"),
    nome: z.string().min(1, "Nome do contribuinte obrigatório")
  }),
  
  aplicacoes_financeiras: z.array(z.object({
    tipo: z.enum(["CONTA_CORRENTE", "POUPANCA", "CONTA_INVESTIMENTO"]),
    numero_conta: z.string().optional(),
    saldo_31_12: z.number().nonnegative("Saldo deve ser positivo"),
    rendimentos_ano: z.number().nonnegative("Rendimentos devem ser positivos")
  })).optional(),
  
  rendimentos_tributacao_exclusiva: z.array(z.object({
    tipo: z.enum(["CDB", "LCI", "LCA", "FUNDO", "TESOURO_DIRETO"]),
    instituicao: z.string().optional(),
    valor_aplicado: z.number().nonnegative(),
    rendimentos_brutos: z.number().nonnegative(),
    ir_retido: z.number().nonnegative(),
    rendimentos_liquidos: z.number().nonnegative()
  })).optional(),
  
  rendimentos_isentos: z.array(z.object({
    tipo: z.enum(["DIVIDENDOS", "JCP", "LCI", "LCA"]),
    fonte_pagadora: z.string().optional(),
    valor: z.number().nonnegative(),
    mes_competencia: z.string().regex(/^(0[1-9]|1[0-2])$/, "Mês inválido")
  })).optional(),
  
  bens_direitos: z.array(z.object({
    codigo: z.string().regex(/^\\d{2}$/, "Código deve ter 2 dígitos"),
    descricao: z.string().min(1, "Descrição obrigatória"),
    valor_31_12_anterior: z.number().nonnegative(),
    valor_31_12_atual: z.number().nonnegative()
  })).optional()
})

export type InformeBancario = z.infer<typeof InformeBancarioSchema>

// Exemplo de uso
export function validarInforme(dados: unknown): InformeBancario {
  return InformeBancarioSchema.parse(dados)
}

// Validação com tratamento de erro
export function validarInformeSafe(dados: unknown) {
  const result = InformeBancarioSchema.safeParse(dados)
  
  if (!result.success) {
    console.error("Erro de validação:", result.error.format())
    return null
  }
  
  return result.data
}`;

export function JsonSpecSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            JSON Schema
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Especificação do Formato de Dados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            O formato JSON padronizado para transmissão de dados financeiros
            entre instituições bancárias e a Receita Federal.
          </p>
        </div>

        <Tabs defaultValue="example" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="example">Exemplo</TabsTrigger>
            <TabsTrigger value="schema">Schema Detalhado</TabsTrigger>
          </TabsList>

          <TabsContent value="example" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Exemplo de Payload JSON
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SyntaxHighlighter
                  language="json"
                  style={oneDark}
                  customStyle={{
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                  }}
                >
                  {jsonSchema}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schema" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  JSON Schema Completo (com Zod)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SyntaxHighlighter
                  language="typescript"
                  style={oneDark}
                  customStyle={{
                    borderRadius: "0.5rem",
                    fontSize: "0.75rem",
                  }}
                >
                  {zodSchemaDetailed}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Campos Obrigatórios Section - Redesigned */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Campos Obrigatórios
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Especificação detalhada dos dados requeridos em cada seção
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Metadados */}
            <Card className="border-0 shadow-none bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                      Metadados
                    </CardTitle>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Informações sobre a instituição e arquivo
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      versao_schema
                    </code>
                    <span className="text-blue-800 dark:text-blue-200">
                      Versão semântica
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      instituicao
                    </code>
                    <span className="text-blue-800 dark:text-blue-200">
                      CNPJ, nome e código
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      data_geracao
                    </code>
                    <span className="text-blue-800 dark:text-blue-200">
                      Data ISO 8601
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      ano_calendario
                    </code>
                    <span className="text-blue-800 dark:text-blue-200">
                      Ano da declaração
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contribuinte */}
            <Card className="border-0 shadow-none bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-green-900 dark:text-green-100">
                      Contribuinte
                    </CardTitle>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Identificação do titular
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      cpf
                    </code>
                    <span className="text-green-800 dark:text-green-200">
                      Formato XXX.XXX.XXX-XX
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      nome
                    </code>
                    <span className="text-green-800 dark:text-green-200">
                      Nome completo
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aplicações Financeiras */}
            <Card className="border-0 shadow-none bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-500 rounded-lg">
                    <Wallet className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-purple-900 dark:text-purple-100">
                      Aplicações Financeiras
                    </CardTitle>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Quando presentes
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      tipo
                    </code>
                    <span className="text-purple-800 dark:text-purple-200">
                      CONTA_CORRENTE, POUPANCA...
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      saldo_31_12
                    </code>
                    <span className="text-purple-800 dark:text-purple-200">
                      Valor numérico positivo
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      numero_conta
                    </code>
                    <span className="text-purple-800 dark:text-purple-200">
                      Identificação da conta
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rendimentos */}
            <Card className="border-0 shadow-none bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-orange-900 dark:text-orange-100">
                      Rendimentos
                    </CardTitle>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Quando presentes
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      tipo
                    </code>
                    <span className="text-orange-800 dark:text-orange-200">
                      CDB, LCI, FUNDO...
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      rendimentos_brutos
                    </code>
                    <span className="text-orange-800 dark:text-orange-200">
                      Valor bruto dos rendimentos
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <code className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded text-xs font-mono">
                      ir_retido
                    </code>
                    <span className="text-orange-800 dark:text-orange-200">
                      Imposto retido na fonte
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Validation Summary */}
          <div className="mt-8 bg-card rounded-xl p-6 border border-gray-200 dark:border-gray-600">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <CheckCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Validação Automática
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Todos os campos são validados automaticamente contra o schema
                  antes da transmissão
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Tipos de dados
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Formatos obrigatórios
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Valores permitidos
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Estrutura JSON
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
