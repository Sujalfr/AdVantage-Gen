/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Zap, Image as ImageIcon, Lightbulb, Download, Smartphone } from 'lucide-react';
import { FEATURES, STEPS } from '../constants';

const icons: Record<string, any> = {
  Zap,
  Image: ImageIcon,
  Lightbulb,
  Download,
  Smartphone
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-10 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl font-display font-bold tracking-tight">Unmatched Power</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Experience the next generation of AI creative tools built for professionals and enthusiasts alike.</p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = icons[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-purple-500/30 transition-all group shadow-sm shadow-purple-500/5 hover:shadow-purple-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-slate-100">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section className="py-32 px-10 relative overflow-hidden bg-dark-bg">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-display font-bold tracking-tight">How It Works</h2>
          <p className="text-slate-400 text-lg">Master the art of AI generation in three simple steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center group"
            >
              <div className="text-8-xl font-display font-black text-white/[0.02] mb-4 absolute -top-12 left-1/2 -translate-x-1/2 select-none group-hover:text-purple-500/[0.03] transition-colors">
                {step.number}
              </div>
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 flex items-center justify-center mx-auto mb-8 backdrop-blur-3xl group-hover:border-purple-500/40 transition-all duration-500 shadow-xl">
                  <span className="text-2xl font-display font-bold text-purple-400">{step.number}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-slate-100">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm px-4">{step.description}</p>
              </div>
              
              {i < 2 && (
                <div className="hidden md:block absolute top-10 left-[70%] w-full h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
