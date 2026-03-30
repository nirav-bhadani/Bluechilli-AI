import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, ArrowUpRight, Linkedin, Instagram, Facebook, Youtube, Twitter, MessageCircle, Zap } from "lucide-react";
import logo from "../assets/logo.svg";
import whatsappQrImage from "../assets/Blu_whatsapp_qr.png";
import { toast } from "@/components/ui/sonner";
import { submitEnquiry } from "@/lib/enquiry";

const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

gsap.registerPlugin(ScrollTrigger);

const navCols = [
  {
    title: "Quick Links",
    links: [
      { label: "Home",      path: "/" },
      { label: "Examples", path: "/examples" },
      { label: "How It Works",  path: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", path: "/contact" },
      { label: "FAQ",     path: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",   path: "/privacy-policy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  },
];

const socials = [
  { icon: Facebook,  href: "https://www.facebook.com/bluechillidp/", label: "Facebook" },
  { icon: Twitter,    href: "https://x.com/wearebluechilli?s=11&t=_AcW3bHABp5pRl4q4ngI0Q", label: "X" },
  { icon: Linkedin,  href: "https://www.linkedin.com/company/bluechilli-design-print/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/wearebluechilli/", label: "Instagram" },
  { icon: Youtube,   href: "https://www.youtube.com/@BluechilliAI", label: "YouTube" },
];

const stats = [
  { value: "24/7",  label: "Always Online" },
  { value: "< 2s",  label: "Response Time" },
  { value: "94%",   label: "Satisfaction" },
  { value: "1-day", label: "Setup" },
];

const Footer = () => {
  const footerRef  = useRef<HTMLElement>(null);
  const ctaBandRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* CTA band entrance */
      gsap.fromTo(
        ctaBandRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ctaBandRef.current, start: "top 88%" },
        }
      );
      /* stagger columns */
      gsap.fromTo(
        contentRef.current?.querySelectorAll(".footer-col") ?? [],
        { y: 35, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.09, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const onNewsletterSubmit = async (values: NewsletterFormValues) => {
    try {
      await submitEnquiry({
        subject: "New Newsletter Enquiry - Bluechilli AI",
        source: "Footer newsletter",
        name: "Newsletter subscriber",
        email: values.email,
        message: `Please add ${values.email} to the Bluechilli AI newsletter list.`,
      });

      toast.success("Thanks, your email was submitted.");
      reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not submit right now. Please try again.";
      toast.error(message);
    }
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#030308]">

      {/* ── ambient blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3  h-[600px] w-[600px] rounded-full bg-violet-700/10  blur-[140px]" />
        <div className="absolute top-60  right-1/4  h-[400px] w-[400px] rounded-full bg-[#E6007E]/6   blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[280px] w-[800px] rounded-full bg-sky-600/7 blur-[100px]" />
      </div>

      {/* ── top hairline ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E6007E]/50 to-transparent" />

      {/* ════════════════════════════════
           CTA BAND
         ════════════════════════════════ */}
      <div ref={ctaBandRef} className="relative">
        <div className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm">

            {/* inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(230,0,126,0.12),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(139,92,246,0.1),transparent_60%)] pointer-events-none" />

            {/* top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E6007E]/60 to-transparent" />

            <div className="relative px-8 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">

              {/* left: logo + copy */}
              <div className="text-center md:text-left max-w-lg">
                <img src={logo} alt="Bluechilli AI" className="h-10 w-auto mx-auto md:mx-0 mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                  Ready to transform your<br />
                  <span className="gradient-text">customer conversations?</span>
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  Join hundreds of businesses using Bluechilli AI — set up in one day, results from day one.
                </p>

                {/* stat pills */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.09]">
                      <span className="font-bold text-white text-xs">{s.value}</span>
                      <span className="text-white/40 text-xs">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* right: CTA buttons */}
              <div className="flex flex-col gap-3 w-full md:w-auto min-w-[220px]">
                <div className="mx-auto md:mx-0 w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="rounded-2xl bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                      <img
                        src={whatsappQrImage}
                        alt="Bluechilli WhatsApp QR code"
                        className="h-20 w-20 rounded-lg object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-center md:text-start font-semibold uppercase tracking-[0.18em] text-emerald-400/90 mb-1">
                        Instant Access
                      </p>
                      <p className="text-sm font-semibold text-white leading-snug text-center md:text-start">
                        Scan to start chatting with Blu on WhatsApp
                      </p>
                      <p className="text-xs text-white/45 mt-1.5 leading-relaxed text-center md:text-start">
                        Open the camera on your phone and scan the code.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm shadow-[0_4px_16px_rgba(139,92,246,0.26)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
                >
                  <Zap size={15} />
                  Get Started Free
                </Link>
                <a
                  href="https://wa.me/15557423957?text=Hi%20Bluechilli%20AI%2C%20I%27d%20like%20to%20learn%20more"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.08] hover:text-white hover:border-white/20 hover:scale-[1.02] transition-all duration-200"
                >
                  <MessageCircle size={15} className="text-emerald-400" />
                  Chat on WhatsApp
                </a>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-emerald-400 font-medium">Blu AI online · instant replies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
           MAIN FOOTER GRID
         ════════════════════════════════ */}
      <div ref={contentRef} className="relative container mx-auto px-6 pb-10 max-w-7xl">

        {/* divider */}
        <div className="footer-col h-px w-full bg-white/[0.05] mb-14" />

        {/* columns row */}
        <div className="footer-col grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 mb-14">

          {/* brand col */}
          <div className="space-y-5">
            <div className="space-y-2.5">
              <a href="mailto:hello@bluechilli.ai"
                className="group flex items-center gap-2.5 text-base text-white/65 hover:text-white transition-colors duration-200">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 border border-violet-500/20">
                  <Mail size={12} className="text-violet-400" />
                </span>
                hello@bluechilli.ai
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
              </a>
            </div>

            {/* newsletter */}
            <div className="pt-2">
              <p className="text-sm font-bold uppercase tracking-widest text-white/45 mb-3">Newsletter</p>
              <form onSubmit={handleSubmit(onNewsletterSubmit)} noValidate className="flex gap-2">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 rounded-xl bg-white/[0.05] border border-white/[0.08] px-3 py-2.5 text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#E6007E]/40 transition-colors"
                  aria-invalid={Boolean(errors.email)}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shrink-0 btn-gradient px-4 py-2.5 rounded-xl text-base font-semibold hover:scale-[1.04] transition-all duration-200"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
              {errors.email ? <p className="mt-2 text-sm text-red-300">{errors.email.message}</p> : null}
            </div>
          </div>

          {/* nav cols */}
          {navCols.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-bold uppercase tracking-widest text-white/45 mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a href={link.path} target="_blank" rel="noreferrer"
                        className="group flex items-center gap-1 text-base text-white/60 hover:text-white transition-colors duration-200">
                        {link.label}
                        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link to={link.path}
                        className="group flex items-center gap-1 text-base text-white/60 hover:text-white transition-colors duration-200">
                        {link.label}
                        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── bottom bar ── */}
        <div className="footer-col flex flex-col md:flex-row items-center justify-between gap-5 pt-8 border-t border-white/[0.05]">
          <p className="text-sm text-white/40 text-center md:text-left">
            © 2026 Bluechilli AI Ltd. All rights reserved. &nbsp;·&nbsp;
            Registered in England & Wales (No. 16911937).
          </p>

          {/* socials */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-400">Blu AI Online 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
