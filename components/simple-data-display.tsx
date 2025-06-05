"use client"

import { useMemo } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Building2 } from "lucide-react"

interface SimpleDataDisplayProps {
  selectedBanks: string[]
  onImport: () => void
}

// Mock data based on selected banks
const bankData = {
  "banco-brasil": {
    name: "Banco do Brasil",
    applications: [
      { type: "Conta Corrente", balance: 15000 },
      { type: "Poupança", balance: 25000 },
    ],
    income: [{ type: "CDB", gross: 3500, tax: 525, net: 2975 }],
  },
  itau: {
    name: "Itaú Unibanco",
    applications: [{ type: "Conta Corrente", balance: 8500 }],
    income: [
      { type: "LCI", gross: 2100, tax: 0, net: 2100 },
      { type: "Fundo de Investimento", gross: 1800, tax: 270, net: 1530 },
    ],
  },
  bradesco: {
    name: "Bradesco",
    applications: [{ type: "Poupança", balance: 5000 }],
    income: [{ type: "CDB", gross: 2800, tax: 420, net: 2380 }],
  },
}

export function SimpleDataDisplay({ selectedBanks, onImport }: SimpleDataDisplayProps) {
  const consolidatedData = useMemo(() => {
    const applications: any[] = []
    const income: any[] = []

    selectedBanks.forEach((bankId) => {
      const bank = bankData[bankId as keyof typeof bankData]
      if (bank) {
        applications.push(...bank.applications.map((app) => ({ ...app, bank: bank.name })))
        income.push(...bank.income.map((inc) => ({ ...inc, bank: bank.name })))
      }
    })

    return { applications, income }
  }, [selectedBanks])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  if (selectedBanks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Building2 className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Selecione seus Bancos</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Escolha um ou mais bancos para visualizar seus dados financeiros
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="applications">Aplicações</TabsTrigger>
          <TabsTrigger value="income">Rendimentos</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Banco</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead className="text-right">Saldo (31/12)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consolidatedData.applications.map((app, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{app.bank}</TableCell>
                  <TableCell>{app.type}</TableCell>
                  <TableCell className="text-right font-mono">{formatCurrency(app.balance)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="income" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Banco</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead className="text-right">Rendimentos Brutos</TableHead>
                <TableHead className="text-right">IR Retido</TableHead>
                <TableHead className="text-right">Rendimentos Líquidos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consolidatedData.income.map((inc, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{inc.bank}</TableCell>
                  <TableCell>{inc.type}</TableCell>
                  <TableCell className="text-right font-mono">{formatCurrency(inc.gross)}</TableCell>
                  <TableCell className="text-right font-mono">{formatCurrency(inc.tax)}</TableCell>
                  <TableCell className="text-right font-mono">{formatCurrency(inc.net)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      {/* Information Note */}
      <div className="flex justify-center pt-6">
        <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Processo Simplificado</h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            Com arquivos JSON padronizados, o programa IRPF importaria automaticamente todos os dados financeiros,
            eliminando horas de digitação manual.
          </p>
        </div>
      </div>
    </div>
  )
}
