import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import certificates from '../data/certificates.json';

export const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="py-20 md:py-28 relative bg-gradient-to-b from-background via-secondary/20 to-background"
      aria-labelledby="certificates-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 id="certificates-title" className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Certificates</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 100}>
              <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors group h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {cert.logo ? (
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer} 
                        className="w-full h-full object-contain p-0 rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <Award size={24} className="text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Calendar size={14} />
                      {cert.year}
                    </span>
                    <h3 className="text-base font-semibold mb-2 leading-snug">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                    {cert.credentialCode && (
                      <p className="text-muted-foreground text-sm mb-3">Credential Code: {cert.credentialCode}</p>
                    )}
                    {cert.link !== '#' && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                      >
                        View Certificate
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
