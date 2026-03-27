import AnimatedSection from "../AnimatedSection";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  { icon: XCircle, text: "Missed leads", desc: "Potential customers leave unanswered" },
  { icon: XCircle, text: "Slow responses", desc: "Hours or days to reply" },
  { icon: XCircle, text: "Manual support overload", desc: "Team overwhelmed by repetitive queries" },
];

const solutions = [
  { icon: CheckCircle, text: "Instant replies", desc: "Response in under 2 seconds, 24/7" },
  { icon: CheckCircle, text: "Human-like AI", desc: "Conversations that feel natural" },
  { icon: CheckCircle, text: "Automated workflows", desc: "Orders, bookings, support on autopilot" },
];

const ProblemSolution = () => (
  <section className="section-spacing relative">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          From <span className="text-neon-pink">Problems</span> to{" "}
          <span className="gradient-text">Solutions</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how Bluechilli AI transforms your customer communication
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Problems */}
        <AnimatedSection>
          <div className="glass rounded-2xl p-8 border-neon-pink/20 h-full">
            <h3 className="font-display text-xl font-semibold text-neon-pink mb-6">Without AI</h3>
            <div className="space-y-6">
              {problems.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <item.icon className="text-neon-pink shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">{item.text}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Solutions */}
        <AnimatedSection delay={0.15}>
          <div className="glass rounded-2xl p-8 glow-sm h-full">
            <h3 className="font-display text-xl font-semibold gradient-text mb-6">With Bluechilli AI</h3>
            <div className="space-y-6">
              {solutions.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <item.icon className="text-neon-blue shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">{item.text}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
