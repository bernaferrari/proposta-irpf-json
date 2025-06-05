"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Building2, Wallet, TrendingUp, FileText } from "lucide-react"

interface DataPreviewProps {
  uploadedFile: any
}

export function DataPreview({ uploadedFile }: DataPreviewProps) {
  if (!uploadedFile) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Building2 className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Nenhum arquivo importado</h3>
        <p className="text-gray-600 dark:text-gray-300">Importe um arquivo JSON para visualizar os dados</p>
      </div>
    )
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const totalSaldo =
    uploadedFile.aplicacoes_financeiras?.reduce((sum: number, app: any) => sum + app.saldo_31_12, 0) || 0
  const totalRendimentos =
    uploadedFile.rendimentos_tributacao_exclusiva?.reduce(
      (sum: number, rend: any) => sum + rend.rendimentos_brutos,
      0,
    ) || 0
  const totalIR =
    uploadedFile.rendimentos_tributacao_exclusiva?.reduce((sum: number, rend: any) => sum + rend.ir_retido, 0) || 0

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Informe de Rendimentos - {uploadedFile.metadados.instituicao.nome}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{formatCurrency(totalSaldo)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Saldo Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{formatCurrency(totalRendimentos)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Rendimentos Brutos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{formatCurrency(totalIR)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">IR Retido</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Aplicações Financeiras */}
      {uploadedFile.aplicacoes_financeiras && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              Aplicações Financeiras
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Conta</TableHead>
                  <TableHead className="text-right">Saldo (31/12)</TableHead>
                  <TableHead className="text-right">Rendimentos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {uploadedFile.aplicacoes_financeiras.map((app: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Badge variant="outline">{app.tipo}</Badge>
                    </TableCell>
                    <TableCell className="font-mono">{app.numero_conta}</TableCell>
                    <TableCell className="text-right font-mono">{formatCurrency(app.saldo_31_12)}</TableCell>
                    <TableCell className="text-right font-mono">{formatCurrency(app.rendimentos_ano)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Rendimentos */}
      {uploadedFile.rendimentos_tributacao_exclusiva && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Rendimentos Sujeitos à Tributação Exclusiva
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo</TableHead>
                  <TableHead className="text-right">Valor Aplicado</TableHead>
                  <TableHead className="text-right">Rendimentos Brutos</TableHead>
                  <TableHead className="text-right">IR Retido</TableHead>
                  <TableHead className="text-right">Rendimentos Líquidos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {uploadedFile.rendimentos_tributacao_exclusiva.map((rend: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Badge variant="outline">{rend.tipo}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">{formatCurrency(rend.valor_aplicado)}</TableCell>
                    <TableCell className="text-right font-mono">{formatCurrency(rend.rendimentos_brutos)}</TableCell>
                    <TableCell className="text-right font-mono">{formatCurrency(rend.ir_retido)}</TableCell>
                    <TableCell className="text-right font-mono">{formatCurrency(rend.rendimentos_liquidos)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Bens e Direitos */}
      {uploadedFile.bens_direitos && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Bens e Direitos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead className="text-right">Valor Anterior</TableHead>
                  <TableHead className="text-right">Valor Atual</TableHead>
                  <TableHead className="text-right">Variação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {uploadedFile.bens_direitos.map((bem: any, index: number) => {
                  const variacao = bem.valor_31_12_atual - bem.valor_31_12_anterior
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <Badge variant="outline">{bem.codigo}</Badge>
                      </TableCell>
                      <TableCell>{bem.descricao}</TableCell>
                      <TableCell className="text-right font-mono">{formatCurrency(bem.valor_31_12_anterior)}</TableCell>
                      <TableCell className="text-right font-mono">{formatCurrency(bem.valor_31_12_atual)}</TableCell>
                      <TableCell
                        className={`text-right font-mono ${
                          variacao > 0 ? "text-green-600" : variacao < 0 ? "text-red-600" : ""
                        }`}
                      >
                        {formatCurrency(variacao)}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
          ✅ Dados Importados com Sucesso
        </h3>
        <p className="text-green-800 dark:text-green-200">
          Todos os dados do informe de rendimentos foram automaticamente preenchidos no programa IRPF. Não foi
          necessária nenhuma digitação manual, eliminando erros e economizando tempo.
        </p>
      </div>
    </div>
  )
}
