"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, FileText, CheckCircle } from "lucide-react"

interface FileUploadDemoProps {
  onFileUploaded: (file: any) => void
}

const sampleData = {
  metadados: {
    versao_schema: "1.0.0",
    instituicao: {
      cnpj: "00.000.000/0001-91",
      nome: "Banco do Brasil S.A.",
      codigo_banco: "001",
    },
    data_geracao: "2024-03-15",
    ano_calendario: 2023,
  },
  contribuinte: {
    cpf: "123.456.789-00",
    nome: "Maria Silva Santos",
  },
  aplicacoes_financeiras: [
    {
      tipo: "CONTA_CORRENTE",
      numero_conta: "12345-6",
      saldo_31_12: 15000.0,
      rendimentos_ano: 0.0,
    },
    {
      tipo: "POUPANCA",
      numero_conta: "54321-0",
      saldo_31_12: 25000.0,
      rendimentos_ano: 800.0,
    },
  ],
  rendimentos_tributacao_exclusiva: [
    {
      tipo: "CDB",
      instituicao: "Banco do Brasil",
      valor_aplicado: 50000.0,
      rendimentos_brutos: 3500.0,
      ir_retido: 525.0,
      rendimentos_liquidos: 2975.0,
    },
  ],
  bens_direitos: [
    {
      codigo: "01",
      descricao: "Conta corrente - Banco do Brasil",
      valor_31_12_anterior: 12000.0,
      valor_31_12_atual: 15000.0,
    },
  ],
}

export function FileUploadDemo({ onFileUploaded }: FileUploadDemoProps) {
  const [dragOver, setDragOver] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    simulateUpload()
  }

  const simulateUpload = () => {
    setUploaded(true)
    onFileUploaded(sampleData)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload()
    }
  }

  if (uploaded) {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Arquivo Importado com Sucesso!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          O informe de rendimentos foi processado e os dados estão prontos para visualização.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setUploaded(false)
            onFileUploaded(null)
          }}
        >
          Importar Outro Arquivo
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragOver ? "border-blue-500 bg-blue-50 dark:bg-blue-950" : "border-gray-300 dark:border-gray-600"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex justify-center mb-4">
          <Upload className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Arraste o arquivo JSON aqui</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          ou clique para selecionar o arquivo do informe de rendimentos
        </p>
        <input type="file" accept=".json" onChange={handleFileInput} className="hidden" id="file-input" />
        <label htmlFor="file-input">
          <Button variant="outline" className="cursor-pointer">
            Selecionar Arquivo JSON
          </Button>
        </label>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Não tem um arquivo JSON? Use nosso exemplo para testar:
        </p>
        <Button onClick={simulateUpload} variant="secondary">
          <FileText className="mr-2 h-4 w-4" />
          Usar Arquivo de Exemplo
        </Button>
      </div>
    </div>
  )
}
