import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  Shield,
  TrendingDown,
  Users,
  Zap,
  FileText,
  Building2,
  Globe,
} from "lucide-react";
import { BenefitCard } from "./benefit-card";

export function BenefitsSection() {
  const benefits = [
    {
      category: "Para o Contribuinte",
      icon: Users,
      className: "bg-gradient-to-br from-blue-500 to-blue-600",
      items: [
        {
          icon: Clock,
          title: "Economia de Tempo",
          description:
            "Preenchimento automático elimina horas de digitação manual",
        },
        {
          icon: CheckCircle,
          title: "Precisão Total",
          description:
            "Dados vindos diretamente dos bancos, sem erros de transcrição",
        },
        {
          icon: Zap,
          title: "Experiência Simplificada",
          description: "Interface intuitiva e processo automatizado",
        },
      ],
    },
    {
      category: "Para a Receita Federal",
      icon: Building2,
      className: "bg-gradient-to-br from-green-500 to-green-600",
      items: [
        {
          icon: Shield,
          title: "Maior Conformidade",
          description: "Redução significativa de inconsistências e omissões",
        },
        {
          icon: TrendingDown,
          title: "Redução de Custos",
          description: "Menos recursos gastos com fiscalização e correções",
        },
        {
          icon: FileText,
          title: "Dados Estruturados",
          description:
            "Informações padronizadas facilitam análises e cruzamentos",
        },
      ],
    },
    {
      category: "Para o Sistema Financeiro",
      icon: Globe,
      className: "bg-gradient-to-br from-purple-500 to-purple-600",
      items: [
        {
          icon: Users,
          title: "Melhor Relacionamento",
          description: "Clientes mais satisfeitos com processo simplificado",
        },
        {
          icon: Shield,
          title: "Segurança Reforçada",
          description: "Transmissão direta elimina riscos de interceptação",
        },
        {
          icon: Zap,
          title: "Eficiência Operacional",
          description: "Automatização reduz custos operacionais",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className="mb-6 bg-background text-base px-6 py-2"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Benefícios Múltiplos
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
            Uma Solução que
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Beneficia Todos
            </span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A automatização cria um ecossistema onde contribuintes, Receita
            Federal e instituições financeiras saem ganhando.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              className={benefit.className}
              category={benefit.category}
              icon={benefit.icon}
              items={benefit.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
