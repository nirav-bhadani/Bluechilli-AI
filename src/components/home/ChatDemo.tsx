import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const conversation = [
  { from: "user", text: "Hey, do you have any availability for tonight?" },
  { from: "bot", text: "Hi there! 👋 Yes, we have tables available tonight. How many guests will be dining?" },
  { from: "user", text: "Table for 4, around 8pm please" },
  { from: "bot", text: "I've found a lovely table for 4 at 8:00 PM. Would you like me to reserve it? I'll need a name for the booking." },
  { from: "user", text: "Yes, under the name Sarah" },
  { from: "bot", text: "Done! ✅ Table for 4 booked for tonight at 8:00 PM under Sarah. You'll receive a confirmation shortly. See you tonight! 🍽️" },
];

const ChatDemo = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && visibleCount < conversation.length) {
      const timer = setTimeout(() => setVisibleCount((c) => c + 1), 1200);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, isInView]);

  return (
    <section className="section-spacing" ref={containerRef}>
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            See It in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how AI handles a real restaurant booking conversation
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-lg mx-auto">
          <div 
            role="img"
            aria-label="Interactive demo showing a Bluechilli AI chatbot handling a restaurant reservation on WhatsApp"
            className="glass rounded-2xl p-6 glow-md"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="h-10 w-10 rounded-full btn-gradient flex items-center justify-center text-sm font-bold">
                🤖
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Restaurant AI</p>
                <p className="text-xs text-neon-blue">● Active</p>
              </div>
            </div>

            <div className="space-y-3 min-h-[320px]">
              <AnimatePresence>
                {conversation.slice(0, visibleCount).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "btn-gradient rounded-br-md"
                          : "glass rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {visibleCount < conversation.length && visibleCount > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing-dot-1" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing-dot-2" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing-dot-3" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ChatDemo;
