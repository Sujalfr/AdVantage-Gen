/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import AIImageGenerator from './components/AIImageGenerator';
import { FeaturesSection, HowItWorksSection } from './components/InfoSections';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#020205] text-slate-100 font-sans relative overflow-hidden flex flex-col selection:bg-purple-500/30">
      {/* Background Atmospheric Effects */}
      <div className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      <div className="fixed bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none -z-0"></div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 z-[100] origin-left shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        style={{ scaleX }}
      />

      <Header />
      
      <main className="relative z-10 flex-1 flex flex-col">
        <AIImageGenerator />
        <FeaturesSection />
        <HowItWorksSection />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
