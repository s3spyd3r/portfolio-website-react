import { Briefcase, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import experiences from '@/data/experiences.json';

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative bg-gradient-to-b from-background via-secondary/20 to-background"
      aria-labelledby="experience-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 id="experience-title" className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over a decade of professional software development
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border hidden md:block" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={`${exp.company}-${exp.period}`} delay={index * 100}>
              <div className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Period badge - desktop */}
                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium h-fit mt-8">
                    {exp.period}
                  </span>
                </div>

                {/* Content card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                    {/* Period badge - mobile */}
                    <span className="md:hidden inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                      {exp.period}
                    </span>

                    <div className="flex items-start gap-4 mb-4">
                      {exp.logo ? (
                        <img src={exp.logo} alt={`${exp.company} logo`} className="w-12 h-12 rounded-xl object-cover" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase size={24} className="text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">{exp.company}</h3>
                        <p className="text-primary font-medium text-sm">{exp.role}</p>
                        {exp.location && (
                          <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                            <MapPin size={12} />
                            {exp.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
