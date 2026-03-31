import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import HeroSection from "../components/home/HeroSection";
import ProblemSolution from "../components/home/ProblemSolution";
import FeaturesGrid from "../components/home/FeaturesGrid";
import ChatDemo from "../components/home/ChatDemo";
import UseCases from "../components/home/UseCases";

const Index = () => (
  <div className="min-h-screen bg-dark-deep">
    <SEO 
      title="WhatsApp AI Chatbots for Business | Bluechilli AI"
      description="Bluechilli builds bespoke WhatsApp AI chatbots that feel human. Automate customer support, sales, and bookings 24/7. Set up in one day. UK-based."
      canonical="https://www.bluechilli.ai/"
    />
    <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Bluechilli AI",
          "url": "https://www.bluechilli.ai",
          "logo": "https://www.bluechilli.ai/logo.png",
          "description": "Bespoke WhatsApp AI chatbots for business",
          "email": "hello@bluechilli.ai",
          "sameAs": [
            "https://www.facebook.com/bluechillidp/",
            "https://x.com/wearebluechilli",
            "https://www.linkedin.com/company/bluechilli-design-print/",
            "https://www.instagram.com/wearebluechilli/",
            "https://www.youtube.com/@BluechilliAI"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.bluechilli.ai",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.bluechilli.ai/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Bluechilli AI Chatbot",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, WhatsApp",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "GBP"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "24"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "WhatsApp AI Chatbot",
          "provider": {
            "@type": "Organization",
            "name": "Bluechilli AI"
          },
          "description": "Bespoke WhatsApp AI chatbots that feel human and integrate with your business systems.",
          "areaServed": "UK",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Chatbot Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom AI Chatbot Deployment"
                }
              }
            ]
          }
        }
      ])}
    </script>
    <Navbar />
    <HeroSection />
    <ProblemSolution />
    <FeaturesGrid />
    <ChatDemo />
    <UseCases />
    <Footer />
  </div>
);

export default Index;
