/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const GALLRY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', aspect: 'aspect-square' },
  { url: 'https://images.unsplash.com/photo-1635310061905-24b8104d59a7?auto=format&fit=crop&q=80&w=800', aspect: 'aspect-[3/4]' },
  { url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800', aspect: 'aspect-[4/3]' },
  { url: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ee8c?auto=format&fit=crop&q=80&w=800', aspect: 'aspect-square' },
  { url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800', aspect: 'aspect-[3/4]' },
  { url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800', aspect: 'aspect-[4/3]' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl font-display font-bold tracking-tight">Curated Masterpieces</h2>
            <p className="text-slate-400 italic">"Technology is just a tool. People use tools to create magic." Explore what's possible with ADVantage Gen.</p>
          </div>
          <button className="text-blue-400 font-bold px-6 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all text-xs uppercase tracking-widest">
            View full gallery
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLRY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl bg-white/5 border border-white/5 break-inside-avoid shadow-2xl shadow-black`}
            >
              <img
                src={img.url}
                alt="AI Generated Art"
                className={`w-full ${img.aspect} object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] mb-2">Neural Render Complete</span>
                <h4 className="text-white font-medium text-lg leading-tight">Abstract visual representation of neural networks</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
