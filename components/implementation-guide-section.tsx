import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Code, FileText, Settings } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ImplementationGuideSection() {
  const bankImplementation = `// Exemplo de geração do JSON pelo banco
const informeRendimentos = {
  metadados: {
    versao_schema: "1.0.0",
    instituicao: {
      cnpj: banco.cnpj,
      nome: banco.nome,
      codigo_banco: banco.codigo
    },
    data_geracao: new Date().toISOString().split('T')[0],
    ano_calendario: 2023
  },
  contribuinte: {
    cpf: cliente.cpf,
    nome: cliente.nome
  },
  aplicacoes_financeiras: extrairAplicacoes(cliente),
  rendimentos_tributacao_exclusiva: extrairRendimentos(cliente),
  bens_direitos: extrairBens(cliente)
}

// Salvar arquivo JSON
fs.writeFileSync(
  \`informe_rendimentos_\${banco.codigo}_2023.json\`,
  JSON.stringify(informeRendimentos, null, 2)
)`;

  const irpfImplementation = `// Exemplo de importação no programa IRPF
function importarInformeJSON(arquivo) {
  try {
    const dados = JSON.parse(fs.readFileSync(arquivo, 'utf8'))
    
    // Validar schema
    if (!validarSchema(dados)) {
      throw new Error('Arquivo JSON inválido')
    }
    
    // Importar aplicações financeiras
    dados.aplicacoes_financeiras?.forEach(app => {
      adicionarAplicacaoFinanceira(app)
    })
    
    // Importar rendimentos
    dados.rendimentos_tributacao_exclusiva?.forEach(rend => {
      adicionarRendimento(rend)
    })
    
    // Importar bens e direitos
    dados.bens_direitos?.forEach(bem => {
      adicionarBemDireito(bem)
    })
    
    // Mostrar preview das alterações
    mostrarPreviewImportacao(dados)
    
  } catch (error) {
    mostrarErro('Erro ao importar arquivo: ' + error.message)
  }
}`;

  const validationRules = [
    {
      field: "metadados.versao_schema",
      rule: "Deve seguir versionamento semântico (x.y.z)",
      example: '"1.0.0"',
    },
    {
      field: "metadados.instituicao.cnpj",
      rule: "CNPJ válido no formato XX.XXX.XXX/XXXX-XX",
      example: '"00.000.000/0001-91"',
    },
    {
      field: "contribuinte.cpf",
      rule: "CPF válido no formato XXX.XXX.XXX-XX",
      example: '"123.456.789-00"',
    },
    {
      field: "aplicacoes_financeiras[].saldo_31_12",
      rule: "Número positivo com até 2 casas decimais",
      example: "15000.00",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Guia de Implementação
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Como Implementar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Orientações práticas para bancos e para a Receita Federal
            implementarem a solução de arquivos JSON.
          </p>
        </div>

        <Tabs defaultValue="banks" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="banks">Para Bancos</TabsTrigger>
            <TabsTrigger value="irpf">Para IRPF</TabsTrigger>
            <TabsTrigger value="validation">Validação</TabsTrigger>
          </TabsList>

          <TabsContent value="banks" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    Exemplo de Implementação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneDark}
                    customStyle={{
                      borderRadius: "0.5rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    {bankImplementation}
                  </SyntaxHighlighter>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Passos para Implementação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mt-0.5">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                          1
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Mapear Dados Existentes
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Identificar onde estão os dados que já são incluídos
                          no PDF
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mt-0.5">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                          2
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Implementar Geração JSON
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Criar rotina que extrai e formata os dados no schema
                          padronizado
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mt-0.5">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                          3
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Validar Schema</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Implementar validação para garantir conformidade com o
                          schema
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mt-0.5">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                          4
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Disponibilizar Download
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Adicionar opção de download JSON junto com o PDF
                          tradicional
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="irpf" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Implementação no IRPF
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneDark}
                    customStyle={{
                      borderRadius: "0.5rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    {irpfImplementation}
                  </SyntaxHighlighter>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Funcionalidades Necessárias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Seletor de Arquivos</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Interface para selecionar múltiplos arquivos JSON
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Validador de Schema</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Verificação automática da estrutura e dados do arquivo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Preview de Importação</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Mostrar ao usuário exatamente o que será importado
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">
                          Consolidação Automática
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Merge inteligente de dados de múltiplos bancos
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="validation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Regras de Validação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  {validationRules.map((rule, index) => (
                    <div key={index} className="bg-muted p-4 flex flex-col rounded-xl">
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                        <code className="text-sm bg-background dark:bg-gray-800 px-2 py-1 rounded">
                          {rule.field}
                        </code>
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {rule.rule}
                      </p>
                      <SyntaxHighlighter
                        language="json"
                        style={oneDark}
                        customStyle={{
                          borderRadius: "0.25rem",
                          fontSize: "0.75rem",
                          margin: 0,
                          padding: "0.5rem",
                        }}
                      >
                        {rule.example}
                      </SyntaxHighlighter>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Validação Estrutural</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• JSON bem formado e válido</li>
                    <li>• Campos obrigatórios presentes</li>
                    <li>• Tipos de dados corretos</li>
                    <li>• Valores dentro dos limites esperados</li>
                    <li>• Datas em formato ISO válido</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Validação de Negócio</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• CPF válido e consistente</li>
                    <li>• CNPJ da instituição válido</li>
                    <li>• Valores monetários positivos</li>
                    <li>• Datas dentro do ano-calendário</li>
                    <li>• Códigos de bens e direitos válidos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
