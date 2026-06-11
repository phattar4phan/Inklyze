import { motion } from 'framer-motion';
import { Upload, Camera, LayoutGrid, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "The Synthesis",
    description: "Upload images or videos. Our OCR processes the text and readjusts pages for perfect alignment before export.",
    icon: Upload,
    phase: "01"
  },
  {
    title: "The Vision",
    description: "Enable live camera input. Our AI auto-captures frames when it detects stable, high-quality content.",
    icon: Camera,
    phase: "02"
  },
  {
    title: "The Organization",
    description: "Live preview documents, group them into logical sections, and generate a clean, professional PDF.",
    icon: LayoutGrid,
    phase: "03"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">The Pipeline</h2>
          <p className="text-primary/60 max-w-xl mx-auto">Stages of intelligent document evolution</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="mb-8 flex items-baseline gap-4">
                <span className="text-6xl font-display font-bold text-primary/5 group-hover:text-accent/10 transition-colors">
                  {step.phase}
                </span>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-accent">
                  <step.icon size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-primary/60 leading-relaxed mb-6">
                {step.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-medium text-primary/80">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Real-time processing</span>
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-primary/80">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>AI-powered enhancement</span>
                </li>
              </ul>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-6 w-12 border-t border-dashed border-primary/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
