import { useState } from 'react';
import { ExternalLink, X, Expand } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import projects from '@/data/portfolio.json';

const categories = ['All', 'Mobile', 'Web'];

interface Project {
  images: string[];
  title: string;
  tech: string;
  company: string;
  description: string;
  category: string;
  link?: string;
}

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    if (project.images.length > 0) {
      setSelectedImage(project.images[0]);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedImage(null);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 relative"
      aria-labelledby="portfolio-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(185_85%_50%_/_0.03),transparent_60%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-51">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 id="portfolio-title" className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A selection of projects I've worked on over the years
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={`${project.title}-${index}`} delay={index * 50}>
              <div
                className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm mb-1">{project.tech}</p>
                  <p className="text-muted-foreground text-xs">{project.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div
              className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full md:w-1/2 p-6 flex flex-col">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background transition-colors z-10 md:hidden"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                <button
                  onClick={() => window.open(selectedImage || '', '_blank')}
                  className="absolute top-4 right-16 p-2 bg-background/80 rounded-full hover:bg-background transition-colors z-10 md:hidden"
                  aria-label="Open image fullscreen"
                >
                  <Expand size={20} />
                </button>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-primary font-medium mb-1">{selectedProject.tech}</p>
                  <p className="text-muted-foreground mb-4">{selectedProject.company}</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {selectedProject.description}
                  </p>
                </div>
                
                {selectedProject.images.length > 1 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.images.map((img, index) => (
                        <div
                          key={index}
                          className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 transition-colors ${
                            selectedImage === img ? 'border-primary' : 'border-transparent hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.title} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-auto">
                  {selectedProject.link && (
                    <button
                      onClick={() => window.open(selectedProject.link, '_blank')}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </button>
                  )}
                </div>
              </div>
              <div className="relative w-full md:w-1/2">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background transition-colors z-10 hidden md:block"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                <button
                  onClick={() => window.open(selectedImage || '', '_blank')}
                  className="absolute top-4 right-16 p-2 bg-background/80 rounded-full hover:bg-background transition-colors z-10 hidden md:block"
                  aria-label="Open image fullscreen"
                >
                  <Expand size={20} />
                </button>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={selectedImage || ''}
                    alt={selectedProject.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain md:rounded-r-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
