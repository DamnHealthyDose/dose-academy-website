import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/dose-academy-logo.png";
import { APP_URL } from "@/lib/constants";
import mascotImage from "@/assets/dose-mascot-custom.png";
import { SlickChatContext } from "@/App";

const Hero = () => {
  const { open: openChat } = useContext(SlickChatContext);

  return (
    <section className="relative overflow-hidden bg-gradient-soft py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4 flex justify-center lg:justify-start animate-fade-in">
                <img 
                  src={logoImage} 
                  alt="DOSE Academy Logo" 
                  className="h-14 w-14"
                />
              </div>
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-soft animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span>Designed for teens ages 10-17</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in">
                Learn Evidence-Based
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  ADHD Tools Ages 10-17
                </span>
              </h1>
              
              <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0 animate-fade-in">
                The first ADHD management platform built specifically for teens. 
                Get homework help, emotional tools, and peer support—all in one place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
                <Button size="lg" variant="brand" className="shadow-medium group" asChild>
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-accent" asChild>
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>Safe & Supervised</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>Parent Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>School Integration</span>
                </div>
              </div>
            </div>
            
            {/* Mascot - clickable to open chat */}
            <div className="relative z-10 flex-shrink-0 animate-fade-in">
              <button
                type="button"
                onClick={openChat}
                aria-label="Chat with Slick, your AI companion"
                className="group block cursor-pointer text-center rounded-3xl p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-0"
              >
                <img
                  src={mascotImage}
                  alt=""
                  className="mx-auto object-contain w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-bounce-gentle drop-shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:animate-none group-active:scale-95"
                />
                <span className="mt-4 block text-2xl font-bold text-foreground">Meet Slick</span>
                <span className="mt-2 block text-sm text-muted-foreground max-w-xs mx-auto">
                  Your AI companion ready to guide you through every step of the app.
                  <span className="ml-1 text-primary font-medium group-hover:underline">Chat now →</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
    </section>
  );
};

export default Hero;
