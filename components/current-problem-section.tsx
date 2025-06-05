import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  FileText,
  Clock,
  Calculator,
  Users,
  TrendingDown,
} from "lucide-react";

const problems = [
  {
    icon: FileText,
    title: "Processo Manual",
    description:
      "Contribuintes precisam digitar manualmente todos os dados do PDF",
    impact: "Alto erro humano",
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    icon: Clock,
    title: "Tempo Excessivo",
    description:
      "Horas gastas transcrevendo informações que já existem digitalmente",
    impact: "Baixa eficiência",
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Calculator,
    title: "Inconsistências",
    description:
      "Erros de digitação geram inconsistências entre bancos e declaração",
    impact: "Retrabalho",
    color: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Users,
    title: "Experiência Ruim",
    description:
      "Processo complexo e propenso a erros para milhões de contribuintes",
    impact: "Baixa satisfação",
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
];

export function CurrentProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950 dark:via-orange-950 dark:to-amber-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-red-200 text-red-700 dark:border-red-800 dark:text-red-300"
          >
            <TrendingDown className="mr-2 h-4 w-4" />
            Situação Atual
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Os <span className="text-red-600 dark:text-red-400">Desafios</span>{" "}
            do Sistema Atual
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            O processo atual de declaração do IRPF apresenta ineficiências que
            podem ser resolvidas com padronização tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${problem.color}`}
                  >
                    <problem.icon className={`h-6 w-6 ${problem.iconColor}`} />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {problem.description}
                </p>
                <Badge
                  variant="outline"
                  className="text-xs border-red-200 text-red-700 dark:border-red-800 dark:text-red-300"
                >
                  {problem.impact}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-red-200 dark:border-red-800 shadow-lg">
          <div className="flex items-start gap-6">
            <div className="flex flex-shrink-0 h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex flex-col w-full flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Exemplo Real
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Uma pessoa com conta em banco e investimentos recebe um PDF
                extenso. Para declarar no IRPF, precisa localizar e digitar
                manualmente cada informação: saldos, rendimentos, IR retido,
                entre outros. Esse processo é demorado e propenso a erros.
                Declaração pré-preenchida não consegue todos os dados (bens e
                direitos, conta de pagamentos, dividendos, etc.).
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                >
                  30+ campos para digitar
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                >
                  Alto risco de erro
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                >
                  Processo arcaico
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
