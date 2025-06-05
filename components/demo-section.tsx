"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BankSelector } from "@/components/bank-selector"
import { DataVisualization } from "@/components/data-visualization"
import { ImportModal } from "@/components/import-modal"
import { Play, Database } from "lucide-react"

export function DemoSection() {
  const [selectedBanks, setSelectedBanks] = useState<string[]>([])
  const [showImportModal, setShowImportModal] = useState(false)

  return (
    <section
      id="demo-section"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Play className="mr-2 h-4 w-4" />
            Demonstração Interativa
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">Veja a Solução em Ação</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experimente como seria a integração automática entre bancos e Receita Federal. Selecione instituições
            financeiras e veja os dados sendo consolidados em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Fontes de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BankSelector selectedBanks={selectedBanks} onSelectionChange={setSelectedBanks} />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Dados Consolidados</CardTitle>
              </CardHeader>
              <CardContent>
                <DataVisualization selectedBanks={selectedBanks} onImport={() => setShowImportModal(true)} />
              </CardContent>
            </Card>
          </div>
        </div>

        <ImportModal open={showImportModal} onOpenChange={setShowImportModal} selectedBanks={selectedBanks} />
      </div>
    </section>
  )
}
