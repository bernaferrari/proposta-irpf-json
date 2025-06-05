"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Download, FileText, Shield, Zap } from "lucide-react"

interface ImportModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedBanks: string[]
}

export function ImportModal({ open, onOpenChange, selectedBanks }: ImportModalProps) {
  const [importing, setImporting] = useState(false)
  const [imported, setImported] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleImport = async () => {
    setImporting(true)
    setProgress(0)

    // Simulate import process
    const steps = [
      "Validando dados bancários...",
      "Verificando conformidade...",
      "Consolidando informações...",
      "Gerando arquivo IRPF...",
      "Finalizando importação...",
    ]

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setProgress((i + 1) * 20)
    }

    setImporting(false)
    setImported(true)
  }

  const handleClose = () => {
    setImporting(false)
    setImported(false)
    setProgress(0)
    onOpenChange(false)
  }

  if (imported) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <DialogTitle className="text-xl">Importação Realizada com Sucesso!</DialogTitle>
            <DialogDescription className="text-center">
              Os dados bancários foram importados automaticamente para sua declaração do IRPF.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                Benefícios da Integração Automática:
              </h4>
              <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                <li>• Eliminação de erros de digitação</li>
                <li>• Economia de tempo no preenchimento</li>
                <li>• Maior precisão nas informações</li>
                <li>• Conformidade automática com a legislação</li>
              </ul>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={handleClose} className="w-full">
              Entendido
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Confirmar Importação para IRPF
          </DialogTitle>
          <DialogDescription>
            Os seguintes dados serão importados automaticamente para sua declaração:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{selectedBanks.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Bancos Selecionados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{selectedBanks.length * 2}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Aplicações Financeiras</div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Segurança e Privacidade</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Esta é uma demonstração. Em um cenário real, os dados seriam transmitidos diretamente da instituição
                  financeira para a Receita Federal com criptografia de ponta a ponta.
                </p>
              </div>
            </div>
          </div>

          {importing && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Processando dados...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={importing}
            className="w-full sm:w-auto"
          >
            Cancelar
          </Button>
          <Button onClick={handleImport} disabled={importing} className="w-full sm:w-auto">
            {importing ? (
              <>
                <Zap className="mr-2 h-4 w-4 animate-spin" />
                Importando...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Confirmar Importação
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
