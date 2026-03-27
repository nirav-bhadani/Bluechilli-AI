import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const CTASection = () => (
  <section className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-purple/8 rounded-full blur-[150px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection className="text-center max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Let AI Handle Your{" "}
          <span className="gradient-text">Conversations</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Join businesses already using Bluechilli AI to automate sales, support, and growth.
        </p>
        <Link
          to="/contact"
          className="btn-gradient px-10 py-4 rounded-xl text-base inline-flex items-center gap-2 glow-md"
        >
          Get Started Today <ArrowRight size={18} />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
