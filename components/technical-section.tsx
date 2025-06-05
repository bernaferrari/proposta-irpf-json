import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Shield, Zap, FileText, Globe, Lock, Server, Building2 } from "lucide-react"

export function TechnicalSection() {
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
  ]
}`

  const apiExample = `POST /api/receita-federal/irpf/dados-bancarios
Authorization: Bearer {token_instituicao}
Content-Type: application/json

{
  "dados_bancarios": {
    // Schema JSON completo
  },
  "assinatura_digital": "...",
  "timestamp": "2024-03-15T10:30:00Z"
}`

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Code className="mr-2 h-4 w-4" />
            Especificações Técnicas
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Arquitetura e Implementação
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Uma solução robusta, segura e escalável baseada em padrões internacionais de integração financeira e
            conformidade regulatória.
          </p>
        </div>

        <Tabs defaultValue="schema" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="schema">Schema JSON</TabsTrigger>
            <TabsTrigger value="api">API Integration</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
            <TabsTrigger value="architecture">Arquitetura</TabsTrigger>
          </TabsList>

          <TabsContent value="schema" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Estrutura de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <code>{jsonSchema}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Características do Schema</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Database className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Estruturado e Versionado</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Schema JSON com versionamento semântico para evolução controlada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Validação Rigorosa</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Validação automática de tipos, formatos e regras de negócio
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Padrão Internacional</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Baseado em padrões como ISO 20022 e Open Banking
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Server className="mr-2 h-5 w-5" />
                    Exemplo de API
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <code>{apiExample}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Características da API</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">RESTful</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        API REST com endpoints padronizados e documentação OpenAPI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Lock className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Autenticação OAuth 2.0</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Tokens JWT com escopo limitado e renovação automática
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Database className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Rate Limiting</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Controle de taxa para garantir disponibilidade e performance
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Lock className="h-8 w-8 mx-auto mb-2 text-red-600" />
                    Criptografia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <Badge variant="secondary">TLS 1.3</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Criptografia de ponta a ponta com certificados digitais ICP-Brasil
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• AES-256 para dados em repouso</li>
                    <li>• RSA-4096 para assinatura digital</li>
                    <li>• ECDSA para autenticação</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    Auditoria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <Badge variant="secondary">Logs Imutáveis</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Trilha completa de auditoria com blockchain para integridade
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Timestamp criptográfico</li>
                    <li>• Hash de integridade</li>
                    <li>• Assinatura não-repúdio</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Database className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    Privacidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <Badge variant="secondary">LGPD Compliant</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Conformidade total com LGPD e regulamentações do BACEN
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Minimização de dados</li>
                    <li>• Consentimento explícito</li>
                    <li>• Direito ao esquecimento</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Arquitetura do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mx-auto mb-4">
                      <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Instituições Financeiras</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      APIs padronizadas para extração e formatação de dados
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mx-auto mb-4">
                      <Server className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Gateway Seguro</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Validação, transformação e roteamento de dados
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mx-auto mb-4">
                      <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Receita Federal</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Recepção e processamento automático para IRPF
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
