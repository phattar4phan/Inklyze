import { motion } from 'framer-motion';
import { ScanText, Video, FileOutput, Zap } from 'lucide-react';

const features = [
  {
    title: "Optical Character Recognition",
    description: "Beyond text recognition. Create from sratch, compare with enterprise OCR model.",
    icon: ScanText,
    className: "md:col-span-2 md:row-span-2 bg-slate-900 text-white",
  },
  {
    title: "Live Vision",
    description: "Auto-captures the documents and create digital documents from them.",
    icon: Video,
    className: "md:col-span-1 md:row-span-1 bg-stone-100",
  },
  {
    title: "Seamless Export",
    description: "From camera to polished PDF in one click.",
    icon: FileOutput,
    className: "md:col-span-1 md:row-span-2 bg-indigo-50",
  },
  {
    title: "Stardance Optimized",
    description: "Built for speed and precision for everybody who need live documents digitalizer.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1 bg-white border border-primary/5",
  },
];

export const BentoGrid = () => {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Powerful Features.</h2>
          <p className="text-primary/60 max-w-xl mx-auto">Everything you need to turn your analog ideas into digital assets.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-150">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl flex flex-col justify-between ${feature.className}`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.className.includes('slate-900') ? 'bg-white/10 text-white' : 'bg-primary text-background'}`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className={feature.className.includes('slate-900') ? 'text-white/60' : 'text-primary/60'}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
