import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-dark-deep">
      <Navbar />
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection className="mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: March 27, 2026
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Introduction */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bluechilli AI ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </AnimatedSection>

            {/* Information We Collect */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-white mb-2">Personal Information You Provide:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Name, email address, phone number, and business information</li>
                    <li>Account credentials and authentication information</li>
                    <li>Payment and billing information</li>
                    <li>Messages, inquiries, and communications you send us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Information Collected Automatically:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, clicks, interactions)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">WhatsApp Integration Data:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>WhatsApp conversation content for AI training and service improvement</li>
                    <li>Message metadata (timestamps, sender information)</li>
                    <li>User engagement metrics</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* How We Use Your Information */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Providing, maintaining, and improving our AI services</li>
                <li>Processing transactions and sending related information</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Detecting, preventing, and addressing fraud or technical issues</li>
                <li>Complying with legal obligations</li>
                <li>Training and improving our AI models</li>
              </ul>
            </AnimatedSection>

            {/* Data Sharing */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. However, we may share your data with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Service providers and vendors who assist in our operations</li>
                <li>Business partners with your consent</li>
                <li>Law enforcement or authorities when required by law</li>
                <li>Successors in acquisition or merger scenarios</li>
              </ul>
            </AnimatedSection>

            {/* Data Security */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement comprehensive security measures including encryption, secure servers, and regular security audits to protect your data. However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </AnimatedSection>

            {/* Your Rights */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </AnimatedSection>

            {/* Cookies */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to understand how you use our services. You can disable cookies through your browser settings, though some features may not function properly.
              </p>
            </AnimatedSection>

            {/* Retention */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your account and associated data at any time.
              </p>
            </AnimatedSection>

            {/* Third-Party Links */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.
              </p>
            </AnimatedSection>

            {/* Changes to Policy */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. The date at the top indicates the last revision. Continued use of our services constitutes acceptance of the updated policy.
              </p>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8 border border-[#E6007E]/30 bg-gradient-to-br from-[#E6007E]/5 to-transparent">
              <h2 className="font-display text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <span className="font-semibold text-white">Email:</span> hello@bluechilli.ai
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span> 0121 359 1384
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span> Unit 2, Avenue Terrace, Avenue Road, Aston, Birmingham B6 4DY
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
