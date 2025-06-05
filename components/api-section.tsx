import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Lock, Zap } from "lucide-react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function ApiSection() {
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

  const responseExample = `HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "success",
  "protocol": "RF2024031512345678",
  "timestamp": "2024-03-15T10:30:05Z",
  "validations": [
    {
      "field": "aplicacoes_financeiras[0].saldo_31_12",
      "status": "valid"
    },
    {
      "field": "rendimentos_tributacao_exclusiva[0].ir_retido",
      "status": "valid"
    }
  ]
}`

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            API RESTful
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Interface de Programação</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            API segura e padronizada para transmissão de dados entre instituições financeiras e a Receita Federal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="mr-2 h-5 w-5" />
                Exemplo de Requisição
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SyntaxHighlighter
                language="http"
                style={oneDark}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                }}
              >
                {apiExample}
              </SyntaxHighlighter>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="mr-2 h-5 w-5" />
                Exemplo de Resposta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SyntaxHighlighter
                language="http"
                style={oneDark}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                }}
              >
                {responseExample}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Lock className="mr-2 h-5 w-5" />
                Autenticação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• OAuth 2.0 com JWT</li>
                <li>• Certificados Digitais ICP-Brasil</li>
                <li>• Tokens com escopo limitado</li>
                <li>• Renovação automática de tokens</li>
                <li>• Autenticação em dois fatores</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Zap className="mr-2 h-5 w-5" />
                Endpoints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  • <code>/api/auth</code> - Autenticação
                </li>
                <li>
                  • <code>/api/dados-bancarios</code> - Envio de dados
                </li>
                <li>
                  • <code>/api/status</code> - Verificação de status
                </li>
                <li>
                  • <code>/api/validacao</code> - Validação prévia
                </li>
                <li>
                  • <code>/api/protocolos</code> - Consulta de protocolos
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Server className="mr-2 h-5 w-5" />
                Características
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Rate limiting: 100 req/min</li>
                <li>• Timeout: 30 segundos</li>
                <li>• Compressão GZIP</li>
                <li>• Validação em tempo real</li>
                <li>• Logs detalhados e auditáveis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
