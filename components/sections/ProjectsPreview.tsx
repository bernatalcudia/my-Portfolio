'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getProjects } from '@/lib/data/projects';
import Link from 'next/link';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';

export function ProjectsPreview() {
    const { language } = useLanguage();
    const t = useTranslations(language);
    const projects = getProjects(language);
    const featuredProject = projects[0];

    return (
        <Section id="projects" className="bg-muted/30">
            <SectionHeader
                title={t.projects.title}
                subtitle={t.projects.subtitle}
                centered
            />

            <div className="max-w-4xl mx-auto">
                <Card variant="glass" className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{featuredProject.title}</h3>
                            <p className="text-sm text-muted-foreground">{featuredProject.period}</p>
                        </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                        {featuredProject.description}
                    </p>

                    <div>
                        <h4 className="font-semibold mb-3">
                            {language === 'es' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {featuredProject.technologies.map((tech) => (
                                <Badge key={tech} variant="solid">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">
                            {language === 'es' ? 'Logros Destacados' : 'Key Achievements'}
                        </h4>
                        <ul className="space-y-2">
                            {featuredProject.highlights.slice(0, 3).map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-muted-foreground">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-4 text-center">
                        <Link href="/experience">
                            <Button variant="outline">
                                {language === 'es' ? 'Ver Más Proyectos' : 'View More Projects'}
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </Section>
    );
}
