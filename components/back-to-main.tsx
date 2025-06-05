import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackToMain() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Documentação Técnica Completa
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
          Esta especificação técnica fornece o mínimo de detalhes necessários
          para uma primeira versão da automatização do informe de rendimentos.
        </p>
        <Link href="/">
          <Button size="lg" variant="ghost" className="px-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para Visão Geral
          </Button>
        </Link>
      </div>
    </section>
  );
}
