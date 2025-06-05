import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, Shield, FileText } from "lucide-react"

export function SecuritySection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Segurança
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Proteção e Conformidade</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Medidas robustas de segurança e privacidade para proteger dados sensíveis dos contribuintes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Criptografia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Proteção de dados em trânsito e em repouso com os mais altos padrões de criptografia.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• TLS 1.3 para comunicação</li>
                <li>• AES-256 para dados em repouso</li>
                <li>• RSA-4096 para assinatura digital</li>
                <li>• Certificados ICP-Brasil</li>
                <li>• Chaves privadas em HSM</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Auditoria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Trilha completa de auditoria para garantir transparência e rastreabilidade.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Logs imutáveis</li>
                <li>• Registro de todas as operações</li>
                <li>• Timestamp criptográfico</li>
                <li>• Assinatura de não-repúdio</li>
                <li>• Alertas de atividades suspeitas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Conformidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Aderência total às regulamentações e normas de proteção de dados.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• LGPD (Lei Geral de Proteção de Dados)</li>
                <li>• Normas do Banco Central</li>
                <li>• Padrões ISO 27001 e 27701</li>
                <li>• Requisitos de segurança da Receita Federal</li>
                <li>• Princípios de Privacy by Design</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Compromisso com a Segurança</h3>
              <p className="text-gray-600 dark:text-gray-300">
                O sistema é submetido regularmente a testes de penetração, auditorias de segurança e análises de
                vulnerabilidade por empresas independentes. Todos os componentes são atualizados continuamente para
                garantir proteção contra as mais recentes ameaças cibernéticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
