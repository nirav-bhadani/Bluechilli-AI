import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-dark-deep">
      <Navbar />
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection className="mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Terms and <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: March 27, 2026
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Agreement */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Bluechilli AI's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </AnimatedSection>

            {/* Use License */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Bluechilli AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to reverse engineer, disassemble, or decompile any software contained on the website</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </AnimatedSection>

            {/* Disclaimer */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The materials on Bluechilli AI's website are provided on an 'as is' basis. Bluechilli AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Further, Bluechilli AI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </AnimatedSection>

            {/* Limitations */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">4. Limitations of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Bluechilli AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Bluechilli AI's website, even if Bluechilli AI or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </AnimatedSection>

            {/* Accuracy of Materials */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Bluechilli AI's website could include technical, typographical, or photographic errors. Bluechilli AI does not warrant that any of the materials on its website are accurate, complete, or current. Bluechilli AI may make changes to the materials contained on its website at any time without notice.
              </p>
            </AnimatedSection>

            {/* Materials and Content */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">6. Materials and Content Ownership</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The materials on Bluechilli AI's website are owned or controlled by Bluechilli AI. Unauthorized use of any materials may violate copyright, trademark, and other laws. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Republish materials from this website</li>
                <li>Sell, rent, or sub-licensing material from the website</li>
                <li>Reproducing, duplicating, or copying materials for commercial purpose</li>
                <li>Transferring materials to another person or "mirroring" materials on another server</li>
              </ul>
            </AnimatedSection>

            {/* Links and Third-Party Sites */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">7. Links and Third-Party Sites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bluechilli AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Bluechilli AI of the site. Use of any such linked website is at the user's own risk.
              </p>
            </AnimatedSection>

            {/* Modifications */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">8. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bluechilli AI may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </AnimatedSection>

            {/* Governing Law */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts located in England.
              </p>
            </AnimatedSection>

            {/* Service Availability */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">10. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we strive to maintain continuous service, Bluechilli AI makes no guarantees regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Uninterrupted access to the website or services</li>
                <li>Absence of errors or defects</li>
                <li>Timely delivery of services</li>
                <li>Correction of errors or functionality</li>
              </ul>
            </AnimatedSection>

            {/* User Accounts */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">11. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </AnimatedSection>

            {/* Prohibited Conduct */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">12. Prohibited Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to use this website in a way that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Violates any applicable law or regulation</li>
                <li>Infringes on intellectual property rights</li>
                <li>Harasses, threatens, defames, or abuses any person</li>
                <li>Attempts to gain unauthorized access to our systems</li>
                <li>Disrupts the normal flow of dialogue in our website</li>
                <li>Transmits viruses, malware, or harmful code</li>
              </ul>
            </AnimatedSection>

            {/* Payment Terms */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">13. Payment and Billing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By subscribing to Bluechilli AI's services, you authorize us to charge your payment method for the monthly fees. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Provide accurate and timely payment information</li>
                <li>Maintain current payment methods</li>
                <li>Pay all charges incurred through your account</li>
                <li>Notify us of any billing disputes within 30 days</li>
              </ul>
            </AnimatedSection>

            {/* Termination */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4">14. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bluechilli AI reserves the right to terminate your account and access to the website at any time, for any reason, including but not limited to violation of these terms. Upon termination, all rights and licenses granted to you will immediately cease.
              </p>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection className="glass rounded-2xl p-5 sm:p-8 border border-[#E6007E]/30 bg-gradient-to-br from-[#E6007E]/5 to-transparent">
              <h2 className="font-display text-2xl font-bold mb-4">15. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsAndConditions;
