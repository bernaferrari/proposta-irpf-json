"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BankFileSelector } from "@/components/bank-file-selector";
import { ConsolidatedDataView } from "@/components/consolidated-data-view";
import { ImportPreviewModal } from "@/components/import-preview-modal";
import { Play, Upload, Database } from "lucide-react";

export function SimpleDemoSection() {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([
    "bradesco",
    "itau",
  ]);
  const [showImportModal, setShowImportModal] = useState(false);

  return (
    <section
      id="demo-section"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-background">
            <Play className="mr-2 h-4 w-4" />
            Demonstração Interativa
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Veja Como Funcionaria
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simule a experiência de importar múltiplos arquivos JSON de
            diferentes bancos e veja como o programa IRPF consolidaria
            automaticamente todos os dados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-5 w-5" />
                  Arquivos JSON dos Bancos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BankFileSelector
                  selectedFiles={selectedFiles}
                  onSelectionChange={setSelectedFiles}
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Dados Consolidados no IRPF
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ConsolidatedDataView
                  selectedFiles={selectedFiles}
                  onImport={() => setShowImportModal(true)}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <ImportPreviewModal
          open={showImportModal}
          onOpenChange={setShowImportModal}
          selectedFiles={selectedFiles}
        />
      </div>
    </section>
  );
}
