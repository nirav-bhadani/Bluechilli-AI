import { motion } from "framer-motion";
import { MessageCircle, Lock, Zap, Database, Brain, Send, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import AnimatedSection from "../components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Customer Sends a Message",
    description: "The journey begins when a customer sends a message through WhatsApp.",
    icon: MessageCircle,
    color: "#3b82f6",
    features: [
      "Works with any standard WhatsApp app — no special downloads required",
      "Supports text, images, voice notes, documents, and location",
      "Available 24/7 — customers can reach out anytime",
      "Familiar interface that billions of people already use daily",
    ],
  },
  {
    number: "02",
    title: "WhatsApp Business API",
    description: "Meta's official API receives the message and triggers a secure webhook.",
    icon: Lock,
    color: "#8b5cf6",
    features: [
      "Enterprise-grade infrastructure with 99.9% uptime",
      "End-to-end encryption maintained throughout",
      "Webhook notification sent to servers in milliseconds",
      "Message metadata includes sender info and message type",
    ],
  },
  {
    number: "03",
    title: "Message Processing",
    description: "The message is enriched with context from your business systems.",
    icon: Zap,
    color: "#06b6d4",
    features: [
      "Conversation history retrieved for context",
      "User profile and preferences loaded",
      "Agent-specific prompts, rules, and guardrails applied",
      "External data fetched from your CRM, booking system, or other integrations",
    ],
  },
  {
    number: "04",
    title: "Business System Integration",
    description: "Real-time data from your existing tools ensures accurate, up-to-date responses.",
    icon: Database,
    color: "#10b981",
    features: [
      "CRM Systems — Salesforce, HubSpot, Pipedrive, Zoho",
      "Microsoft 365 & Google Workspace",
      "E-commerce — Shopify, WooCommerce, Magento",
      "Custom APIs — any system with a REST or GraphQL API",
    ],
  },
  {
    number: "05",
    title: "AI Generates Response",
    description: "A powerful AI model generates an intelligent, context-aware response.",
    icon: Brain,
    color: "#f59e0b",
    features: [
      "Supports multiple AI providers — OpenAI, Anthropic, Google",
      "Custom prompts tailored to your brand voice",
      "Multi-layered guardrails prevent hallucinations",
      "Response generated in seconds, not minutes",
    ],
  },
  {
    number: "06",
    title: "Instant Delivery",
    description: "The response is sent back through WhatsApp for seamless delivery.",
    icon: Send,
    color: "#22c55e",
    features: [
      "Message sent via official WhatsApp Business API",
      "Support for rich messages — buttons, lists, templates",
      "Automatic retry on temporary delivery failures",
      "Average response time: under 5 seconds",
    ],
  },
];

const HowItWorks = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToStep = (index: number) => {
    if (stepRefs.current[index]) {
      stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-dark-deep overflow-x-hidden">
      <SEO 
        title="How Our WhatsApp AI Chatbot Works | Bluechilli AI"
        description="Discover how Bluechilli’s WhatsApp AI chatbots process messages, integrate with your business systems, and respond instantly. Simple setup, powerful results."
        canonical="https://www.bluechilli.ai/how-it-works"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How Bluechilli’s WhatsApp AI Chatbot Works",
          "description": "A step-by-step guide on how Bluechilli AI builds and deploys WhatsApp chatbots.",
          "step": steps.map((step, idx) => ({
            "@type": "HowToStep",
            "position": idx + 1,
            "name": step.title,
            "itemListElement": step.features.map(f => ({
              "@type": "HowToDirection",
              "text": f
            }))
          }))
        })}
      </script>
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "How It Works", item: "/how-it-works" }
      ]} />
      <Navbar />

      <main className="relative pt-28 md:pt-32 pb-24">
        {/* background glows */}
        <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-neon-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute top-60 -right-24 h-96 w-96 rounded-full bg-neon-pink/15 blur-3xl" />

        <section className="container mx-auto px-4 sm:px-6 relative max-w-full lg:max-w-7xl">
          {/* ── Premium Hero Section ── */}
          <div className="md:mb-32">
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="max-w-4xl mx-auto text-center font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-8"
            >
              How Bluechilli’s WhatsApp AI <span className="gradient-text">Chatbot Works</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-lg text-center mx-auto text-muted-foreground max-w-2xl leading-relaxed mb-10"
            >
              See how messages flow from your customers through WhatsApp, to our
              AI, and back — with real-time access to all your business systems.
            </motion.p>
          </div>

          {/* ── Process Flow + Steps Layout ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="lg:block "
          >
            <div className=" sticky top-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <motion.button
                    key={idx}
                    onClick={() => scrollToStep(idx)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full rounded-xl border bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-3 overflow-hidden transition-all duration-300 cursor-pointer hover:border-opacity-100 text-left"
                    style={{
                      borderColor: `${step.color}50`,
                    }}
                  >
                    {/* Background glow on hover */}
                    <div
                      className="pointer-events-none absolute -inset-20 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: `${step.color}` }}
                    />

                    <div className="relative z-10 flex items-center gap-3">
                      {/* Icon */}
                      <div
                        className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                          background: `${step.color}22`,
                          color: step.color,
                        }}
                      >
                        <StepIcon size={16} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span
                            className="text-[10px] font-mono font-bold shrink-0"
                            style={{ color: step.color }}
                          >
                            {step.number}
                          </span>
                          <div
                            className="h-px flex-1"
                            style={{ background: `${step.color}44` }}
                          />
                        </div>
                        <h2 className="text-md font-semibold text-white/90 leading-tight truncate">
                          {step.title}
                        </h2>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
          <div className="items-start relative">
            {/* Right Column - Steps Grid */}
            <div className="space-y-6">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group relative rounded-2xl border bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-opacity-100 hover:-translate-y-1 scroll-mt-32"
                    style={{
                      borderColor: `${step.color}50`,
                    }}
                  >
                    {/* Background glow */}
                    <div
                      className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `${step.color}15` }}
                    />

                    {/* Top border gradient */}
                    <div
                      className="absolute inset-x-0 top-0 h-[2px]"
                      style={{
                        background: `linear-gradient(90deg, ${step.color}, transparent 75%)`,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <div
                          className="h-12 w-12 md:h-14 md:w-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                          style={{
                            background: `${step.color}22`,
                            borderColor: `${step.color}55`,
                            color: step.color,
                          }}
                        >
                          <StepIcon size={24} />
                        </div>

                        {/* Title & Number */}
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-xs md:text-sm font-mono font-bold"
                              style={{ color: step.color }}
                            >
                              {step.number}
                            </span>
                            <div
                              className="hidden md:block h-px flex-1"
                              style={{ background: `${step.color}44` }}
                            />
                          </div>
                          <h2 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-white/95">
                            {step.title}
                          </h2>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base text-white/70 mb-5">
                        {step.description}
                      </p>

                      {/* Features List - Always Visible */}
                      <ul
                        className="space-y-2.5 pt-5 border-t"
                        style={{ borderColor: `${step.color}33` }}
                      >
                        {step.features.map((feature, featureIdx) => (
                          <motion.li
                            key={featureIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: idx * 0.05 + featureIdx * 0.08,
                            }}
                            className="flex items-start gap-3 text-sm md:text-base text-white/70"
                          >
                            <CheckCircle2
                              size={18}
                              className="shrink-0 mt-0.5"
                              style={{ color: step.color }}
                            />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Next Steps CTA */}
      <section className="pb-24 pt-12 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="glass rounded-3xl p-8 md:p-10 border-white/10 group hover:border-[#E6007E]/30 transition-all text-left">
                <div className="h-12 w-12 rounded-xl bg-[#E6007E]/20 flex items-center justify-center mb-6 text-[#E6007E]">
                  <HelpCircle size={24} />
                </div>
                <h2 className="font-display text-2xl font-bold mb-3">Have more questions?</h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Learn more about security, integration details, and model performance in our comprehensive FAQ.
                </p>
                <Link 
                  to="/faq"
                  className="btn-gradient px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                >
                  Visit the FAQ <ArrowRight size={18} />
                </Link>
              </div>

              <div className="glass rounded-3xl p-8 md:p-10 border-white/10 group hover:border-neon-blue/30 transition-all text-left">
                <div className="h-12 w-12 rounded-xl bg-neon-blue/20 flex items-center justify-center mb-6 text-neon-blue">
                  <Send size={24} />
                </div>
                <h2 className="font-display text-2xl font-bold mb-3">Ready to transform your business?</h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Get a bespoke demo tailored to your specific workflows and brand requirements today.
                </p>
                <Link 
                  to="/contact"
                  className="btn-gradient px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
