import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import ProblemSolution from "../components/home/ProblemSolution";
import FeaturesGrid from "../components/home/FeaturesGrid";
import ChatDemo from "../components/home/ChatDemo";
import UseCases from "../components/home/UseCases";

const Index = () => (
  <div className="min-h-screen bg-dark-deep">
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
