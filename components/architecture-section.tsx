import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Server, FileText, ArrowRight } from "lucide-react"

export function ArchitectureSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Arquitetura
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Visão Técnica do Sistema</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Arquitetura robusta, escalável e segura para suportar a integração entre instituições financeiras e a
            Receita Federal.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Fluxo de Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mx-auto md:mx-0 mb-4">
                    <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Instituições Financeiras</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
                    Extração e formatação de dados financeiros dos clientes
                  </p>
                </div>

                <ArrowRight className="h-8 w-8 text-gray-400 hidden md:block" />
                <div className="h-8 w-8 flex items-center justify-center md:hidden">
                  <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
                </div>

                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mx-auto mb-4">
                    <Server className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Gateway Seguro</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
                    Validação, transformação e roteamento de dados
                  </p>
                </div>

                <ArrowRight className="h-8 w-8 text-gray-400 hidden md:block" />
                <div className="h-8 w-8 flex items-center justify-center md:hidden">
                  <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
                </div>

                <div className="text-center md:text-right">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mx-auto md:ml-auto mb-4">
                    <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Receita Federal</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
                    Recepção e processamento automático para IRPF
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Componentes do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Módulo de Extração de Dados</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Componente instalado nas instituições financeiras para extração padronizada de dados
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">API Gateway</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Interface padronizada para comunicação entre instituições e Receita Federal
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Validador de Schema</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Verifica conformidade dos dados com o schema JSON definido
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Módulo de Segurança</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Gerencia autenticação, criptografia e auditoria de todas as operações
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tecnologias Utilizadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Backend</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Java Spring Boot</li>
                    <li>• Node.js</li>
                    <li>• PostgreSQL</li>
                    <li>• Redis</li>
                    <li>• Kafka</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Segurança</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• OAuth 2.0</li>
                    <li>• JWT</li>
                    <li>• TLS 1.3</li>
                    <li>• HSM</li>
                    <li>• WAF</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Infraestrutura</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Kubernetes</li>
                    <li>• Docker</li>
                    <li>• Terraform</li>
                    <li>• Prometheus</li>
                    <li>• Grafana</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Integração</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• REST APIs</li>
                    <li>• JSON Schema</li>
                    <li>• OpenAPI</li>
                    <li>• Swagger</li>
                    <li>• Postman</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
