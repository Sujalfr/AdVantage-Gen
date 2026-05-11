/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Twitter, Instagram, Github, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 px-10 py-6 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></span>
            <span>System: <span className="text-slate-200">Operational</span></span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            <span>Cloud: <span className="text-slate-200">US-WEST-2</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
            <span>Version: <span className="text-slate-200">v4.2.1-stable</span></span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Support</a>
          </div>
          <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
          <span className="text-slate-600">© 2026 ADVantage Gen AI</span>
        </div>
      </div>
    </footer>
  );
}
