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
  CheckCircle,
  Plus,
  Shield,
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
    "ano_calendario": 2024
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse delay-2000" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 text-base font-medium bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-green-200 dark:border-green-800"
          >
            <Plus className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
            Proposta de Melhoria para o IRPF
          </Badge>

          <h1 className="mx-auto max-w-6xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl mb-8">
            Informe de Rendimentos com
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent block mt-2 pb-2">
              Importação Facilitada
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl">
            Proposta de extensão simples do processo atual: bancos
            disponibilizam um arquivo JSON,{" "}
            <strong className="text-green-600 dark:text-green-400">
              {" "}
              além do PDF tradicional
            </strong>
            . Usuário importa o arquivo e o programa IRPF{" "}
            <strong>lê e preenche automaticamente</strong>.
          </p>

          {/* Key Benefits */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  PDF + JSON
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Mantém compatibilidade atual
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  90%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Menos tempo de preenchimento
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  Zero
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Erros de digitação
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="lg"
              className="px-10 py-5 text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg text-white"
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
                className="px-10 py-5 text-xl font-semibold border-2 hover:bg-green-50 dark:hover:bg-green-950 border-green-300 dark:border-green-700"
              >
                <FileText className="mr-3 h-6 w-6" />
                Especificação Técnica
              </Button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 group-hover:scale-110 transition-transform duration-300">
                <Plus className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Adição, Não Substituição
              </h3>
              <p className="mt-3 text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                PDF tradicional permanece disponível. Apenas acrescentamos
                funcionalidade para quem quiser usar
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 group-hover:scale-110 transition-transform duration-300">
                <Download className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Leitura e Preenchimento Automático
              </h3>
              <p className="mt-3 text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                Usuário importa o arquivo JSON e o programa IRPF lê e preenche
                todos os campos automaticamente
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Precisão Total
              </h3>
              <p className="mt-3 text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                Dados vindos diretamente do banco eliminam completamente erros
                de transcrição como vírgulas e ativos complexos (ex:
                amortização)
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Exemplo de Arquivo JSON Padronizado
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
            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4 mt-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-2 text-green-800 dark:text-green-200">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Como funcionaria:</span>
              </div>
              <p className="text-green-700 dark:text-green-300 mt-2 text-sm text-start">
                O usuário baixa e importa esse arquivo no programa IRPF. O
                programa lê automaticamente os dados e preenche todos os campos
                em segundos, eliminando horas de digitação manual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
