"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Check } from "lucide-react"

interface BankSelectorProps {
  selectedBanks: string[]
  onSelectionChange: (banks: string[]) => void
}

const banks = [
  {
    id: "banco-brasil",
    name: "Banco do Brasil",
    icon: "🏦",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    accounts: 2,
    income: 1,
  },
  {
    id: "itau",
    name: "Itaú Unibanco",
    icon: "🏢",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    accounts: 1,
    income: 3,
  },
  {
    id: "bradesco",
    name: "Bradesco",
    icon: "🏛️",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    accounts: 1,
    income: 1,
  },
  {
    id: "santander",
    name: "Santander",
    icon: "🏪",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    accounts: 2,
    income: 2,
  },
]

export function BankSelector({ selectedBanks, onSelectionChange }: BankSelectorProps) {
  const toggleBank = (bankId: string) => {
    if (selectedBanks.includes(bankId)) {
      onSelectionChange(selectedBanks.filter((id) => id !== bankId))
    } else {
      onSelectionChange([...selectedBanks, bankId])
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 dark:text-white">Instituições Financeiras</h3>
        <Badge variant="secondary">{selectedBanks.length} selecionados</Badge>
      </div>

      <div className="space-y-3">
        {banks.map((bank) => {
          const isSelected = selectedBanks.includes(bank.id)

          return (
            <Card
              key={bank.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950" : ""
              }`}
              onClick={() => toggleBank(bank.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{bank.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{bank.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {bank.accounts} aplicações • {bank.income} rendimentos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge className={bank.color} variant="secondary">
                      Disponível
                    </Badge>
                    {isSelected && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Button variant="outline" className="w-full" onClick={() => onSelectionChange(banks.map((b) => b.id))}>
        <Building2 className="mr-2 h-4 w-4" />
        Selecionar Todos
      </Button>
    </div>
  )
}
