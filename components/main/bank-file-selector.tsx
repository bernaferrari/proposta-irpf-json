"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, FileText } from "lucide-react"

interface BankFileSelectorProps {
  selectedFiles: string[]
  onSelectionChange: (files: string[]) => void
}

const bankFiles = [
  {
    id: "bb",
    name: "Banco do Brasil",
    icon: "🏦",
    fileName: "bb_2024.json",
    size: "2.3 KB",
    accounts: ["Conta Corrente", "Poupança"],
    investments: ["CDB"],
  },
  {
    id: "itau",
    name: "Itaú Unibanco", 
    icon: "🏢",
    fileName: "itau_2024.json",
    size: "1.8 KB",
    accounts: ["Conta Corrente"],
    investments: ["LCI", "Fundos", "Dividendos"],
  },
  {
    id: "bradesco",
    name: "Bradesco",
    icon: "🏛️", 
    fileName: "bradesco_2024.json",
    size: "1.5 KB",
    accounts: ["Poupança"],
    investments: ["CDB"],
  },
  {
    id: "santander",
    name: "Santander",
    icon: "🏪",
    fileName: "santander_2024.json",
    size: "2.1 KB",
    accounts: ["Conta Corrente", "Investimento"],
    investments: ["Tesouro", "Ações"],
  },
]

export function BankFileSelector({ selectedFiles, onSelectionChange }: BankFileSelectorProps) {
  const toggleFile = (fileId: string) => {
    if (selectedFiles.includes(fileId)) {
      onSelectionChange(selectedFiles.filter((id) => id !== fileId))
    } else {
      onSelectionChange([...selectedFiles, fileId])
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Informes Disponíveis</h3>
        <Badge variant="secondary" className="text-xs">{selectedFiles.length} selecionados</Badge>
      </div>

      <div className="space-y-2">
        {bankFiles.map((bank) => {
          const isSelected = selectedFiles.includes(bank.id)

          return (
            <Card
              key={bank.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-sm ${
                isSelected ? "ring-1 ring-blue-500 bg-blue-50 dark:bg-blue-950" : ""
              }`}
              onClick={() => toggleFile(bank.id)}
            >
              <CardContent className="p-3">
                <div className="flex items-center space-x-3">
                  <div className="text-lg flex-shrink-0">{bank.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm text-gray-900 dark:text-white truncate">
                        {bank.name}
                      </h4>
                      {isSelected && (
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 flex-shrink-0 ml-2">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="h-3 w-3 text-gray-400 flex-shrink-0" />
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono truncate w-full">
                        {bank.fileName}
                      </span>
                      <Badge variant="outline" className="text-xs flex-shrink-0">
                        {bank.size}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 space-y-0.5">
                      <div className="truncate">
                        <span className="font-medium">Contas:</span> {bank.accounts.join(", ")}
                      </div>
                      <div className="truncate">
                        <span className="font-medium">Investimentos:</span> {bank.investments.join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
