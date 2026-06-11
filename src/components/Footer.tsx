import { Github, Twitter, Linkedin, PenTool } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight mb-6">
              <div className="bg-background text-primary p-1.5 rounded-lg">
                <PenTool size={24} />
              </div>
              <span>Inklyze</span>
            </div>
            <p className="text-background/60 max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of thinkers to bridge the gap between physical notes and digital clarity.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/phattar4phan/Inklyze" target="_blank" rel="noopener noreferrer" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-background/60 text-sm">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-background transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Showcase</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-background/60 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">GitHub Issues</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/40">
          <p>© 2026 phattar4phan. All rights reserved. A Stardance Project.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-background transition-colors">LICENSE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
