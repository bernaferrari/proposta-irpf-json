"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { TrendingUp, DollarSign, FileText, Download, Building2, Wallet } from "lucide-react"

interface DataVisualizationProps {
  selectedBanks: string[]
  onImport: () => void
}

// Mock data based on selected banks
const bankData = {
  "banco-brasil": {
    name: "Banco do Brasil",
    applications: [
      { type: "Conta Corrente", account: "12345-6", balance: 15000, income: 0 },
      { type: "Poupança", account: "54321-0", balance: 25000, income: 800 },
    ],
    income: [{ type: "CDB", applied: 50000, gross: 3500, tax: 525, net: 2975 }],
    assets: [{ code: "01", description: "Conta corrente", previous: 12000, current: 15000 }],
  },
  itau: {
    name: "Itaú Unibanco",
    applications: [{ type: "Conta Corrente", account: "98765-4", balance: 8500, income: 0 }],
    income: [
      { type: "LCI", applied: 30000, gross: 2100, tax: 0, net: 2100 },
      { type: "Fundo de Investimento", applied: 20000, gross: 1800, tax: 270, net: 1530 },
      { type: "Dividendos", applied: 0, gross: 1200, tax: 0, net: 1200 },
    ],
    assets: [],
  },
  bradesco: {
    name: "Bradesco",
    applications: [{ type: "Poupança", account: "11111-2", balance: 5000, income: 200 }],
    income: [{ type: "CDB", applied: 40000, gross: 2800, tax: 420, net: 2380 }],
    assets: [{ code: "01", description: "Poupança", previous: 4500, current: 5000 }],
  },
  santander: {
    name: "Santander",
    applications: [
      { type: "Conta Corrente", account: "77777-8", balance: 12000, income: 0 },
      { type: "Conta Investimento", account: "88888-9", balance: 35000, income: 1200 },
    ],
    income: [
      { type: "Tesouro Direto", applied: 25000, gross: 1750, tax: 262.5, net: 1487.5 },
      { type: "Ações", applied: 15000, gross: 2200, tax: 0, net: 2200 },
    ],
    assets: [
      { code: "01", description: "Conta corrente", previous: 10000, current: 12000 },
      { code: "02", description: "Conta investimento", previous: 30000, current: 35000 },
    ],
  },
}

export function DataVisualization({ selectedBanks, onImport }: DataVisualizationProps) {
  const consolidatedData = useMemo(() => {
    const applications: any[] = []
    const income: any[] = []
    const assets: any[] = []

    selectedBanks.forEach((bankId) => {
      const bank = bankData[bankId as keyof typeof bankData]
      if (bank) {
        applications.push(...bank.applications.map((app) => ({ ...app, bank: bank.name })))
        income.push(...bank.income.map((inc) => ({ ...inc, bank: bank.name })))
        assets.push(...bank.assets.map((asset) => ({ ...asset, bank: bank.name })))
      }
    })

    return { applications, income, assets }
  }, [selectedBanks])

  const summary = useMemo(() => {
    const totalBalance = consolidatedData.applications.reduce((sum, app) => sum + app.balance, 0)
    const totalIncome = consolidatedData.income.reduce((sum, inc) => sum + inc.gross, 0)
    const totalTax = consolidatedData.income.reduce((sum, inc) => sum + inc.tax, 0)
    const totalNet = consolidatedData.income.reduce((sum, inc) => sum + inc.net, 0)

    return { totalBalance, totalIncome, totalTax, totalNet }
  }, [consolidatedData])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const pieData = selectedBanks
    .map((bankId) => {
      const bank = bankData[bankId as keyof typeof bankData]
      if (!bank) return null

      const bankBalance = bank.applications.reduce((sum, app) => sum + app.balance, 0)
      return {
        name: bank.name,
        value: bankBalance,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
      }
    })
    .filter(Boolean)

  if (selectedBanks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Building2 className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Selecione Instituições Financeiras</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Escolha um ou mais bancos para visualizar a consolidação de dados
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Wallet className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Saldo Total</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(summary.totalBalance)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Rendimentos</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(summary.totalIncome)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">IR Retido</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(summary.totalTax)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Líquido</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(summary.totalNet)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Banco</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rendimentos por Tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={consolidatedData.income}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Bar dataKey="gross" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Data Tables */}
      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="applications">Aplicações</TabsTrigger>
          <TabsTrigger value="income">Rendimentos</TabsTrigger>
          <TabsTrigger value="assets">Bens e Direitos</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Aplicações Financeiras</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Banco</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Conta</TableHead>
                    <TableHead className="text-right">Saldo (31/12)</TableHead>
                    <TableHead className="text-right">Rendimentos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {consolidatedData.applications.map((app, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{app.bank}</TableCell>
                      <TableCell>{app.type}</TableCell>
                      <TableCell>{app.account}</TableCell>
                      <TableCell className="text-right font-mono">{formatCurrency(app.balance)}</TableCell>
                      <TableCell className="text-right font-mono">{formatCurrency(app.income)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="income" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rendimentos</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Banco</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Valor Aplicado</TableHead>
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
                      <TableCell className="text-right font-mono">{formatCurrency(inc.applied)}</TableCell>
                      <TableCell className="text-right font-mono">{formatCurrency(inc.gross)}</TableCell>
                      <TableCell className="text-right font-mono">{formatCurrency(inc.tax)}</TableCell>
                      <TableCell className="text-right font-mono">{formatCurrency(inc.net)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bens e Direitos</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Banco</TableHead>
                    <TableHead>Código</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead className="text-right">Valor Anterior</TableHead>
                    <TableHead className="text-right">Valor Atual</TableHead>
                    <TableHead className="text-right">Variação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {consolidatedData.assets.map((asset, index) => {
                    const variation = asset.current - asset.previous
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{asset.bank}</TableCell>
                        <TableCell>{asset.code}</TableCell>
                        <TableCell>{asset.description}</TableCell>
                        <TableCell className="text-right font-mono">{formatCurrency(asset.previous)}</TableCell>
                        <TableCell className="text-right font-mono">{formatCurrency(asset.current)}</TableCell>
                        <TableCell
                          className={`text-right font-mono ${
                            variation > 0 ? "text-green-600" : variation < 0 ? "text-red-600" : ""
                          }`}
                        >
                          {formatCurrency(variation)}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Import Button */}
      <div className="flex justify-center pt-6">
        <Button size="lg" onClick={onImport} className="px-8 py-4 text-lg font-semibold">
          <Download className="mr-2 h-5 w-5" />
          Importar para IRPF
        </Button>
      </div>
    </div>
  )
}
