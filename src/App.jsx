import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeartsBackground from './components/HeartsBackground';
import SurpriseContent from './layout/SurpriseContent';
import LoveGate from './components/LoveGate';


function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#0d0415] flex items-center justify-center overflow-hidden font-sans">
      {/* 1. الخلفية تعمل دائماً */}
      <HeartsBackground />

      {/* 2. التحكم في تبديل المكونات */}
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <LoveGate key="gate" onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <SurpriseContent key="content" />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;