import { GraduationCap, Calendar } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import educationData from '@/data/education.json';

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 md:py-28 relative"
      aria-labelledby="education-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 id="education-title" className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic background and continuous learning
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <ScrollReveal key={item.degree} delay={index * 100}>
              <div className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex-shrink-0">
                    {item.logo ? (
                      <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full rounded-xl object-cover" />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <GraduationCap size={28} className="text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{item.degree}</h3>
                      <span className="flex items-center gap-2 text-primary text-sm font-medium">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.institution}</p>
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
