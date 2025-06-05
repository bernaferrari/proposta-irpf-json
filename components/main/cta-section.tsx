import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-6">
          Proposta de Modernização do Informe de Rendimentos
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
          Assim como a declaração pré-preenchida facilitou a vida dos brasileiros, 
          melhorar o informe de rendimentos faria a declaração levar minutos, não horas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/technical">
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              <FileText className="mr-2 h-5 w-5" />
              Ver Proposta de Especificação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
