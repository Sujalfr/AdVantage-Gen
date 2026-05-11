/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Github, Twitter, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-50 px-10 py-6 border-b border-white/5 bg-dark-bg/50 backdrop-blur-md">
      <nav className="flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-display font-medium tracking-tight">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">ADV</span>
            <span className="text-slate-100">antage Gen</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#generator" className="hover:text-white transition-colors">Features</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <div className="w-[1px] h-4 bg-white/10"></div>
          <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">Sign In</button>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex p-2 text-slate-400 hover:text-white transition-colors">
            <Twitter size={18} />
          </button>
          <button className="hidden sm:flex p-2 text-slate-400 hover:text-white transition-colors">
            <Github size={18} />
          </button>
          <button className="btn-primary text-white text-sm scale-90 px-6">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
