import { motion } from 'framer-motion';
import { Github, PenTool } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-primary/5"
    >
      <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
        <div className="bg-primary text-background p-1.5 rounded-lg">
          <PenTool size={20} />
        </div>
        <span>Inklyze</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-primary/60">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-primary transition-colors">Process</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://github.com/phattar4phan/Inklyze" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 hover:bg-primary/5 rounded-full transition-colors"
        >
          <Github size={20} />
        </a>
        <button className="bg-primary text-background px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          Try now
        </button>
      </div>
    </motion.nav>
  );
};
