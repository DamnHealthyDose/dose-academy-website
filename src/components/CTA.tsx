import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_URL } from "@/lib/constants";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-700 to-cyan-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your ADHD Journey?
          </h2>
          <p className="text-lg text-white mb-8">
            Join thousands of teens building confidence, crushing assignments, 
            and owning their success with DOSE Academy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-background text-cyan-800 hover:bg-background/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 shadow-large group"
              asChild
            >
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-500"
              asChild
            >
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white">
            Family plans starting at $14.99/month • School partnerships available
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
