import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold tracking-wider uppercase mb-8"
        >
          <Sparkles size={14} className="text-accent" />
          <span>Hackclub, Stardance</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
        >
          From Ink to Impact, <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            Instantly.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-primary/60 mb-12 leading-relaxed"
        >
          Capture live writing, digitize with precision, and export PDFs in seconds. 
          Built for the next generation of thinkers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative bg-primary text-background px-8 py-4 rounded-full text-lg font-bold animate-pulse-soft overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Checkout <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/5 transition-colors">
            View Demo
          </button>
        </motion.div>

        {/* Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl aspect-video rounded-3xl border border-primary/10 bg-white shadow-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-primary/20 font-display font-bold text-4xl italic">
              [ Elegant Product Mockup ]
            </div>
          </div>
          {/* Decorative browser dots */}
          <div className="absolute top-4 left-6 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/20" />
            <div className="w-3 h-3 rounded-full bg-amber-400/20" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
