import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsPreview } from '@/components/sections/SkillsPreview';
import { ProjectsPreview } from '@/components/sections/ProjectsPreview';

export default function HomePage() {
    return (
        <>
            <Hero />
            <AboutSection />
            <SkillsPreview />
            <ProjectsPreview />
        </>
    );
}
