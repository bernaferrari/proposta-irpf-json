import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Download,
  Zap,
  Shield,
  Users,
  Building2,
  FileText,
  Plus,
} from "lucide-react";

export function ProposedSolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-green-200 text-green-700 dark:border-green-800 dark:text-green-300"
          >
            <Zap className="mr-2 h-4 w-4" />
            Solução Proposta
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            <span className="text-green-600 dark:text-green-400">Adição</span>{" "}
            de Dados Estruturados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Manter o PDF tradicional e{" "}
            <strong className="text-green-600 dark:text-green-400">
              adicionar
            </strong>{" "}
            dados estruturados em JSON. O usuário importa o arquivo e o programa
            IRPF
            <strong className="text-green-600 dark:text-green-400">
              {" "}
              lê e preenche automaticamente
            </strong>
            .
          </p>

          <div className="mt-6 bg-green-100 dark:bg-green-900 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-green-800 dark:text-green-200">
              <Plus className="h-5 w-5" />
              <span className="font-semibold">
                Esta é uma proposta de ADIÇÃO, não substituição
              </span>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">
              O PDF continua disponível. Apenas acrescentamos uma
              funcionalidade.
            </p>
          </div>
        </div>

        {/* Implementation Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Duas Formas de Implementar
          </h3>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 relative">
            {/* Option 1 */}
            <Card className="border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">
                      1
                    </span>
                  </div>
                </div>
                <CardTitle className="text-green-900 dark:text-green-100">
                  Download Separado
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-4 mb-3">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-red-600" />
                        <span className="text-sm font-medium">PDF</span>
                      </div>
                      <Plus className="h-4 w-4 text-gray-400" />
                      <div className="flex items-center space-x-2">
                        <Download className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium">JSON</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      Cliente baixa os dois arquivos
                    </p>
                  </div>

                  <div className="text-left space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Implementação mais simples
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">
                        Cliente escolhe usar ou não
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Arquivos independentes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OR Separator */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 border-2 border-gray-200 dark:border-gray-600 shadow-lg">
                <span className="text-lg font-bold text-gray-600 dark:text-gray-300">
                  OU
                </span>
              </div>
            </div>

            {/* Mobile OR */}
            <div className="flex lg:hidden justify-center -my-4 z-10">
              <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 border-2 border-gray-200 dark:border-gray-600 shadow-lg">
                <span className="text-lg font-bold text-gray-600 dark:text-gray-300">
                  OU
                </span>
              </div>
            </div>

            {/* Option 2 */}
            <Card className="border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">
                      2
                    </span>
                  </div>
                </div>
                <CardTitle className="text-green-900 dark:text-green-100">
                  JSON Embutido no PDF
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="relative">
                        <FileText className="h-6 w-6 text-red-600" />
                        <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">
                            J
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-medium">
                        PDF + JSON invisível
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      Um só arquivo, dados embutidos
                    </p>
                  </div>

                  <div className="text-left space-y-2"></div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Experiência mais simples</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Um arquivo só</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">IRPF extrai automaticamente</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How it works and benefits */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-12">
          <Card className="border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-green-900 dark:text-green-100">
                <Download className="mr-2 h-5 w-5 text-green-600" />
                Como Funciona
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Banco gera dados estruturados
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Junto com o PDF tradicional, disponibiliza os mesmos dados
                      em formato JSON
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Contribuinte obtém os dados
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Download do JSON separado <strong>OU</strong> PDF com
                      dados embutidos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Programa lê e preenche automaticamente
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Após importação pelo usuário, programa preenche todos os
                      campos sem digitação manual
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-green-900 dark:text-green-100">
                <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                Benefícios Imediatos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Eliminação de erros de digitação
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Redução de 90% no tempo de preenchimento
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Maior conformidade fiscal
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Melhoria na experiência do contribuinte
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Redução de custos operacionais
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Leitura automática após importação</strong> -
                    usuário apenas seleciona o arquivo
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Clarification - NEW SECTION */}
        <div className="mt-8 bg-white dark:bg-green-950 rounded-2xl p-6 shadow-lg max-w-4xl mx-auto border border-green-200 dark:border-green-800">
          <div className="flex items-start space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0">
              <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                🔒 Segurança: Processo Idêntico ao PDF Atual
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                <strong>Sem mudanças no processo de segurança:</strong> O
                usuário baixa um arquivo local do banco (como já faz com PDF) e
                importa no programa IRPF offline.{" "}
                <strong>
                  Nenhuma conexão online, nenhuma transmissão de dados, nenhum
                  rastro adicional.
                </strong>{" "}
                É exatamente como importar um PDF, mas com dados estruturados
                que o programa consegue ler automaticamente.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                >
                  Arquivo Local
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                >
                  Sem Conexão Online
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                >
                  Processo Offline
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
