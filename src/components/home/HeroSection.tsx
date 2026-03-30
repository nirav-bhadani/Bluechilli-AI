import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import whatsappQrImage from "../../assets/Blu_whatsapp_qr.png";

const chatMessages = [
  { from: "user", text: "Hi, I want to order a large pepperoni pizza 🍕" },
  { from: "bot", text: "Great choice! Would you like to add any drinks or sides to your order?" },
  { from: "user", text: "Add a Coke and garlic bread" },
  { from: "bot", text: "Perfect! Your total is $24.99. Shall I confirm the order for delivery?" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-pink/8 rounded-full blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            AI Chatbots That <br />
            Feel <span className="text-foreground">Human</span>
            <br />
            <span className="gradient-text">And Work Like Your Team</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Not scripted bots. Not generic AI. Fully integrated, business-aware
            chatbots that understand your customers, your systems, and your
            brand — and respond like a real person would.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="btn-gradient px-8 py-3.5 rounded-xl text-sm inline-flex items-center gap-2"
            >
              Start Live Demo <ArrowRight size={16} />
            </Link>
            <Link
              to="/how-it-works"
              className="btn-glass px-8 py-3.5 rounded-xl text-sm"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* QR Code Card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 -md:top-4 right-5 -md:right-4 z-20 glass rounded-xl p-5 glow-sm"
          >
            <img
              src={whatsappQrImage}
              alt="Bluechilli WhatsApp QR code"
              className="h-16 w-16 rounded-md object-contain"
            />
            <p className="text-xs text-muted-foreground mt-2">Scan to chat</p>
          </motion.div>

          {/* Chat Preview */}
          <div className="glass rounded-2xl p-6 glow-md mb-10 md:mt-0">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="h-10 w-10 rounded-full btn-gradient flex items-center justify-center text-sm font-bold">
                AI
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Bluechilli AI
                </p>
                <p className="text-xs text-neon-blue">● Online</p>
              </div>
            </div>

            <div className="space-y-4">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.4, duration: 0.4 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.from === "user"
                        ? "btn-gradient rounded-br-md"
                        : "glass rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
                className="flex justify-start"
              >
                <div className="glass rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing-dot-1" />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing-dot-2" />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing-dot-3" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
