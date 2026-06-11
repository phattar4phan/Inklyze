import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { HowItWorks } from './components/HowItWorks';
import { ProblemStatement, ProductOverview } from './components/ContentSections';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <BentoGrid />
        <ProductOverview />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
