import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, FileText, Building2, Zap } from "lucide-react";

export function FutureExtensionsSection() {
  const extensions = [
    {
      title: "Notas de Corretagem",
      icon: TrendingUp,
      description:
        "Padronização das notas de corretagem em JSON para importação automática de operações na bolsa",
      benefits: [
        "Eliminação da digitação manual de centenas de operações",
        "Cálculo automático de ganhos/perdas de capital",
        "Controle preciso de custos e taxas",
        "Histórico completo de operações",
      ],
      complexity: "Complexidade Média",
    },
    {
      title: "Informes de Fundos",
      icon: FileText,
      description:
        "Dados estruturados de fundos de investimento, incluindo come-cotas e distribuições",
      benefits: [
        "Importação automática de rendimentos de fundos",
        "Controle de come-cotas",
        "Histórico de aplicações e resgates",
        "Dados de tributação específicos",
      ],
      complexity: "Complexidade Baixa",
    },
    {
      title: "Previdência Privada",
      icon: Building2,
      description:
        "Informes de PGBL/VGBL com dados de contribuições, portabilidade e resgates",
      benefits: [
        "Controle automático de contribuições dedutíveis",
        "Histórico de portabilidade entre fundos",
        "Cálculo correto de tributação na fonte",
        "Dados de beneficiários",
      ],
      complexity: "Complexidade Média",
    },
    {
      title: "Cartões de Crédito",
      icon: Zap,
      description:
        "Dados estruturados de programas de pontos e cashback para declaração de rendimentos",
      benefits: [
        "Declaração automática de cashback",
        "Controle de programas de pontos",
        "Histórico de resgates e utilizações",
        "Tributação correta de benefícios",
      ],
      complexity: "Complexidade Baixa",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Extensões Futuras
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Roadmap de Expansão
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Após a implementação, o mesmo conceito pode ser aplicado a outros
            documentos financeiros, criando um ecossistema completo de automação
            fiscal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {extensions.map((extension, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <extension.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {extension.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge
                          variant={
                            extension.complexity === "Complexidade Baixa"
                              ? "secondary"
                              : "default"
                          }
                          className="text-xs"
                        >
                          {extension.complexity}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {extension.description}
                </p>

                <h4 className="font-semibold mb-2">Benefícios:</h4>
                <ul className="space-y-1">
                  {extension.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-green-500 mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
