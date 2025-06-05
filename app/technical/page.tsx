import { TechnicalHero } from "@/components/technical/technical-hero"
import { JsonSpecSection } from "@/components/technical/json-spec-section"
import { FileFormatSection } from "@/components/technical/file-format-section"
import { ImplementationGuideSection } from "@/components/technical/implementation-guide-section"
import { FutureExtensionsSection } from "@/components/technical/future-extensions-section"
import { BackToMain } from "@/components/technical/back-to-main"

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
