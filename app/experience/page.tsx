'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getExperiences, getEducation } from '@/lib/data/experience';
import { getProjects } from '@/lib/data/projects';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';

export default function ExperiencePage() {
    const { language } = useLanguage();
    const t = useTranslations(language);
    const experiences = getExperiences(language);
    const projects = getProjects(language);
    const education = getEducation(language);

    return (
        <>
            <Section>
                <SectionHeader
                    title={t.pages.experiencePage.professionalExperience}
                    subtitle={t.pages.experiencePage.subtitle}
                    centered
                />

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <Card key={index} variant="glass" className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                                    <p className="text-lg text-primary font-medium">{exp.organization}</p>
                                </div>
                                <span className="text-sm text-muted-foreground font-medium px-3 py-1 bg-primary/10 rounded-full w-fit">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {exp.description}
                            </p>

                            <div>
                                <h4 className="font-semibold mb-2">{t.pages.experiencePage.achievements}:</h4>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-muted-foreground">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {exp.technologies && (
                                <div>
                                    <h4 className="font-semibold mb-3">{t.pages.experiencePage.technologies}:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech} variant="solid">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-muted/30">
                <SectionHeader
                    title={t.pages.experiencePage.projects}
                    subtitle={language === 'es' ? 'Trabajos destacados y aplicaciones desarrolladas' : 'Featured work and developed applications'}
                    centered
                />

                <div className="max-w-4xl mx-auto space-y-8">
                    {projects.map((project) => (
                        <Card key={project.id} variant="glass" className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
                                        </a>
                                    )}
                                </div>
                                <span className="text-sm text-muted-foreground font-medium px-3 py-1 bg-secondary/10 rounded-full w-fit">
                                    {project.period}
                                </span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>

                            <div>
                                <h4 className="font-semibold mb-3">{t.pages.experiencePage.technologies}:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="solid">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">
                                    {language === 'es' ? 'Características Destacadas:' : 'Key Features:'}
                                </h4>
                                <ul className="space-y-2">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-muted-foreground">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    title={t.pages.about.education}
                    subtitle={language === 'es' ? 'Educación y certificaciones' : 'Education and certifications'}
                    centered
                />

                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <Card key={index} variant="glass" className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <p className="text-primary font-medium">{edu.institution}</p>
                                </div>
                                <span className="text-sm text-muted-foreground font-medium px-3 py-1 bg-accent/10 rounded-full w-fit">
                                    {edu.period}
                                </span>
                            </div>

                            <ul className="grid md:grid-cols-2 gap-2">
                                {edu.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-muted-foreground text-sm">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
}
