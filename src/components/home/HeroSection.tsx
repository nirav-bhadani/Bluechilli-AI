import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import whatsappQrImage from "../../assets/Blu_whatsapp_qr.png";

const chatMessages = [
  {
    from: "user",
    text: "Hi, sorry it’s late. I’ve got water coming through my bathroom ceiling and it’s dripping into the light fitting. Can someone help?",
    time: "22:47",
  },
  {
    from: "bot",
    text: "Hi — you’ve reached our **AI-powered emergency service** and I’m here 24/7.\n\nBecause this involves water near electrics, please:\n• **Do not** use the bathroom light\n• If safe, switch off the power to that circuit at your consumer unit\n• Put a bucket down and keep the area clear\n\nI can log this as an **emergency repair** now. To find your account, please share:\n• Your **full name**\n• **First line of address**\n• Your **date of birth** (DD/MM/YYYY)",
    time: "22:47",
  },
  {
    from: "user",
    text: "Thanks. It’s Aisha Khan, Flat 12, Hawthorn House, DOB 14/09/1991.",
    time: "22:47",
  },
  {
    from: "bot",
    text: "Thanks, Aisha. I’ve found your details. One more quick check: please confirm your **contact number** in case our specialist needs to reach you.",
    time: "22:48",
  },
  {
    from: "user",
    text: "Mobile is 07xxx xxxxxx.",
    time: "22:48",
  },
  {
    from: "bot",
    text: "Perfect — I’ve matched your records.\n\nI’m logging an **emergency repair: water leak affecting ceiling**. To send the right engineer, please confirm:\n\n1. Is the leak **constant** or only when water is used upstairs?\n2. Any signs of the ceiling **bulging** or cracking?",
    time: "22:48",
  },
  {
    from: "user",
    text: "It’s constant. Ceiling has a crack and looks a bit swollen around the light.",
    time: "22:48",
  },
  {
    from: "bot",
    text: "Understood — thanks. Given the potential danger, please keep that room closed off.\n\nI’ve raised this as an **urgent emergency** and requested a **plumber + electrician**.\n\n**Your reference:** BC-ER-28419\n\n**Attendance target:** within 4 hours. If the ceiling starts sagging heavily or water pours through, please move to safety and call **999** for immediate danger.\n\nAre you able to safely switch off the power to the lighting circuit, or would you like step-by-step guidance?",
    time: "22:48",
  },
  {
    from: "user",
    text: "I’m not sure which switch to use. Step-by-step would help.",
    time: "22:49",
  },
  {
    from: "bot",
    text: "No problem. Stand on a dry surface:\n1. Go to your **consumer unit** (fuse box).\n2. Look for a label like **“Lights”**, **“Upstairs lights”**, or **“Bathroom”**.\n3. Switch **OFF** the corresponding breaker.\n\nCan you tell me what labels you see on the switches?",
    time: "22:49",
  },
  {
    from: "user",
    text: "It says “Cooker”, “Upstairs lights”, “Downstairs lights”. I’ve switched off upstairs lights.",
    time: "22:49",
  },
  {
    from: "bot",
    text: "That’s the right one — well done. Please don’t use any light switches in that area until it’s been inspected.\n\nI’ve updated your case **BC-ER-28419** to note that the **lights are isolated**.\n\nOur engineer will call you on **07xxx xxxxxx** before they arrive. While we wait: is there any water reaching sockets, or is anyone in the property vulnerable?",
    time: "22:49",
  },
  {
    from: "user",
    text: "No sockets affected. It's just me here.",
    time: "22:50",
  },
  {
    from: "bot",
    text: "Thanks, Aisha. I’ll keep this channel open.\n\nRecap:\n• Emergency repair logged: **BC-ER-28419**\n• Lighting circuit isolated\n• Engineer arrival within **4 hours**\n\nIf the leak worsens or the ceiling looks unstable, move away immediately and call **999**.\n\nWould you like me to send a status update if there’s no arrival report within the next hour?",
    time: "22:50",
  },
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
            WhatsApp AI Chatbots <br />
            That Feel <span className="text-foreground">Human</span>
            <br />
            <span className="gradient-text">and Work Like Your Team</span>
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
            className="absolute -top-8 -right-4 md:-top-6 md:-right-6 z-20 glass rounded-2xl p-3 md:p-4 glow-sm border border-white/10"
          >
            <div className="bg-white p-2 rounded-xl mb-2">
              <img
                src={whatsappQrImage}
                alt="Scan Bluechilli WhatsApp QR code to start a live AI chatbot conversation"
                className="h-16 w-16 object-contain"
              />
            </div>
            <p className="text-[10px] text-muted-foreground text-center font-medium">
              Scan to chat
            </p>
          </motion.div>

          {/* Chat Preview */}
          <div 
            role="img"
            aria-label="Interactive demo showing a Bluechilli AI chatbot handling a complex emergency repair request on WhatsApp"
            className="glass rounded-2xl p-6 glow-md mb-10 md:mt-0 max-w-2xl mx-auto lg:mx-0"
          >
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

            <div className="space-y-4 h-[520px] overflow-y-auto pr-4 custom-scrollbar">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.4, duration: 0.4 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "btn-gradient rounded-br-md"
                        : "glass rounded-bl-md"
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {msg.text.split("**").map((part, idx) =>
                        idx % 2 === 0 ? (
                          part
                        ) : (
                          <span key={idx} className="font-bold">
                            {part}
                          </span>
                        ),
                      )}
                    </div>
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
