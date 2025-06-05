import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarDays } from "lucide-react"

export function ImplementationSection() {
  const phases = [
    {
      phase: "Fase 1",
      title: "Projeto Piloto",
      duration: "6 meses",
      progress: 100,
      status: "Concluído",
      color: "bg-green-500",
      items: [
        "Definição do schema JSON final",
        "Desenvolvimento da API de integração",
        "Testes com 3 grandes bancos",
        "Validação de segurança e conformidade",
      ],
    },
    {
      phase: "Fase 2",
      title: "Expansão Controlada",
      duration: "9 meses",
      progress: 60,
      status: "Em andamento",
      color: "bg-blue-500",
      items: [
        "Integração com 10 maiores instituições financeiras",
        "Implementação de feedback da fase piloto",
        "Testes de carga e performance",
        "Aprimoramento da documentação técnica",
      ],
    },
    {
      phase: "Fase 3",
      title: "Lançamento Nacional",
      duration: "12 meses",
      progress: 0,
      status: "Planejado",
      color: "bg-gray-300 dark:bg-gray-600",
      items: [
        "Disponibilização para todas instituições financeiras",
        "Campanha de comunicação para contribuintes",
        "Suporte técnico ampliado",
        "Monitoramento contínuo e melhorias",
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Implementação
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cronograma de Implantação</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Plano estruturado para implementação gradual e controlada da solução em todo o sistema financeiro nacional.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${phase.color}`}>
                      <span className="text-lg font-bold text-white">{index + 1}</span>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">
                        {phase.phase}
                      </Badge>
                      <CardTitle>{phase.title}</CardTitle>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <CalendarDays className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{phase.duration}</span>
                    </div>
                    <Badge
                      variant={
                        phase.status === "Concluído"
                          ? "success"
                          : phase.status === "Em andamento"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {phase.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progresso</span>
                    <span>{phase.progress}%</span>
                  </div>
                  <Progress value={phase.progress} className="h-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 mt-0.5">
                        <span className="text-xs">{itemIndex + 1}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Próximos Passos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2">Aprovação Regulatória</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Finalização das normas e regulamentações necessárias para implementação
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Capacitação Técnica</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Treinamento das equipes técnicas das instituições financeiras
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Comunicação Pública</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Campanha de esclarecimento para contribuintes sobre os benefícios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
