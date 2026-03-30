import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, SendHorizontal, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

// ── Types ──────────────────────────────────────────────────────────────────────
type ChatMsg = { from: "user" | "bot"; text: string };
type Section = { title: string; content: ReactNode; defaultOpen?: boolean };
type CaseStudy = {
  id: string;
  title: string;
  pageTitle: string;
  industry: string;
  accentColor: string;
  sections: Section[];
  chatMessages: ChatMsg[];
};

// ── WhatsApp Phone Mockup ──────────────────────────────────────────────────────
const PhoneMockup = ({
  brandName,
  messages,
  accentColor,
}: {
  brandName: string;
  messages: ChatMsg[];
  accentColor: string;
}) => (
  <div className="relative w-full max-w-[300px] mx-auto">
    <div
      className="absolute -inset-6 rounded-[2.5rem] blur-2xl opacity-25"
      style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }}
    />
    <div className="relative rounded-[2.4rem] bg-[#1a1a2e] p-2.5 border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
      <div className="rounded-[2rem] overflow-hidden">
        {/* Status bar */}
        <div className="h-7 bg-[#111b21] flex items-center justify-between px-4">
          <span className="text-[10px] text-white/80 font-medium">9:41</span>
          <div className="w-16 h-3.5 rounded-full bg-black/80" />
          <div className="flex items-center gap-1 text-white/70">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round">
              <path d="M1.5 8.5a13 13 0 0 1 21 0M5 12a10 10 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0M12 19h.01" />
            </svg>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="18" height="11" rx="2" />
              <path d="M22 11v2" />
            </svg>
          </div>
        </div>

        {/* WA header */}
        <div className="px-3 py-2.5 bg-[#202c33] flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
            style={{ background: accentColor }}
          >
            {brandName.charAt(0)}
          </div>
          <div>
            <p className="text-[13px] text-white font-semibold leading-tight">{brandName}</p>
            <p className="text-[11px] text-[#8696a0]">Business Account</p>
          </div>
        </div>

        {/* Chat area */}
        <div className="h-[320px] bg-[#0b141a] px-3 py-3 overflow-hidden flex flex-col gap-2.5">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14, duration: 0.35 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[86%] rounded-lg px-3 py-2 text-[11px] leading-relaxed shadow-sm ${
                  msg.from === "user"
                    ? "bg-[#005c4b] text-white rounded-tr-none"
                    : "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Composer */}
        <div className="px-3 py-2.5 bg-[#202c33] flex items-center gap-2">
          <div className="flex-1 rounded-full bg-[#2a3942] px-3 py-1.5 text-[11px] text-[#8696a0]">
            Message
          </div>
          <div className="h-8 w-8 rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
            <SendHorizontal size={14} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── Bullet List Helper ─────────────────────────────────────────────────────────
const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-2 space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
        <CheckCircle2 size={15} className="text-[color:var(--bullet-color)] mt-0.5 shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// ── BlueTrip Holidays ──────────────────────────────────────────────────────────
const blueTrip: CaseStudy = {
  id: "blueTrip",
  title: "BlueTrip Holidays",
  pageTitle:
    "BlueTrip Holidays uses an AI WhatsApp chatbot to speed up safari and adventure bookings",
  industry: "Travel & Safari",
  accentColor: "#22c55e",
  sections: [
    {
      title: "Overview",
      defaultOpen: true,
      content: (
        <>
          <p className="mb-3">
            BlueTrip Holidays is a UK based travel company offering holidays worldwide with a strong
            reputation for safari and adventure experiences. Customers typically arrive with high
            intent and high expectations — wanting clear availability, confidence in dates, and fast
            answers about complex itineraries. Many are travelling across time zones and prefer quick
            updates on their phone rather than waiting for email replies.
          </p>
          <p className="mb-3">Before introducing a WhatsApp chatbot, the team faced familiar pressure points:</p>
          <Bullets
            items={[
              "Enquiries spiked in the evenings and at weekends when customers had time to browse",
              "Customers asked the same key questions repeatedly — trip dates, availability, and what is included",
              "Travellers already booked needed immediate access to holiday details while on the move",
              "Advisors spent too much time on routine queries and too little on high value consultation",
            ]}
          />
        </>
      ),
    },
    {
      title: "Why WhatsApp was the right channel",
      content: (
        <>
          <p className="mb-3">
            BlueTrip Holidays chose WhatsApp because it fits naturally into how people already communicate.
          </p>
          <Bullets
            items={[
              "No apps to download — reduces friction for first time enquirers",
              "No new logins or passwords — makes it easier to access information quickly",
              "A personal, familiar experience that matches how customers want to plan and manage travel",
            ]}
          />
          <p className="mt-3">
            This mattered for both new customers researching a safari and returning customers checking
            booking details shortly before departure.
          </p>
        </>
      ),
    },
    {
      title: "Key capabilities introduced",
      content: (
        <ol className="space-y-3 mt-1 list-none">
          {(
            [
              [
                "Trip discovery and availability",
                "Customers can explore what trips are available, understand which dates are open and narrow down options based on the type of adventure they want.",
              ],
              [
                "Booked holiday information on demand",
                "Travellers can quickly find key information linked to what they have already booked. This reduced the need to search through emails or wait for office hours.",
              ],
              [
                "Fast escalation to a live person",
                "When a customer needs expert advice, has a bespoke request or simply prefers to speak to a person, the chatbot hands over to a member of the team. This ensured automation never became a barrier to great service.",
              ],
            ] as [string, string][]
          ).map(([title, desc], i) => (
            <li key={i} className="flex gap-3">
              <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-[11px] flex items-center justify-center font-semibold">
                {i + 1}
              </span>
              <span>
                <strong className="text-white/85">{title}</strong> — {desc}
              </span>
            </li>
          ))}
        </ol>
      ),
    },
    {
      title: "Benefits and results",
      content: (
        <div className="space-y-5">
          {(
            [
              {
                heading: "Faster responses and better availability",
                items: [
                  "24/7 availability for both new enquiries and booked travellers",
                  "Instant responses for common questions about dates, availability and trip basics",
                ],
              },
              {
                heading: "Higher quality conversations for the sales team",
                items: [
                  "More time for destination knowledge, reassurance and tailoring itineraries",
                  "Better prepared handovers with clearer intent and context",
                  "Improved consistency in how key information is shared",
                ],
              },
              {
                heading: "Improved engagement at scale",
                items: [
                  "Handling multiple customers at once during peak enquiry periods",
                  "Personalisation at scale by guiding customers to relevant trips and dates",
                  "Multilingual support for overseas customers planning UK sold holidays",
                ],
              },
              {
                heading: "Cost effective growth",
                items: [
                  "Reduced pressure on the inbox and phone lines",
                  "Lower cost per enquiry handled",
                  "A smoother path from discovery to booking readiness",
                ],
              },
            ] as { heading: string; items: string[] }[]
          ).map(({ heading, items }) => (
            <div key={heading}>
              <h4 className="text-white/85 font-semibold mb-1">{heading}</h4>
              <Bullets items={items} />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Specific examples of improvements",
      content: (
        <div className="space-y-4">
          {(
            [
              [
                "Turning after hours browsing into qualified leads",
                "Many customers research safaris in the evening. The chatbot engaged them immediately, helping them check available dates and shortlist trips. By the time the sales team picked up the next day, they were speaking to customers who already had clear preferences and realistic expectations.",
              ],
              [
                "Helping booked travellers find information quickly",
                "Customers who had already booked often needed fast access to key details while packing, travelling or coordinating with family. The chatbot helped them find their holiday information quickly, reducing anxiety and cutting down last minute calls to the office.",
              ],
              [
                "Seamless escalation for complex requests",
                "Safari and adventure travel often includes special requirements such as combining multiple locations, adding extensions or confirming suitability for different fitness levels. When a request moved beyond quick answers, the chatbot handed over to a live person so the customer still received expert guidance without repeating themselves.",
              ],
            ] as [string, string][]
          ).map(([heading, text]) => (
            <div key={heading}>
              <h4 className="text-white/85 font-semibold mb-1">{heading}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <p>
          For BlueTrip Holidays, an AI powered WhatsApp chatbot improved the speed and consistency
          of customer support while protecting the high touch service needed for premium safari and
          adventure travel. Customers benefited from a familiar channel with no extra friction and
          the team benefited from fewer repetitive queries, better qualified conversations and a
          scalable way to grow without compromising on service.
        </p>
      ),
    },
  ],
  chatMessages: [
    { from: "user", text: "Hi! What availability do you have for an adventure holiday in August?" },
    {
      from: "bot",
      text: "Hi there — welcome to BlueTrip Holidays! To narrow it down: destination, dates, trip style, and budget per person?",
    },
    {
      from: "user",
      text: "2 adults. Mid to late August. Active — trekking or safari. Budget £2,500–£3,500 pp.",
    },
    {
      from: "bot",
      text: "Perfect. Kenya 7-night safari (20–28 Aug) or Morocco Atlas trekking (17–24 Aug) have good availability. More wildlife or more hiking?",
    },
    {
      from: "user",
      text: "More wildlife, flying from London. Max 10 nights. Mixed accommodation is fine.",
    },
    {
      from: "bot",
      text: "Brilliant — handing this to a BlueTrip advisor to confirm late-August Kenya options and hold space. They'll be in touch after 6pm today.",
    },
  ],
};

// ── SEOitRight ─────────────────────────────────────────────────────────────────
const seoitRight: CaseStudy = {
  id: "seoitRight",
  title: "SEOitRight",
  pageTitle:
    "SEOitRight uses an AI powered WhatsApp chatbot to keep PPC clients updated and reduce support load",
  industry: "PPC & Google Ads",
  accentColor: "#8b5cf6",
  sections: [
    {
      title: "Introduction",
      defaultOpen: true,
      content: (
        <>
          <p className="mb-3">
            SEOitRight is a UK based PPC and Google Ads service provider helping businesses monitor
            performance, manage spend and keep campaigns on track. As their client base grew, so did
            the volume of routine requests — performance reports, service updates, campaign changes,
            and callbacks.
          </p>
          <p>
            These queries often arrived outside office hours and during busy periods. The team faced
            a familiar challenge: balancing rapid client communication with the deep work required to
            optimise campaigns. Response delays risked frustrating customers and slowing decisions
            around budget, targeting and creative.
          </p>
        </>
      ),
    },
    {
      title: "Why WhatsApp was the right channel",
      content: (
        <>
          <p className="mb-3">
            Many of SEOitRight's clients already used WhatsApp daily. Key advantages were clear:
          </p>
          <Bullets
            items={[
              "No apps to download",
              "No new logins or passwords",
              "Personal, familiar experience clients already trusted",
            ]}
          />
          <p className="mt-3">
            Clients could message in seconds from their phone and get what they needed without
            waiting for an email reply or navigating a portal.
          </p>
        </>
      ),
    },
    {
      title: "What the chatbot enabled",
      content: (
        <div className="space-y-4">
          {(
            [
              [
                "Faster access to PPC reporting",
                "Clients could request their latest reports without waiting for office hours, meaning faster decisions on budget shifts and campaign priorities.",
              ],
              [
                "Smooth handling of campaign change requests",
                "The chatbot collected necessary information upfront for time-sensitive requests like pausing ad groups or adjusting daily budgets, reducing back and forth and helping the team action changes sooner.",
              ],
              [
                "Always on service updates",
                "Instead of searching emails, clients could simply ask what services were available and get an instant response on how they supported monitoring campaigns and spending.",
              ],
              [
                "Reliable callback requests",
                "When customers wanted to speak to someone, the chatbot captured the reason, preferred contact method and best time to call — improving internal scheduling and ensuring customers felt heard quickly.",
              ],
            ] as [string, string][]
          ).map(([heading, text]) => (
            <div key={heading}>
              <h4 className="text-white/85 font-semibold mb-1">{heading}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Benefits and results",
      content: (
        <div className="space-y-5">
          {(
            [
              {
                heading: "Better customer engagement",
                items: [
                  "Instant responses that reduced uncertainty around spend and performance",
                  "24/7 availability that supported customers outside working hours",
                  "Personalisation at scale that made requests feel relevant to each client",
                ],
              },
              {
                heading: "Operational efficiency for the agency",
                items: [
                  "Handling multiple customers at once during peak periods",
                  "Cost savings on support staff by reducing repetitive manual triage",
                  "Multilingual support to better serve diverse client teams",
                ],
              },
            ] as { heading: string; items: string[] }[]
          ).map(({ heading, items }) => (
            <div key={heading}>
              <h4 className="text-white/85 font-semibold mb-1">{heading}</h4>
              <Bullets items={items} />
            </div>
          ))}
          <div>
            <h4 className="text-white/85 font-semibold mb-1">
              Higher quality requests with less back and forth
            </h4>
            <p>
              By gathering key details upfront, the chatbot improved the quality of incoming
              requests. This reduced the number of follow up messages needed to clarify what the
              client wanted, helping the team respond with speed and accuracy.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Specific examples of improvements",
      content: (
        <Bullets
          items={[
            "When a client needed a quick view of campaign spend before a monthly finance review, the chatbot provided immediate access to the latest reporting without waiting for an account manager.",
            "When a customer requested changes to Google Ads campaigns, the chatbot captured the scope and urgency so the team could prioritise correctly and implement changes faster.",
            "When clients asked about updates to current services, the chatbot provided clear guidance on what was available and how it supported monitoring campaigns and spending.",
            "When a prospect or existing client requested someone to contact them, the chatbot streamlined the request and ensured the right person followed up with context, improving conversion and customer satisfaction.",
          ]}
        />
      ),
    },
    {
      title: "Conclusion",
      content: (
        <p>
          For SEOitRight, an AI powered WhatsApp chatbot turned routine communication into a fast
          and reliable client experience. Customers gained instant access to reporting, service
          updates and campaign support through a channel with no additional downloads or logins. The
          team reduced admin workload, responded faster and created a more scalable way to keep
          clients informed and confident in their PPC performance.
        </p>
      ),
    },
  ],
  chatMessages: [
    {
      from: "user",
      text: "Hi SEOitRight — can you tell me what services you're currently offering?",
    },
    {
      from: "bot",
      text: "Hi! We offer Google Ads management, budget monitoring, campaign optimisation, conversion tracking, reporting and change requests. Share your website and I'll check what's live for you.",
    },
    { from: "user", text: "Sure — Harrison Carpets, harrisoncarpets.co.uk." },
    {
      from: "bot",
      text: "Found your account. Currently running: Search campaign management, spend monitoring, ongoing optimisation and monthly reporting. Want a report — Google Ads, traffic, or both?",
    },
    {
      from: "user",
      text: "Both. Mainly traffic. Last 30 days, channel breakdown, top pages, UK cities — GA4 please.",
    },
    {
      from: "bot",
      text: "Done — generating your GA4 traffic PDF now with channel mix, top landing pages, and UK city breakdown.",
    },
  ],
};

// ── Static data ────────────────────────────────────────────────────────────────
const ALL_STUDIES: CaseStudy[] = [blueTrip, seoitRight];

const FILTERS = [
  { id: "all", label: "All Examples" },
  { id: "blueTrip", label: "BlueTrip Holidays" },
  { id: "seoitRight", label: "SEOitRight" },
];

// ── Page ───────────────────────────────────────────────────────────────────────
const Examples = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSectionIndex, setActiveSectionIndex] = useState<Record<string, number>>({
    blueTrip: 0,
    seoitRight: 0,
  });
  const visible =
    activeFilter === "all" ? ALL_STUDIES : ALL_STUDIES.filter((s) => s.id === activeFilter);

  return (
    <div className="min-h-screen bg-dark-deep overflow-x-hidden">
      <Navbar />

      <main className="relative pt-28 md:pt-32 pb-24">
        {/* background glows */}
        <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-neon-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute top-60 -right-24 h-96 w-96 rounded-full bg-neon-pink/15 blur-3xl" />

        <section className="container mx-auto px-4 sm:px-6 relative">
          {/* ── Premium Hero Section ── */}
          <div className=" md:mb-32">
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="max-w-5xl mx-auto text-center font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-8"
            >
              Real <span className="gradient-text">Examples</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-lg text-center mx-auto text-muted-foreground max-w-2xl leading-relaxed"
            >
              Explore how WhatsApp AI chatbots transform customer journeys
              across industries. From travel bookings to PPC support, discover
              how automation meets human expertise.
            </motion.p>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="grid mx-auto grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-xl"
            >
              {[
                { label: "Case Studies", value: "2+" },
                { label: "Industries", value: "2+" },
                { label: "Success Rate", value: "100%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 md:px-5 md:py-4"
                >
                  <p className="text-xl md:text-2xl font-black gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* ── Filter Tabs ── */}
          <div className="flex justify-center mb-5 md:mb-20 mt-10 md:mt-0">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 glass rounded-2xl sm:rounded-full border border-white/10 max-w-full">
              {FILTERS.map((f, i) => (
                <motion.button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === f.id
                      ? "btn-gradient text-white shadow-lg scale-105"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {f.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* ── Case Studies ── */}
          <div className="space-y-8 md:space-y-28 max-w-7xl mx-auto">
            {visible.map((study) => (
              <section
                key={study.id}
                className="relative rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 sm:p-6 md:p-10 lg:p-12 shadow-[0_22px_70px_rgba(0,0,0,0.3)]"
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full blur-3xl"
                  style={{ background: `${study.accentColor}1A` }}
                />

                <div className="mb-10 md:mb-12">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className="inline-flex items-center rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold"
                      style={{
                        color: study.accentColor,
                        borderColor: `${study.accentColor}66`,
                        background: `${study.accentColor}1A`,
                      }}
                    >
                      {study.industry}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Case Study
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight max-w-5xl mb-5">
                    {study.pageTitle}
                  </h2>

                  <div className="flex flex-wrap gap-2.5">
                    {study.sections.slice(0, 3).map((item) => (
                      <span
                        key={item.title}
                        className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/65"
                        style={{
                          borderColor: `${study.accentColor}44`,
                          background: "rgba(255,255,255,0.02)",
                        }}
                      >
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-10 items-start">
                  <div className="space-y-6">
                    {/* Section Tabs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {study.sections.map((section, idx) => (
                        <motion.button
                          key={section.title}
                          onClick={() => {
                            setActiveSectionIndex({
                              ...activeSectionIndex,
                              [study.id]: idx,
                            });
                            if (window.innerWidth < 1024) {
                              document
                                .getElementById(`section-content-${study.id}`)
                                ?.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.02 }}
                          className={`relative overflow-hidden rounded-2xl px-4 py-3.5 md:px-5 md:py-4 transition-all duration-300 border group backdrop-blur-sm ${
                            activeSectionIndex[
                              study.id as keyof typeof activeSectionIndex
                            ] === idx
                              ? "text-white shadow-xl"
                              : "text-white/70 hover:text-white"
                          }`}
                          style={
                            activeSectionIndex[
                              study.id as keyof typeof activeSectionIndex
                            ] === idx
                              ? {
                                  background: `linear-gradient(135deg, ${study.accentColor}E6, ${study.accentColor}B3)`,
                                  borderColor: `${study.accentColor}`,
                                  boxShadow: `0 8px 24px ${study.accentColor}40`,
                                }
                              : {
                                  borderColor: `${study.accentColor}44`,
                                  background: `linear-gradient(135deg, ${study.accentColor}12, ${study.accentColor}08)`,
                                }
                          }
                        >
                          <div className="flex items-center gap-2 text-center">
                            <span
                              className="inline-flex flex-none h-7 w-7 items-center justify-center rounded-full text-sm font-bold transition-all duration-300"
                              style={
                                activeSectionIndex[
                                  study.id as keyof typeof activeSectionIndex
                                ] === idx
                                  ? {
                                      background: "rgba(255,255,255,0.25)",
                                      color: "white",
                                    }
                                  : {
                                      background: `${study.accentColor}33`,
                                      color: study.accentColor,
                                    }
                              }
                            >
                              {idx + 1}
                            </span>
                            <span className="text-xs text-start md:text-sm font-semibold leading-tight line-clamp-2">
                              {section.title}
                            </span>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Active Section Card */}
                    <motion.article
                      id={`section-content-${study.id}`}
                      key={`section-${study.id}-${activeSectionIndex[study.id as keyof typeof activeSectionIndex]}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="group relative overflow-hidden rounded-2xl border bg-[linear-gradient(170deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 md:p-8 scroll-mt-24"
                      style={
                        {
                          borderColor: `${study.accentColor}40`,
                          boxShadow: `0 14px 34px ${study.accentColor}1A`,
                          "--bullet-color": study.accentColor,
                        } as CSSProperties
                      }
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-[3px]"
                        style={{
                          background: `linear-gradient(90deg, ${study.accentColor}, transparent 75%)`,
                        }}
                      />
                      <div
                        className="absolute -top-16 -right-10 h-28 w-28 rounded-full blur-2xl pointer-events-none"
                        style={{ background: `${study.accentColor}22` }}
                      />

                      <div className="mb-6 flex items-center gap-3">
                        <span
                          className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border px-2 text-[13px] font-bold"
                          style={{
                            borderColor: `${study.accentColor}66`,
                            color: study.accentColor,
                            background: `${study.accentColor}1A`,
                          }}
                        >
                          {activeSectionIndex[
                            study.id as keyof typeof activeSectionIndex
                          ] + 1}
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold text-white/95 tracking-wide">
                          {
                            study.sections[
                              activeSectionIndex[
                                study.id as keyof typeof activeSectionIndex
                              ]
                            ].title
                          }
                        </h3>
                      </div>

                      <div className="text-[15px] md:text-base text-white/70 leading-relaxed">
                        {
                          study.sections[
                            activeSectionIndex[
                              study.id as keyof typeof activeSectionIndex
                            ]
                          ].content
                        }
                      </div>
                    </motion.article>
                  </div>

                  <aside
                    className="self-start space-y-3"
                    style={{ position: "sticky", top: "96px" }}
                  >
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Example Conversation
                      </p>
                    </div>
                    <div
                      className="rounded-3xl border p-3 md:p-4"
                      style={{
                        borderColor: `${study.accentColor}50`,
                        background: `linear-gradient(180deg, ${study.accentColor}12, rgba(255,255,255,0.02))`,
                      }}
                    >
                      <div className="mb-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-center">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                          Live WhatsApp Preview
                        </p>
                      </div>
                      <PhoneMockup
                        brandName={study.title}
                        messages={study.chatMessages}
                        accentColor={study.accentColor}
                      />
                    </div>
                  </aside>
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Examples;
