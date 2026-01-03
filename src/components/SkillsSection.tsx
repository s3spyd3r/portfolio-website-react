import { Smartphone, Server, Globe } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from './ScrollReveal';
import skillsData from '@/data/skills.json';

const iconMap = {
  Smartphone,
  Server,
  Globe,
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative"
      aria-labelledby="skills-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(185_85%_50%_/_0.03),transparent_60%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 id="skills-title" className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A decade of experience crafting mobile and web solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Skill Cards */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillsData.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <div
                key={skill.title}
                className="glass-card rounded-xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </StaggerReveal>

        {/* All Technologies */}
        <ScrollReveal>
          <div className="text-center">
            <h3 className="text-lg font-medium mb-6 text-muted-foreground">Technologies I work with</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skillsData.allTechBadges.map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
