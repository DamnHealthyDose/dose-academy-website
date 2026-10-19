import { Heart, DollarSign, HandHeart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const AccessibilityPricing = () => {
  const incomeTiers = [
    {
      range: "Under $30k",
      discount: "FREE",
      price: "$0/month",
      features: "Basic features included",
      bgColor: "bg-gradient-warm",
      // Saturated orange surface: use the dark on-secondary text in dark mode
      fgClass: "dark:text-secondary-foreground",
      mutedClass: "dark:text-secondary-foreground/80"
    },
    {
      range: "$30k - $60k",
      discount: "50% OFF",
      price: "$7.50/month",
      features: "All standard features",
      bgColor: "bg-gradient-to-br from-secondary/20 to-secondary/10"
    },
    {
      range: "$60k - $100k",
      discount: "25% OFF",
      price: "$11.25/month",
      features: "All standard features",
      bgColor: "bg-accent/50"
    },
    {
      range: "Over $100k",
      discount: "Standard",
      price: "$14.99/month",
      features: "All premium features",
      bgColor: "bg-muted/30"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 mx-auto mb-4 text-secondary" />
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            ADHD Support for Every Family
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe every teen deserves access to ADHD management tools, regardless of financial circumstances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {incomeTiers.map((tier, index) => (
            <Card key={index} className={cn("p-6 border-2", tier.bgColor)}>
              <div className="text-center">
                <p className={cn("text-sm font-semibold text-muted-foreground mb-2", tier.mutedClass)}>
                  Household Income
                </p>
                <h3 className={cn("text-xl font-bold mb-3 text-foreground", tier.fgClass)}>{tier.range}</h3>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-background rounded-full text-sm font-semibold text-primary">
                    {tier.discount}
                  </span>
                </div>
                <p className={cn("text-2xl font-bold text-foreground mb-2", tier.fgClass)}>{tier.price}</p>
                <p className={cn("text-sm text-muted-foreground", tier.mutedClass)}>{tier.features}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Additional Financial Support
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2 text-foreground">Scholarship Applications</h4>
              <p className="text-sm text-muted-foreground">
                Apply for full or partial scholarships based on need
              </p>
            </div>
            <div className="text-center">
              <HandHeart className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2 text-foreground">Payment Plans</h4>
              <p className="text-sm text-muted-foreground">
                Quarterly or annual payment options available
              </p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2 text-foreground">Community Sponsorships</h4>
              <p className="text-sm text-muted-foreground">
                Local organizations helping families afford access
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2 text-foreground">Provider Partnerships</h4>
              <p className="text-sm text-muted-foreground">
                Healthcare providers may cover or subsidize costs
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AccessibilityPricing;
