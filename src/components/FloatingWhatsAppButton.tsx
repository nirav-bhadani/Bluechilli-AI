import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/15557423957?text=Hi%20Bluechilli%20AI%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

/* WhatsApp SVG icon so we don't need an extra dep */
const WAIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className="h-7 w-7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C8.268 2 2 8.268 2 16c0 2.47.65 4.787 1.787 6.793L2 30l7.438-1.762A13.935 13.935 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
      fill="#25D366"
    />
    <path
      d="M23.07 19.39c-.31-.155-1.836-.905-2.12-1.009-.284-.103-.49-.155-.697.155-.207.31-.8.9-.98 1.086-.18.185-.362.207-.672.052-.31-.156-1.308-.482-2.49-1.536-.92-.82-1.54-1.833-1.72-2.143-.181-.31-.02-.478.136-.633.14-.139.31-.362.465-.543.155-.18.207-.31.31-.517.104-.207.052-.388-.026-.543-.077-.155-.697-1.68-.954-2.302-.251-.605-.507-.522-.697-.533-.18-.01-.387-.012-.594-.012-.207 0-.543.078-.827.388-.284.31-1.085 1.06-1.085 2.585s1.11 2.999 1.265 3.207c.155.207 2.185 3.338 5.294 4.681.74.32 1.318.51 1.769.653.743.236 1.42.203 1.954.123.596-.089 1.836-.75 2.095-1.474.259-.724.259-1.344.18-1.474-.077-.129-.284-.207-.594-.362z"
      fill="#fff"
    />
  </svg>
);

const FloatingWhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* auto-open after 4 s on first visit */
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(t);
  }, []);

  /* close when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 left-2 right-2 z-[100] md:bottom-8 md:right-8 md:left-auto flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* ── popup card ── */}
      <div
        className={`transition-all duration-500 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.55)] border border-white/10 backdrop-blur-md bg-[#111827]/95 ml-auto">
          {/* header */}
          <div className="relative bg-gradient-to-br from-emerald-600 to-green-500 px-5 py-4 flex items-center gap-3">
            {/* decorative blobs */}
            <span
              className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10 blur-xl"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-0 left-0 h-14 w-14 rounded-full bg-black/10 blur-lg"
              aria-hidden="true"
            />

            {/* avatar */}
            <div className="relative shrink-0">
              <div className="h-12 w-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                B
              </div>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-[#00ff7f] border-2 border-emerald-600 shadow" />
            </div>

            <div className="relative flex-1">
              <p className="font-semibold text-white text-sm leading-tight">
                Blu — AI Assistant
              </p>
              <p className="text-emerald-100 text-xs mt-0.5 flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00ff7f] animate-pulse" />
                Online · typically replies instantly
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="relative text-white/70 hover:text-white transition-colors"
              aria-label="Close chat popup"
            >
              <X size={18} />
            </button>
          </div>

          {/* body */}
          <div className="px-5 py-5 space-y-4">
            {/* chat bubble */}
            <div className="flex gap-2.5">
              <div className="shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-xs font-bold shadow">
                B
              </div>
              <div className="relative bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-white/90 leading-relaxed shadow">
                <span className="absolute -left-1.5 top-0 h-0 w-0 border-t-[10px] border-t-white/10 border-l-[10px] border-l-transparent" />
                👋 Hi there! I'm <strong>Blu</strong>, Bluechilli's AI sales
                assistant.
                <br />
                <br />
                Got questions about how we can automate your customer chats? I'm
                here 24/7!
              </div>
            </div>

            {/* typing indicator */}
            <div className="flex gap-2.5 items-end">
              <div className="shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-xs font-bold shadow">
                B
              </div>
              <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0ms]" />
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:150ms]" />
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,185,129,0.28)] hover:scale-[1.02] active:scale-100 transition-all duration-200"
            >
              <WAIcon />
              Start Chat on WhatsApp
            </a>

            <p className="text-center text-[11px] text-white/30">
              No commitment · Available 24/7 · Instant response
            </p>
          </div>
        </div>
      </div>

      {/* ── floating button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className={`pointer-events-auto relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
          open ? "scale-95" : ""
        }`}
      >
        {/* ping rings */}
        <span
          className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md animate-pulse"
          aria-hidden="true"
        />
        <span className="relative">
          <WAIcon />
        </span>

        {/* unread badge */}
        {!open && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 border-2 border-[#111827] flex items-center justify-center text-[10px] font-bold text-white shadow">
            1
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;
