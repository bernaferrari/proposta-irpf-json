"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  FileText,
  Zap,
  Download,
  Sparkles,
  Target,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";

export function HeroSection() {
  const scrollToDemo = () => {
    document
      .getElementById("demo-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const exampleJson = `{
  "metadados": {
    "versao_schema": "1.0.0",
    "instituicao": {
      "nome": "Banco do Brasil S.A.",
      "codigo_banco": "001"
    },
    "ano_calendario": 2023
  },
  "contribuinte": {
    "cpf": "123.456.789-00",
    "nome": "Maria Silva Santos"
  },
  "aplicacoes_financeiras": [
    {
      "tipo": "CONTA_CORRENTE",
      "saldo_31_12": 15000.00
    },
    {
      "tipo": "POUPANCA", 
      "saldo_31_12": 25000.00,
      "rendimentos_ano": 800.00
    }
  ],
  "rendimentos_tributacao_exclusiva": [
    {
      "tipo": "CDB",
      "rendimentos_brutos": 3500.00,
      "ir_retido": 525.00,
      "rendimentos_liquidos": 2975.00
    }
  ]
}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-2000" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 text-base font-medium bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 border-blue-200 dark:border-blue-800"
          >
            <Sparkles className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
            Evolução da Declaração de IRPF
          </Badge>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl mb-8">
            De PDF para
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent block mt-2 pb-2">
              Importação Automática
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl">
            Modernize o Informe de Rendimentos com um arquivo padronizado (JSON)
            que o programa IRPF possa importar automaticamente,
            <strong className="text-blue-600 dark:text-blue-400">
              {" "}
              eliminando digitação e erros
            </strong>
            .
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="lg"
              className="px-10 py-5 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg"
              onClick={scrollToDemo}
            >
              <Target className="mr-3 h-6 w-6" />
              Ver Demonstração
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Link href="/technical">
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-5 text-xl font-semibold border-2 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                <FileText className="mr-3 h-6 w-6" />
                Especificação JSON
              </Button>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  30M+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Contribuintes Beneficiados
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  90%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Redução no Tempo
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Eliminação de Erros
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Menos PDFs
              </h3>
              <p className="mt-3 text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                Elimine a necessidade de digitação manual dos informes de
                rendimentos bancários
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 group-hover:scale-110 transition-transform duration-300">
                <Download className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Importação Direta
              </h3>
              <p className="mt-3 text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                O programa IRPF importa o arquivo sem intervenção humana
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Zero Digitação
              </h3>
              <p className="mt-3 text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                Preenchimento automático completo sem risco de erros de
                transcrição
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Exemplo de Arquivo Padronizado (JSON)
            </h3>
            <SyntaxHighlighter
              language="json"
              style={oneDark}
              customStyle={{
                borderRadius: "1rem",
                fontSize: "0.875rem",
                margin: 0,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              {exampleJson}
            </SyntaxHighlighter>
            <p className="text-blue-800 text-center mt-4 w-full">
              O programa IRPF poderia importar esse arquivo, eliminando horas de
              digitação manual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
