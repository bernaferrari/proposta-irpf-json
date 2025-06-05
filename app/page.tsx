import { HeroSection } from "@/components/hero-section"
import { CurrentProblemSection } from "@/components/current-problem-section"
import { ProposedSolutionSection } from "@/components/proposed-solution-section"
import { BenefitsSection } from "@/components/benefits-section"
import { SimpleDemoSection } from "@/components/simple-demo-section"
import { CTASection } from "@/components/cta-section"

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
