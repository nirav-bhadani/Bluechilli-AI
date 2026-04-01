import AnimatedSection from "../AnimatedSection";
import GlassCard from "../GlassCard";
import { UtensilsCrossed, ShoppingCart, Target, Headphones } from "lucide-react";

const useCases = [
  { icon: UtensilsCrossed, title: "Restaurants", desc: "Automated ordering, reservations, and menu inquiries via WhatsApp", color: "text-neon-blue" },
  { icon: ShoppingCart, title: "Ecommerce", desc: "Product recommendations, order tracking, and instant customer support", color: "text-neon-purple" },
  { icon: Target, title: "Lead Generation", desc: "Qualify leads, schedule meetings, and nurture prospects automatically", color: "text-neon-pink" },
  { icon: Headphones, title: "Customer Support", desc: "24/7 support with smart escalation to human agents when needed", color: "text-neon-blue" },
];

const UseCases = () => (
  <section className="section-spacing">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Built for <br />
          <span className="gradient-text">Every Dynamic Industry</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From restaurants to enterprise, our AI adapts to your industry
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {useCases.map((uc, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <GlassCard className="h-full">
              <uc.icon className={`${uc.color} mb-4`} size={32} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
