import React, { useEffect, useState } from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';
import AuthDemo from './components/AuthDemo';

const App = () => {
  const [authMode, setAuthMode] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  if (authMode) {
    return (
      <AuthDemo
        mode={authMode}
        onBack={() => setAuthMode(null)}
        onSwitch={setAuthMode}
      />
    );
  }

  return (
    <div id="home" className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header onAuth={setAuthMode} />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;
