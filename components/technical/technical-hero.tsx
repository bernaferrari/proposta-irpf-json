import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function TechnicalHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 md:mb-0 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Visão Geral
            </Button>
          </Link>
          <Badge variant="outline" className="border-gray-600 text-gray-300">
            Documentação Técnica
          </Badge>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Especificações Técnicas
            <span className="block text-blue-400">
              Integração Bancária IRPF
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Documentação para desenvolvedores e projetistas sobre o uso de JSON
            como substituição ao PDF no IRPF.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Code className="h-4 w-4" />
            <span>Versão da Especificação: 1.0.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
