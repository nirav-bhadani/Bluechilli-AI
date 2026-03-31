import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { gsap } from "gsap";
import logo from "../assets/logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Examples", path: "/examples" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  /* GSAP entrance */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(
      navRef.current,
      { y: -90, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    )
      .fromTo(
        logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        linksRef.current.filter(Boolean),
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: "power2.out" },
        "-=0.3",
      )
      .fromTo(
        ctaRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.7)" },
        "-=0.2",
      );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      {/* ── desktop nav ── */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 transition-all duration-500 ${
            scrolled ? "px-3" : "px-6"
          }`}
        >
          <div
            className={`relative flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              scrolled
                ? "bg-[rgba(8,8,20,0.85)] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl"
                : "bg-transparent"
            }`}
          >
            {/* gradient border glow when scrolled */}
            {scrolled && (
              <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
              </div>
            )}

            {/* Logo */}
            <Link
              ref={logoRef}
              to="/"
              className="relative flex items-center group shrink-0"
            >
              <span className="absolute -inset-2 rounded-xl bg-white/0 group-hover:bg-white/[0.04] transition-all duration-300" />
              <img
                src={logo}
                alt="Bluechilli AI - WhatsApp AI Chatbots That Feel Human"
                className="h-6 w-auto relative min-[992px]:h-8"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden min-[992px]:flex items-center gap-1">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    ref={(el) => {
                      linksRef.current[i] = el;
                    }}
                    to={link.path}
                    onMouseEnter={() => setHovered(link.path)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 group"
                  >
                    {/* hover bg */}
                    <AnimatePresence>
                      {hovered === link.path && !active && (
                        <motion.span
                          layoutId="nav-hover"
                          className="absolute inset-0 rounded-xl bg-white/[0.06]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* active pill */}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      />
                    )}

                    <span
                      className={`relative transition-colors duration-200 ${
                        active
                          ? "text-white font-semibold"
                          : "text-white/55 group-hover:text-white/90"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Status badge */}

              {/* CTA */}
              <Link
                ref={ctaRef}
                to="/contact"
                className="hidden min-[992px]:inline-flex items-center gap-1.5 btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold shadow-[0_2px_12px_rgba(139,92,246,0.24)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <Zap size={13} />
                Get Started
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="min-[992px]:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/80 hover:bg-white/10 transition-all"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] min-[992px]:hidden"
          >
            {/* backdrop */}
            <div className="absolute inset-0 bg-[#030308]/95 backdrop-blur-2xl" />

            {/* grid decoration */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-violet-600/20 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-sky-500/15 blur-[60px] pointer-events-none" />

            <div className="relative flex flex-col h-full px-8 pt-8 pb-10">
              {/* top bar */}
              <div className="flex items-center justify-between mb-12">
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img
                    src={logo}
                    alt="Bluechilli AI - WhatsApp AI Chatbots That Feel Human"
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/70 hover:bg-white/10 transition-all"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* nav links */}
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const active = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`group flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200 ${
                          active
                            ? "bg-white/[0.08] border border-white/10"
                            : "hover:bg-white/[0.05]"
                        }`}
                      >
                        <span
                          className={`font-display text-2xl font-bold ${
                            active
                              ? "gradient-text"
                              : "text-white/70 group-hover:text-white"
                          } transition-colors duration-200`}
                        >
                          {link.label}
                        </span>
                        <ArrowRight
                          size={18}
                          className={`transition-all duration-200 ${
                            active
                              ? "text-violet-400"
                              : "text-white/20 group-hover:text-white/60 group-hover:translate-x-1"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* bottom CTA */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                className="space-y-3"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gradient flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-base shadow-[0_4px_14px_rgba(139,92,246,0.26)]"
                >
                  <Zap size={16} />
                  Get Started Free
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
