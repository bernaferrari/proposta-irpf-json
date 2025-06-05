import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Download,
  Zap,
  Shield,
  Users,
  Building2,
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
            Padronização{" "}
            <span className="text-green-600 dark:text-green-400"> em JSON</span>{" "}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Uma abordagem simples e eficaz: bancos disponibilizam dados em
            formato JSON (amplamente conhecido na computação) padronizado que o
            programa IRPF pode importar automaticamente.
          </p>
        </div>

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
                      Banco gera arquivo JSON
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Junto com o PDF tradicional, disponibiliza dados
                      estruturados em JSON
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
                      Contribuinte faz download
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Obtém o arquivo JSON da mesma forma que baixa o PDF hoje
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
                      IRPF importa automaticamente
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Programa preenche todos os campos sem intervenção manual
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
