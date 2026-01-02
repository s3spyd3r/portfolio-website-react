import { Helmet } from 'react-helmet-async';
import metadata from '@/data/metadata.json';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="theme-color" content={metadata.themeColor} />
        <link rel="canonical" href={metadata.canonical} />
        <script type="application/ld+json">
          {JSON.stringify(metadata.structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificatesSection />
          <PortfolioSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
