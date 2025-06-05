import { TechnicalHero } from "@/components/technical-hero"
import { JsonSpecSection } from "@/components/json-spec-section"
import { FileFormatSection } from "@/components/file-format-section"
import { ImplementationGuideSection } from "@/components/implementation-guide-section"
import { FutureExtensionsSection } from "@/components/future-extensions-section"
import { BackToMain } from "@/components/back-to-main"

export default function TechnicalPage() {
  return (
    <main className="min-h-screen">
      <TechnicalHero />
      <JsonSpecSection />
      <FileFormatSection />
      <ImplementationGuideSection />
      <FutureExtensionsSection />
      <BackToMain />
    </main>
  )
}
