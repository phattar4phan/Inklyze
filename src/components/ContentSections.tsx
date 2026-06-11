import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

export const ProblemStatement = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex p-3 rounded-2xl bg-accent/10 text-accent mb-8"
        >
          <Target size={24} />
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Why wait for the scan?</h2>
        <p className="text-xl md:text-2xl text-primary/70 leading-relaxed italic">
          "Whiteboards fade. Photos get lost in your gallery. Notes stay trapped on paper. 
          Inklyze bridges the gap between the physical and digital, ensuring your brilliance 
          is never left behind."
        </p>
      </div>
    </section>
  );
};

export const ProductOverview = () => {
  return (
    <section id="about" className="py-24 px-6 border-t border-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">A New Era of Documentation.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-background flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Mission</h4>
                  <p className="text-primary/60">To provide a live document viewing and PDF synthesis engine that works at the speed of thought.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-background flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Audience</h4>
                  <p className="text-primary/60">Designed for students, researchers, and creative professionals who live at the intersection of analog and digital.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 rounded-3xl -rotate-2" />
            <div className="relative bg-white p-8 rounded-3xl border border-primary/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Key Outcomes</h3>
              <ul className="space-y-4">
                {[
                  "Searchable handwritten archives",
                  "Structured PDF reports from live sessions",
                  "Instant collaboration across platforms",
                  "Zero friction from paper to cloud"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary/80 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
