"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

interface SimpleBankSelectorProps {
  selectedBanks: string[]
  onSelectionChange: (banks: string[]) => void
}

const banks = [
  {
    id: "banco-brasil",
    name: "Banco do Brasil",
    icon: "🏦",
  },
  {
    id: "itau",
    name: "Itaú Unibanco",
    icon: "🏢",
  },
  {
    id: "bradesco",
    name: "Bradesco",
    icon: "🏛️",
  },
]

export function SimpleBankSelector({ selectedBanks, onSelectionChange }: SimpleBankSelectorProps) {
  const toggleBank = (bankId: string) => {
    if (selectedBanks.includes(bankId)) {
      onSelectionChange(selectedBanks.filter((id) => id !== bankId))
    } else {
      onSelectionChange([...selectedBanks, bankId])
    }
  }

  return (
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
                  </div>
                </div>

                {isSelected && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
