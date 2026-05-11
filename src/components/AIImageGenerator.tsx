/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Download, Copy, RefreshCw, Zap, Image as ImageIcon, Wand2, X } from 'lucide-react';
import { generateImage } from '../services/imageService';
import { SAMPLE_PROMPTS } from '../constants';
import { GenerationStatus, GeneratedImage } from '../types';

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<GenerationStatus>('idle');
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);
  const [history, setHistory] = useState<GeneratedImage[]>(() => {
    const saved = localStorage.getItem('advantage-gen-history');
    return saved ? JSON.parse(saved) : [];
  });
  const [creativity, setCreativity] = useState(70);

  useEffect(() => {
    localStorage.setItem('advantage-gen-history', JSON.stringify(history));
  }, [history]);

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || status === 'generating') return;

    setStatus('generating');
    try {
      const url = await generateImage(prompt);
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url,
        prompt,
        timestamp: Date.now(),
      };
      setGeneratedImage(newImage);
      setHistory((prev) => [newImage, ...prev].slice(0, 5));
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    // In a real app we'd show a toast here
  };

  const downloadImage = async () => {
    if (!generatedImage) return;
    try {
      const response = await fetch(generatedImage.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `advantage-gen-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed', error);
    }
  };

  return (
    <section id="generator" className="relative z-10 px-10 py-12 overflow-hidden flex-1">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Input & Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Zap size={12} />
                <span>Next-Gen v4.2 Neural Engine</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight">
                Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">Imagination</span><br/>Into Stunning Art
              </h1>
              
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                Generate high-fidelity visuals from simple descriptions using advanced neural rendering.
              </p>
            </div>

            {/* Generator Box */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-5">
              <div className="relative group">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerate();
                    }
                  }}
                  placeholder="A futuristic city built inside a giant glass dome on Mars, cinematic lighting, hyper-realistic, 8k resolution..."
                  className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none text-sm leading-relaxed transition-all"
                />
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button
                    type="button"
                    onClick={copyPrompt}
                    className="p-2 rounded-md bg-white/5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Copy size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrompt('')}
                    className="p-2 rounded-md bg-white/5 text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Aspect Ratio</span>
                    <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-purple-500/40 cursor-pointer hover:bg-white/10">
                      <option className="bg-dark-bg">16:9 Cinematic</option>
                      <option className="bg-dark-bg">1:1 Square</option>
                      <option className="bg-dark-bg">4:5 Portrait</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Creativity</span>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={creativity}
                        onChange={(e) => setCreativity(parseInt(e.target.value))}
                        className="w-24 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                      <span className="text-[10px] font-mono text-purple-400 w-6">{creativity}%</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleGenerate()}
                  disabled={status === 'generating'}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center gap-2"
                >
                  {status === 'generating' ? (
                    <RefreshCw className="animate-spin" size={18} />
                  ) : (
                    <Sparkles size={18} />
                  )}
                  {status === 'generating' ? 'Generating...' : 'Generate Art'}
                </button>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <ImageIcon size={14} />
                Inspiration Gallery
              </span>
              <div className="grid grid-cols-2 gap-3">
                {SAMPLE_PROMPTS.slice(0, 4).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPrompt(p.text)}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/50 hover:bg-white/10 cursor-pointer transition-all text-left group"
                  >
                    <p className="text-xs text-slate-400 italic group-hover:text-slate-200 transition-colors">"{p.text}"</p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Result Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 h-full"
          >
            <div className="flex-1 min-h-[450px] rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden group shadow-2xl shadow-purple-500/5">
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <ImageIcon size={24} className="text-slate-600" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-600">Awaiting Input</span>
                  </motion.div>
                )}

                {status === 'generating' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center"
                  >
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full border-b-2 border-purple-500 animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="text-purple-500 animate-pulse" size={24} />
                      </div>
                    </div>
                    <p className="mt-6 text-purple-400 font-bold uppercase tracking-[0.2em] text-[10px] animate-pulse">Rendering Pixels</p>
                  </motion.div>
                )}

                {status === 'success' && generatedImage && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={generatedImage.url}
                      alt={generatedImage.prompt}
                      className="w-full h-full object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                    
                    {/* Overlay Controls */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1">Generation Complete</span>
                        <span className="text-lg font-medium text-white truncate max-w-[200px]">{generatedImage.prompt}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={downloadImage}
                          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white"
                        >
                          <Download size={18} />
                        </button>
                        <button
                          onClick={() => handleGenerate()}
                          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white"
                        >
                          <RefreshCw size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* History mini-gallery */}
            {history.length > 0 && (
              <div className="h-24 flex gap-4 overflow-hidden pt-2">
                {history.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      setGeneratedImage(img);
                      setPrompt(img.prompt);
                      setStatus('success');
                    }}
                    className={`w-24 h-full rounded-lg bg-white/5 border transition-all overflow-hidden relative group ${
                      generatedImage?.id === img.id ? 'border-purple-500/50 opacity-100 scale-105 shadow-lg shadow-purple-500/20' : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    <img 
                      src={img.url} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    {generatedImage?.id === img.id && (
                      <div className="absolute inset-0 bg-purple-500/10 pointer-events-none"></div>
                    )}
                  </button>
                ))}
                
                {history.length >= 5 && (
                  <div className="w-24 h-full flex flex-col items-center justify-center rounded-lg border border-dashed border-white/10 text-slate-600 bg-white/[0.02]">
                    <span className="text-[10px] font-bold">+{history.length}</span>
                    <span className="text-[8px] uppercase tracking-tighter">History</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
