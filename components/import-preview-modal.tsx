"use client"

import { DialogFooter } from "@/components/ui/dialog"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

interface ImportPreviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedFiles: string[]
}

export function ImportPreviewModal({ open, onOpenChange, selectedFiles }: ImportPreviewModalProps) {
  const handleClose = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Confirmar Importação
          </DialogTitle>
          <DialogDescription>
            Os seguintes arquivos JSON serão importados para sua declaração do IRPF:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            {selectedFiles.map((fileId, index) => (
              <div key={fileId} className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">informe_rendimentos_{fileId}_2023.json</span>
              </div>
            ))}
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Cancelar
          </Button>
          <Button onClick={handleClose} className="w-full sm:w-auto">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
