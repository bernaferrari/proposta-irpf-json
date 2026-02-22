import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Download,
  Shield,
  CheckCircle,
  Hash,
  Database,
  Lock,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function FileFormatSection() {
  const fileNamingExample = `# Convenção de nomenclatura sugerida:
informe_rendimentos_[codigo_banco]_[ano].json

# Exemplos:
informe_rendimentos_001_2023.json  # Banco do Brasil
informe_rendimentos_341_2023.json  # Itaú Unibanco
informe_rendimentos_237_2023.json  # Bradesco
informe_rendimentos_033_2023.json  # Santander`;

  const distributionExample = `# Como os bancos disponibilizariam:

1. Site do banco / Internet Banking
   ├── Área do cliente
   ├── Documentos / Informes
   ├── Informe de Rendimentos 2023
   │   ├── 📄 informe_rendimentos_2023.pdf (tradicional)
   │   └── 📄 informe_rendimentos_2023.json (novo)

2. Aplicativo móvel
   ├── Menu Documentos
   ├── Informe de Rendimentos
   └── Opções de download: PDF | JSON

3. Email automático (opcional)
   ├── Anexo: informe_rendimentos_2023.pdf
   └── Anexo: informe_rendimentos_2023.json`;

  const hashExample = `{
  "metadados": {
    "hash_verificacao": "sha256:a1b2c3...",
    "timestamp_geracao": "2024-03-15T10:30:00Z"
  }
}`;

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Formato de Arquivo
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Distribuição e Nomenclatura
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Especificações sobre como os bancos devem nomear, estruturar e
            disponibilizar os arquivos JSON para os clientes.
          </p>
        </div>

        <Tabs defaultValue="naming" className="w-full flex flex-col">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-700 mb-6">
            <TabsTrigger value="naming">Nomenclatura</TabsTrigger>
            <TabsTrigger value="distribution">Distribuição</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
          </TabsList>

          <TabsContent value="naming" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Convenção de Nomenclatura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SyntaxHighlighter
                    language="bash"
                    style={oneDark}
                    customStyle={{
                      borderRadius: "0.5rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    {fileNamingExample}
                  </SyntaxHighlighter>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Características do Arquivo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Formato JSON</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Arquivo de texto estruturado, legível e validável
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Codificação UTF-8</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Suporte completo a caracteres especiais e acentos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Tamanho Compacto</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Tipicamente 1-5 KB, muito menor que PDFs equivalentes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Versionamento</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Schema versionado permite evolução controlada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Canais de Distribuição
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SyntaxHighlighter
                  language="bash"
                  style={oneDark}
                  customStyle={{
                    borderRadius: "0.5rem",
                    fontSize: "0.75rem",
                  }}
                >
                  {distributionExample}
                </SyntaxHighlighter>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-start">Internet Banking</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Mesma área dos informes tradicionais</li>
                    <li>• Download simultâneo PDF + JSON</li>
                    <li>• Histórico de anos anteriores</li>
                    <li>• Validação antes do download</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-start">Aplicativo Móvel</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Integração nativa com apps IRPF</li>
                    <li>• Compartilhamento direto</li>
                    <li>• Notificações de disponibilidade</li>
                    <li>• Preview dos dados no app</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            {(() => {
              const SecurityIcon = () => (
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
              );
              return (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="mr-2 h-5 w-5" />
                        Segurança do Arquivo
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Hash className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Assinatura Digital</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Arquivo pode incluir hash de verificação para
                            garantir integridade
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Database className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Dados Não Sensíveis</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Contém apenas informações já presentes no PDF
                            tradicional
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Acesso Controlado</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Disponível apenas para o titular da conta, com
                            autenticação
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Validação de Integridade</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                          Exemplo de Hash
                        </h4>
                        <SyntaxHighlighter
                          language="json"
                          style={oneDark}
                          customStyle={{
                            borderRadius: "0.25rem",
                            fontSize: "0.75rem",
                            margin: 0,
                          }}
                        >
                          {hashExample}
                        </SyntaxHighlighter>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                        O programa IRPF pode verificar a integridade do arquivo
                        antes da importação.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })()}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
