import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle, ShieldCheck, Server, Database, Mail, Phone, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import AnimatedSection from "../components/AnimatedSection";

type FAQItem = {
  q: string;
  a: string;
};

type FAQCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  items: FAQItem[];
};

const faqCategories: FAQCategory[] = [
  {
    id: "fundamentals",
    title: "Fundamentals",
    icon: MessageCircle,
    color: "#3b82f6",
    items: [
      {
        q: "What is a WhatsApp AI chatbot?",
        a: "A WhatsApp AI chatbot is an automated assistant that replies to customers inside WhatsApp, handles common questions, qualifies leads, and can escalate to a human when needed.",
      },
      {
        q: "How long does it take to set up?",
        a: "Typical onboarding is fast. Most teams can launch quickly after access, brand voice setup, FAQ/training import, and basic workflow configuration are complete.",
      },
      {
        q: "How much does it cost?",
        a: "Pricing depends on your use case, message volume, integrations, and support requirements. Plans are usually scoped after a short discovery session.",
      },
      {
        q: "What happens if the AI can't handle a query?",
        a: "The chatbot can follow fallback rules, ask clarifying questions, or hand over to a human agent so customers still get the right outcome without dead ends.",
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & Operations",
    icon: Server,
    color: "#8b5cf6",
    items: [
      {
        q: "Can the chatbot integrate with my existing systems?",
        a: "Yes. Integrations typically include CRM, booking, support, ecommerce, and custom API workflows so replies can use live business data in real time.",
      },
      {
        q: "How does Bluechilli connect to WhatsApp?",
        a: "Connection is made through the official WhatsApp Business API. Incoming messages are processed via secure webhooks and routed through your configured automation and AI layers.",
      },
      {
        q: "Do you provide SLAs or uptime targets?",
        a: "SLA and uptime commitments can be provided depending on your plan and contract terms, especially for production-critical workflows.",
      },
      {
        q: "How do you manage uptime, monitoring, and reliability?",
        a: "Production systems usually include proactive monitoring, alerting, retries, rate-limit handling, and incident procedures designed for high availability.",
      },
      {
        q: "What happens if we want to leave Bluechilli and move providers?",
        a: "A transition plan can be supported with structured export of prompts, flows, and key configuration assets to reduce migration friction.",
      },
      {
        q: "Can we export prompts and data?",
        a: "Yes, export options are available for governed handover, reporting, and portability requirements based on agreed scope.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Compliance",
    icon: ShieldCheck,
    color: "#10b981",
    items: [
      {
        q: "Is my data secure?",
        a: "Security controls generally include encryption in transit and at rest, role-based access, and strict handling of customer data throughout the message lifecycle.",
      },
      {
        q: "Where is your platform hosted and where is data stored?",
        a: "Hosting and data residency are defined by your deployment setup and compliance needs, with transparent documentation provided during onboarding.",
      },
      {
        q: "Are prompts or responses stored, and if so, for how long?",
        a: "Retention policies are configurable and follow your operational and regulatory requirements. Storage windows and deletion workflows are defined upfront.",
      },
      {
        q: "Are you aligned with any security standards?",
        a: "Security posture is aligned with modern best practices, and additional compliance mapping can be discussed based on your industry and procurement process.",
      },
      {
        q: "How is portal access secured?",
        a: "Access controls include authentication safeguards, permissions, and audit-friendly account management to protect admin and operator access.",
      },
      {
        q: "Do you have your own safety, audit and validation layers?",
        a: "Yes. Safety layers can include guardrails, policy checks, and validation logic to improve quality and reduce unsafe or inaccurate responses.",
      },
    ],
  },
  {
    id: "models",
    title: "Models & Providers",
    icon: Database,
    color: "#f59e0b",
    items: [
      {
        q: "Can you run your product on multiple model providers?",
        a: "Yes. Multi-provider architecture can be used to balance quality, cost, latency, and resilience across approved AI model vendors.",
      },
      {
        q: "What happens if your upstream provider changes their policies, pricing or rate limits?",
        a: "Provider abstraction and fallback strategy help reduce disruption by enabling routing adjustments, policy-safe behavior, and workload redistribution.",
      },
      {
        q: "What models do you use and who processes the data?",
        a: "Model choice depends on your requirements. Data processing responsibilities are documented clearly so you know which services are involved.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("fundamentals");
  const [open, setOpen] = useState<string | null>(null);

  const totalFaqs = useMemo(
    () => faqCategories.reduce((sum, category) => sum + category.items.length, 0),
    []
  );

  const activeData = faqCategories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-dark-deep overflow-x-hidden">
      <SEO 
        title="WhatsApp AI Chatbot FAQ | Common Questions | Bluechilli AI"
        description="Got questions about WhatsApp AI chatbots? Find answers on setup time, costs, integrations, security, and how Bluechilli’s AI handles customer conversations."
        canonical="https://www.bluechilli.ai/faq"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqCategories.flatMap(category => 
            category.items.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          )
        })}
      </script>
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "FAQ", item: "/faq" }
      ]} />
      <Navbar />
      <main className="relative pt-28 md:pt-32 pb-24">
        <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-neon-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute top-56 -right-24 h-[26rem] w-[26rem] rounded-full bg-neon-pink/15 blur-3xl" />

        <section className="container mx-auto px-4 sm:px-6 relative max-w-full lg:max-w-7xl">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.3] mb-6">
              WhatsApp AI Chatbot: <br />
              <span className="gradient-text block leading-[1.4]">Frequently Asked Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our WhatsApp AI chatbots, setup,
              security, and more.
            </p>
          </AnimatedSection>


          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mb-12 md:mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {faqCategories.map((category, idx) => {
                const CategoryIcon = category.icon;
                const isActive = activeCategory === category.id;

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpen(null);
                      if (window.innerWidth < 1024) {
                        document
                          .getElementById("faq-content")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.96 }}
                    className="group relative"
                  >
                    {/* Card Container */}
                    <div
                      className="relative rounded-2xl border backdrop-blur-xl transition-all duration-400 overflow-hidden"
                      style={{
                        borderColor: isActive
                          ? `${category.color}88`
                          : "rgba(255,255,255,0.1)",
                        background: isActive
                          ? `linear-gradient(135deg, rgba(${parseInt(category.color.slice(1, 3), 16)}, ${parseInt(category.color.slice(3, 5), 16)}, ${parseInt(category.color.slice(5, 7), 16)}, 0.15), rgba(${parseInt(category.color.slice(1, 3), 16)}, ${parseInt(category.color.slice(3, 5), 16)}, ${parseInt(category.color.slice(5, 7), 16)}, 0.05))`
                          : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                      }}
                    >
                      {/* Top accent line */}
                      {isActive && (
                        <div
                          className="absolute inset-x-0 top-0 h-1"
                          style={{
                            background: `linear-gradient(90deg, ${category.color}, transparent)`,
                          }}
                        />
                      )}

                      {/* Background glow on hover/active */}
                      <div
                        className="pointer-events-none absolute -inset-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                        style={{
                          background: category.color,
                          transitionDelay: isActive ? "0ms" : "150ms",
                          opacity: isActive ? 0.2 : 0,
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 p-6 md:p-7 text-center h-full">
                        {/* Icon Container */}
                        <div className="flex flex-row items-center gap-4 ">
                          <div className="relative">
                            <div
                              className="h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center transition-all duration-300"
                              style={{
                                background: `${category.color}25`,
                                border: `2px solid ${category.color}45`,
                                color: category.color,
                              }}
                            >
                              <CategoryIcon size={28} strokeWidth={1.5} />
                            </div>
                            {isActive && (
                              <div
                                className="absolute inset-0 rounded-xl animate-pulse"
                                style={{
                                  background: `linear-gradient(135deg, ${category.color}33, transparent)`,
                                }}
                              />
                            )}
                          </div>
                          {/* Title */}
                          <div>
                            <h3
                              className="text-sm md:text-base font-display font-bold leading-tight transition-all duration-300 text-start "
                              style={{
                                color: isActive
                                  ? category.color
                                  : "rgba(255,255,255,0.85)",
                                textShadow: isActive
                                  ? `0 0 20px ${category.color}40`
                                  : "none",
                              }}
                            >
                              {category.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Active Category FAQs */}
          {activeData && (
            <motion.div
              id="faq-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3 md:space-y-4 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div
                  className="h-10 w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${activeData.color}22`,
                    color: activeData.color,
                  }}
                >
                  {activeData && <activeData.icon size={24} />}
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white/95">
                    {activeData.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/55">
                    {activeData.items.length} questions to help you get started
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {activeData.items.map((faq, itemIndex) => {
                  const faqKey = `${activeData.id}-${itemIndex}`;
                  const isOpen = open === faqKey;

                  return (
                    <motion.div
                      key={faq.q}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.28,
                        delay: itemIndex * 0.04,
                      }}
                      className="group relative rounded-2xl border bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] overflow-hidden transition-all duration-300 hover:border-opacity-100"
                      style={{ borderColor: `${activeData.color}40` }}
                    >
                      {/* Glow on hover */}
                      <div
                        className="pointer-events-none absolute -inset-20 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ background: activeData.color }}
                      />

                      <button
                        onClick={() => setOpen(isOpen ? null : faqKey)}
                        className="relative z-10 w-full flex items-center justify-between gap-3 p-5 md:p-6 text-left"
                      >
                        <span className="font-display text-base md:text-lg font-semibold text-white/90 pr-2">
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          style={{ color: activeData.color }}
                        />
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p
                          className="relative z-10 px-5 md:px-6 pb-5 md:pb-6 pt-5 md:pt-6 text-white/68 leading-relaxed border-t"
                          style={{
                            borderColor: `${activeData.color}2b`,
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>
          )}
        </section>

        {/* FAQ - Final CTA */}
        <section className="container mx-auto px-4 mt-20 text-center">
          <AnimatedSection>
            <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent">
              <h2 className="font-display text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-white/60 mb-8">
                Our team is ready to help you with any specific technical requirements or model questions.
              </p>
              <Link 
                to="/contact"
                className="btn-gradient px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
              >
                Talk to an Expert <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
