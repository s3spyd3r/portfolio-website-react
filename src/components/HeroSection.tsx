import { MapPin, Building2, Mail, Calendar, Briefcase, Linkedin, Github, Twitter, Facebook } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import profilePhoto from '@/assets/photo.png';
import profile from '@/data/profile.json';

const socialIconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  facebook: Facebook,
};

const infoIconMap = {
  Location: MapPin,
  Country: Building2,
  'E-mail': Mail,
  Birthday: Calendar,
};

const socialLinks = profile.socialLinks.map(social => ({
  ...social,
  icon: socialIconMap[social.name as keyof typeof socialIconMap],
}));

const infoItems = profile.infoItems.map(item => ({
  ...item,
  icon: infoIconMap[item.label as keyof typeof infoIconMap],
}));

export const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(185_85%_50%_/_0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(200_85%_45%_/_0.08),transparent_50%)]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Profile Image */}
              <ScrollReveal className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg">
                    <img
                      src={profilePhoto}
                      alt="Profile Photo"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                </div>
              </ScrollReveal>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <ScrollReveal delay={100}>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Hello
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                    I'm <span className="text-gradient">{profile.name}</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                    {profile.title}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-lg mx-auto lg:mx-0">
                    {infoItems.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-3 text-sm ${
                          item.label === 'E-mail' ? 'sm:col-span-2' : ''
                        }`}
                      >
                        <item.icon size={16} className="text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item.label}:</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-foreground truncate">{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Social Links */}
                <ScrollReveal delay={500}>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-80 transition-all hover:scale-105"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* About Text */}
            <ScrollReveal delay={600}>
              <div className="mt-8 pt-8 border-t border-border/50 text-center">
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
                  {profile.about}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
