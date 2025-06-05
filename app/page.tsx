import { HeroSection } from "@/components/main/hero-section"
import { CurrentProblemSection } from "@/components/main/current-problem-section"
import { ProposedSolutionSection } from "@/components/main/proposed-solution-section"
import { BenefitsSection } from "@/components/main/benefits-section"
import { SimpleDemoSection } from "@/components/main/simple-demo-section"
import { CTASection } from "@/components/main/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CurrentProblemSection />
      <ProposedSolutionSection />
      <BenefitsSection />
      <SimpleDemoSection />
      <CTASection />
    </main>
  )
}
