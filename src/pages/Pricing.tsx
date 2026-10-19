import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCard from "@/components/pricing/PricingCard";
import SchoolPricing from "@/components/pricing/SchoolPricing";
import AccessibilityPricing from "@/components/pricing/AccessibilityPricing";
import TransitionPricing from "@/components/pricing/TransitionPricing";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import { Check } from "lucide-react";

const Pricing = () => {
  const teenFeatures = [
    "SPARK Junior (3-step CBT tool)",
    "Homework chunking system",
    "Assignment tracker",
    "Study sessions & focus tools",
    "RSD tracking",
    "Parent oversight dashboard",
    "Crisis resources"
  ];

  const familyFeatures = [
    "Everything in Teen plan",
    "1 Adult DOSE account included",
    "Up to 3 teen accounts",
    "Family progress dashboard",
    "Coordinated goal setting",
    "Seamless platform transition",
    "Additional teens: $4.99/month each"
  ];

  const schoolFeatures = [
    "Bulk licensing discounts",
    "Counselor dashboard",
    "Professional development",
    "Parent engagement tools",
    "Crisis intervention protocols",
    "Research collaboration"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PricingHero />
        
        {/* Primary Pricing Cards */}
        <section className="py-16 px-4 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PricingCard
                title="DOSE Academy"
                subtitle="Teen Only"
                price="9.99"
                period="month"
                description="For individual teens (ages 10-17)"
                features={teenFeatures}
                ctaText="Start Free Trial"
                ctaVariant="outline"
              />
              
              <PricingCard
                title="Family Plan"
                subtitle="Most Popular"
                price="14.99"
                period="month"
                originalPrice="19.98"
                description="Families with teens + adults"
                features={familyFeatures}
                ctaText="Start Family Plan"
                ctaVariant="default"
                highlighted={true}
                badge="Save 25%"
              />
              
              <PricingCard
                title="School Districts"
                subtitle="Starting at"
                price="2"
                period="student/month"
                description="Schools & districts"
                features={schoolFeatures}
                ctaText="Request Quote"
                ctaVariant="secondary"
              />
            </div>
          </div>
        </section>

        <SchoolPricing />
        <AccessibilityPricing />
        <TransitionPricing />
        <PricingComparison />
        <PricingFAQ />
        
        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-cyan-700 to-cyan-800 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Teen's ADHD Journey?</h2>
            <p className="text-xl mb-8">Family plans starting at $14.99/month</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app-doseacademy.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-background text-cyan-800 dark:bg-primary dark:text-primary-foreground rounded-lg font-semibold hover:bg-background/90 dark:hover:bg-primary/90 transition-colors">
                Start Free Trial
              </a>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-center hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-500">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
