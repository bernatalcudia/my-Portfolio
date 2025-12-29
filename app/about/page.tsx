'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { personalInfo } from '@/lib/data/cv-data';
import { getExperiences, getEducation } from '@/lib/data/experience';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';

export default function AboutPage() {
    const { language } = useLanguage();
    const t = useTranslations(language);
    const experiences = getExperiences(language);
    const education = getEducation(language);

    return (
        <>
            <Section>
                <SectionHeader
                    title={t.pages.about.title}
                    subtitle={t.pages.about.subtitle}
                    centered
                />

                <div className="max-w-4xl mx-auto space-y-8">
                    <Card variant="glass" className="space-y-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
                            <p className="text-xl text-primary font-medium">{personalInfo.title}</p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground leading-relaxed text-center">
                                {t.about.summary}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 pt-4">
                            {personalInfo.languages.map((lang) => (
                                <div key={lang} className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                                    <svg className="w-8 h-8 mx-auto mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                    <p className="font-medium">{lang}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card variant="glass" className="space-y-4">
                            <h2 className="text-2xl font-semibold gradient-text">{t.pages.about.myStrengths}</h2>
                            <ul className="space-y-3">
                                {t.about.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-muted-foreground">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card variant="glass" className="space-y-4">
                            <h2 className="text-2xl font-semibold gradient-text">{t.pages.about.experience}</h2>
                            <div className="space-y-4">
                                {experiences.slice(0, 2).map((exp, index) => (
                                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                                        <p className="font-semibold">{exp.organization}</p>
                                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <Card variant="glass" className="space-y-4">
                        <h2 className="text-2xl font-semibold gradient-text">{t.pages.about.education}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {education.map((edu, index) => (
                                <div key={index} className="space-y-2">
                                    <h3 className="font-semibold">{edu.degree}</h3>
                                    <p className="text-sm text-primary">{edu.institution}</p>
                                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </Section>
        </>
    );
}
