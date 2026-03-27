import AnimatedSection from "../AnimatedSection";
import { Brain, Workflow, Zap, MessageCircleMore } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Conversations",
    desc: "Advanced AI capable of handling complex workflows, maintaining context, and delivering human-like responses.",
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    desc: "Connects effortlessly with CRMs, databases, APIs, and backend systems -- regardless of your tech stack.",
    accent: "from-sky-500/30 to-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Setup",
    desc: "Go live in as little as one day with minimal configuration and no long onboarding cycles.",
    accent: "from-amber-500/25 to-orange-500/20",
  },
  {
    icon: MessageCircleMore,
    title: "WhatsApp Native",
    desc: "Built specifically for WhatsApp with first-class support for rich media, templates, and interactive messages.",
    accent: "from-emerald-500/30 to-green-500/20",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(230,0,126,0.12),transparent_70%)]" />
        <div className="absolute right-12 top-20 w-56 h-56 rounded-full bg-violet-500/15 blur-[90px]" />
        <div className="absolute left-12 bottom-12 w-52 h-52 rounded-full bg-sky-500/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <p className="text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-white/45 mb-4">
            Why Choose Bluechilli?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Everything You Need to <span className="gradient-text">Automate</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
            Everything you need to deliver exceptional customer experiences through WhatsApp.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.07}>
              <div
                className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-7 overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.accent}`} />
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/5 blur-3xl" />

                <div className="feature-icon h-12 w-12 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center mb-5">
                  <feature.icon className="text-white" size={22} />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-[44ch]">
                  {feature.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 md:mt-12">
          <div className="max-w-6xl mx-auto relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 py-10 md:px-12 md:py-12 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E6007E]/60 to-transparent" />
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

            <blockquote className="relative text-center">
              <p className="font-display text-xl md:text-3xl leading-relaxed text-white/95">
                "Bluechilli completely transformed how we handle customer enquiries. Our response time went from hours to seconds, and our customers love it."
              </p>
            </blockquote>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturesGrid;
