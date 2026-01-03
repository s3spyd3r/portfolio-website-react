import { Linkedin, Github, Heart } from 'lucide-react';
import profile from '@/data/profile.json';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-gradient-to-t from-secondary/30 to-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-gradient mb-2">{profile.name}</p>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-1">
              © {currentYear} Made with <Heart size={14} className="text-primary" /> in {profile.infoItems.find(item => item.label === 'Country')?.value}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.socialLinks.find(item => item.name === 'linkedin')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={profile.socialLinks.find(item => item.name === 'github')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
