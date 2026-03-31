import { zodResolver } from "@hookform/resolvers/zod";
import { Send, MessageCircle, Mail, Users, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/sonner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import AnimatedSection from "../components/AnimatedSection";
import { submitEnquiry } from "@/lib/enquiry";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(25, "Phone number is too long")
    .regex(/^[0-9+()\-\s]+$/, "Use only numbers and phone symbols"),
  message: z.string().trim().min(20, "Please enter at least 20 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const departments = [
    {
      id: "sales",
      title: "Sales",
      description: "New business enquiries and demos",
      email: "chat@bluechilli.ai",
      icon: Users,
      color: "#3b82f6",
    },
    {
      id: "success",
      title: "Client Success",
      description: "Support for existing customers",
      email: "chat@bluechilli.ai",
      icon: MessageCircle,
      color: "#10b981",
    },
    {
      id: "accounts",
      title: "Accounts",
      description: "Billing and invoice enquiries",
      email: "chat@bluechilli.ai",
      icon: CreditCard,
      color: "#f59e0b",
    },
  ];

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await submitEnquiry({
        subject: "New Contact Form Enquiry - Bluechilli AI",
        source: "Contact page",
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      });

      toast.success("Thanks, your enquiry has been sent.");
      reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Could not send your enquiry right now. Please try again.";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-dark-deep overflow-x-hidden">
      <SEO
        title="Contact Bluechilli AI | Get a WhatsApp Chatbot Demo"
        description="Ready to automate your customer conversations? Contact Bluechilli AI for a free WhatsApp chatbot demo. Chat on WhatsApp, email, or fill in our form."
        canonical="https://www.bluechilli.ai/contact"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Bluechilli AI",
          "description": "Ready to automate your customer conversations? Request a free WhatsApp AI chatbot demo from Bluechilli AI.",
          "url": "https://www.bluechilli.ai/contact",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "hello@bluechilli.ai"
          }
        })}
      </script>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />
      <Navbar />
      <main className="relative pt-28 md:pt-32 pb-24">
        {/* Background glows */}
        <div className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-neon-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute top-96 -right-24 h-[26rem] w-[26rem] rounded-full bg-neon-pink/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-neon-purple/10 blur-3xl" />

        <section className="container mx-auto px-4 sm:px-6 relative max-w-full lg:max-w-7xl">
          {/* Hero Section */}
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.3] mb-8">
              Contact Bluechilli AI — <br />
              <span className="gradient-text block leading-[1.4]">Get Started With WhatsApp Chatbots</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your customer communication? Our team is here
              to help you every step of the way.
            </p>
          </AnimatedSection>

          {/* Contact Form + Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-24"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-[400px_1px_minmax(0,1fr)] lg:gap-12 gap-8">
                {/* Left: Quick Contact Info */}
                <div className="space-y-5 lg:space-y-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white/95 mb-2">
                      Get in Touch
                    </h3>
                    <p className="text-white/60 text-sm md:text-base">
                      Multiple ways to reach our team
                    </p>
                  </div>

                  {/* WhatsApp Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="group relative rounded-2xl border bg-[linear-gradient(145deg,rgba(16,185,129,0.1),rgba(16,185,129,0.05))] p-6 overflow-hidden transition-all hover:-translate-y-1"
                  >
                    {/* Glow on hover */}
                    <div className="pointer-events-none absolute -inset-20 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity bg-green-500" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-green-500/30 flex items-center justify-center shrink-0">
                        <MessageCircle size={22} className="text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white/75 mb-2">
                          WhatsApp
                        </p>
                        <a
                          href="https://wa.me/15557423957"
                          target="_blank"
                          rel="noreferrer"
                          className="font-display text-lg font-bold text-white/90 hover:text-green-400 transition-colors"
                        >
                          Chat with Blu
                        </a>
                        <p className="text-xs text-green-400/70 mt-1">
                          Available 24/7
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Email Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.08 }}
                    className="group relative rounded-2xl border bg-[linear-gradient(145deg,rgba(139,92,246,0.1),rgba(139,92,246,0.05))] p-6 overflow-hidden transition-all hover:-translate-y-1"
                  >
                    {/* Glow on hover */}
                    <div className="pointer-events-none absolute -inset-20 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity bg-purple-500" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-purple-500/30 flex items-center justify-center shrink-0">
                        <Mail size={22} className="text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white/75 mb-2">
                          Email
                        </p>
                        <a
                          href="mailto:hello@bluechilli.ai"
                          className="font-display text-lg font-bold text-white/90 hover:text-purple-400 transition-colors break-all"
                        >
                          hello@bluechilli.ai
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px self-stretch bg-white/10" />

                {/* Right: Contact Form */}
                <div className="bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] rounded-2xl border border-white/10 p-5 sm:p-6 md:p-10 backdrop-blur-xl">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white/95 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-white/60 mb-8">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-white/75 mb-2.5 block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          {...register("name")}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:border-white/35 focus-visible:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-white/10 transition-[border-color,box-shadow,background-color] duration-200 ease-out"
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.name)}
                        />
                        {errors.name ? (
                          <p className="mt-2 text-sm text-red-300">
                            {errors.name.message}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-white/75 mb-2.5 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:border-white/35 focus-visible:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-white/10 transition-[border-color,box-shadow,background-color] duration-200 ease-out"
                          placeholder="your@email.com"
                          aria-invalid={Boolean(errors.email)}
                        />
                        {errors.email ? (
                          <p className="mt-2 text-sm text-red-300">
                            {errors.email.message}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/75 mb-2.5 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:border-white/35 focus-visible:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-white/10 transition-[border-color,box-shadow,background-color] duration-200 ease-out"
                        placeholder="Your phone number"
                        aria-invalid={Boolean(errors.phone)}
                      />
                      {errors.phone ? (
                        <p className="mt-2 text-sm text-red-300">
                          {errors.phone.message}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/75 mb-2.5 block">
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:border-white/35 focus-visible:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-white/10 transition-[border-color,box-shadow,background-color] duration-200 ease-out resize-none"
                        placeholder="Tell us about your business and what you're looking to achieve..."
                        aria-invalid={Boolean(errors.message)}
                      />
                      {errors.message ? (
                        <p className="mt-2 text-sm text-red-300">
                          {errors.message.message}
                        </p>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient rounded-xl py-3.5 text-base font-medium inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}{" "}
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Email Us Directly Section */}
          <AnimatedSection className="">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white/95 mb-3">
                Email Us Directly
              </h2>
              <p className="text-lg text-white/60">
                Reach the right team for your enquiry
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {departments.map((dept, idx) => {
                const DeptIcon = dept.icon;
                return (
                  <motion.div
                    key={dept.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group relative"
                  >
                    <div
                      className="relative rounded-2xl border bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-5 sm:p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-opacity-100 hover:-translate-y-1"
                      style={{ borderColor: `${dept.color}40` }}
                    >
                      {/* Background glow */}
                      <div
                        className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `${dept.color}15` }}
                      />

                      {/* Top accent */}
                      <div
                        className="absolute inset-x-0 top-0 h-1"
                        style={{
                          background: `linear-gradient(90deg, ${dept.color}, transparent 75%)`,
                        }}
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <div
                          className="h-14 w-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                          style={{
                            background: `${dept.color}22`,
                            color: dept.color,
                          }}
                        >
                          <DeptIcon size={24} strokeWidth={1.5} />
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white/95 mb-2">
                          {dept.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-white/65 mb-6">
                          {dept.description}
                        </p>

                        {/* Email Card */}
                        <a
                          href={`mailto:${dept.email}`}
                          className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border transition-all hover:bg-white/5"
                          style={{ borderColor: `${dept.color}45` }}
                        >
                          <Mail size={16} style={{ color: dept.color }} />
                          <span className="text-sm font-medium text-white/85 hover:text-white transition-colors">
                            {dept.email}
                          </span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
