"use client";

import { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Wallet, FileText } from "lucide-react";

interface ConsolidatedDataViewProps {
  selectedFiles: string[];
  onImport: () => void;
}

// Enhanced mock data for all banks
const bankData = {
  bb: {
    name: "Banco do Brasil",
    applications: [
      { type: "Conta Corrente", account: "1234", balance: 15000, income: 0 },
      { type: "Poupança", account: "54321-0", balance: 25000, income: 800 },
    ],
    income: [{ type: "CDB", applied: 50000, gross: 3500, tax: 525, net: 2975 }],
    assets: [
      {
        code: "01",
        description: "Conta corrente - Banco do Brasil",
        previous: 12000,
        current: 15000,
      },
    ],
  },
  itau: {
    name: "Itaú Unibanco",
    applications: [
      { type: "Conta Corrente", account: "98765-4", balance: 8500, income: 0 },
    ],
    income: [
      { type: "LCI", applied: 30000, gross: 2100, tax: 0, net: 2100 },
      {
        type: "Fundo de Investimento",
        applied: 20000,
        gross: 1800,
        tax: 270,
        net: 1530,
      },
      { type: "Dividendos", applied: 0, gross: 1200, tax: 0, net: 1200 },
    ],
    assets: [],
  },
  bradesco: {
    name: "Bradesco",
    applications: [
      { type: "Poupança", account: "11111-2", balance: 5000, income: 200 },
    ],
    income: [{ type: "CDB", applied: 40000, gross: 2800, tax: 420, net: 2380 }],
    assets: [
      {
        code: "01",
        description: "Poupança - Bradesco",
        previous: 4500,
        current: 5000,
      },
    ],
  },
  santander: {
    name: "Santander",
    applications: [
      { type: "Conta Corrente", account: "77777-8", balance: 12000, income: 0 },
      {
        type: "Conta Investimento",
        account: "88888-9",
        balance: 35000,
        income: 1200,
      },
    ],
    income: [
      {
        type: "Tesouro Direto",
        applied: 25000,
        gross: 1750,
        tax: 262.5,
        net: 1487.5,
      },
      { type: "Ações", applied: 15000, gross: 2200, tax: 0, net: 2200 },
    ],
    assets: [
      {
        code: "01",
        description: "Conta corrente - Santander",
        previous: 10000,
        current: 12000,
      },
      {
        code: "02",
        description: "Conta investimento - Santander",
        previous: 30000,
        current: 35000,
      },
    ],
  },
};

export function ConsolidatedDataView({
  selectedFiles,
  onImport,
}: ConsolidatedDataViewProps) {
  const consolidatedData = useMemo(() => {
    const applications: any[] = [];
    const income: any[] = [];
    const assets: any[] = [];

    selectedFiles.forEach((fileId) => {
      const bank = bankData[fileId as keyof typeof bankData];
      if (bank) {
        applications.push(
          ...bank.applications.map((app) => ({ ...app, bank: bank.name }))
        );
        income.push(...bank.income.map((inc) => ({ ...inc, bank: bank.name })));
        assets.push(
          ...bank.assets.map((asset) => ({ ...asset, bank: bank.name }))
        );
      }
    });

    return { applications, income, assets };
  }, [selectedFiles]);

  const summary = useMemo(() => {
    const totalBalance = consolidatedData.applications.reduce(
      (sum, app) => sum + app.balance,
      0
    );
    const totalIncome = consolidatedData.income.reduce(
      (sum, inc) => sum + inc.gross,
      0
    );
    const totalTax = consolidatedData.income.reduce(
      (sum, inc) => sum + inc.tax,
      0
    );
    const totalNet = consolidatedData.income.reduce(
      (sum, inc) => sum + inc.net,
      0
    );

    return { totalBalance, totalIncome, totalTax, totalNet };
  }, [consolidatedData]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  if (selectedFiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Building2 className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Selecione Arquivos JSON
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Escolha um ou mais informes de rendimentos para visualizar a
          consolidação automática
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Wallet className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Saldo Total
            </span>
          </div>
          <div className="text-xl font-bold text-blue-900 dark:text-blue-100">
            {formatCurrency(summary.totalBalance)}
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-800 dark:text-green-200">
              Rendimentos
            </span>
          </div>
          <div className="text-xl font-bold text-green-900 dark:text-green-100">
            {formatCurrency(summary.totalIncome)}
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <FileText className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium text-red-800 dark:text-red-200">
              IR Retido
            </span>
          </div>
          <div className="text-xl font-bold text-red-900 dark:text-red-100">
            {formatCurrency(summary.totalTax)}
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
              Líquido
            </span>
          </div>
          <div className="text-xl font-bold text-purple-900 dark:text-purple-100">
            {formatCurrency(summary.totalNet)}
          </div>
        </div>
      </div>

      {/* Data Tables */}
      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="applications">
            Aplicações ({consolidatedData.applications.length})
          </TabsTrigger>
          <TabsTrigger value="income">
            Rendimentos ({consolidatedData.income.length})
          </TabsTrigger>
          <TabsTrigger value="assets">
            Bens e Direitos ({consolidatedData.assets.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4">
          <div className="rounded-lg border">
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
                    <TableCell>
                      <Badge variant="outline">{app.type}</Badge>
                    </TableCell>
                    <TableCell className="font-mono">{app.account}</TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(app.balance)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(app.income)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="income" className="space-y-4">
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Banco</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead className="text-right">Valor Aplicado</TableHead>
                  <TableHead className="text-right">
                    Rendimentos Brutos
                  </TableHead>
                  <TableHead className="text-right">IR Retido</TableHead>
                  <TableHead className="text-right">
                    Rendimentos Líquidos
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {consolidatedData.income.map((inc, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{inc.bank}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{inc.type}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(inc.applied)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(inc.gross)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(inc.tax)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(inc.net)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="assets" className="space-y-4">
          <div className="rounded-lg border">
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
                  const variation = asset.current - asset.previous;
                  return (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {asset.bank}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{asset.code}</Badge>
                      </TableCell>
                      <TableCell>{asset.description}</TableCell>
                      <TableCell className="text-right font-mono">
                        {formatCurrency(asset.previous)}
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {formatCurrency(asset.current)}
                      </TableCell>
                      <TableCell
                        className={`text-right font-mono ${
                          variation > 0
                            ? "text-green-600"
                            : variation < 0
                            ? "text-red-600"
                            : ""
                        }`}
                      >
                        {formatCurrency(variation)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Information Note */}
      <div className="flex justify-center pt-6">
        <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Como Funcionaria na Prática
          </h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            Cada banco disponibilizaria um arquivo JSON junto com o PDF
            tradicional. O contribuinte baixaria esses arquivos e os importaria
            diretamente no programa IRPF, eliminando a necessidade de digitação
            manual.
          </p>
        </div>
      </div>
    </div>
  );
}
