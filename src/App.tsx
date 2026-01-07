import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandEssence from './components/BrandEssence';
import ValueProposition from './components/ValueProposition';
import Stats from './components/Stats';
import SignatureItems from './components/SignatureItems';
import BranchPresence from './components/BranchPresence';
import AppPromo from './components/AppPromo';
import RoasteryStory from './components/RoasteryStory';
import BusinessExpansion from './components/BusinessExpansion';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Add global styles to reset browser defaults
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.boxSizing = 'border-box';
    document.documentElement.style.boxSizing = 'border-box';
  }, []);

  const appStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    lineHeight: 1.6,
    color: '#1a1a1a',
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <Hero />
      <BrandEssence />
      <ValueProposition />
      <Stats />
      <SignatureItems />
      <BranchPresence />
      <AppPromo />
      <RoasteryStory />
      <BusinessExpansion />
      <Footer />
    </div>
  );
};

export default App;