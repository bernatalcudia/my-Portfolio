'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { softSkills } from '@/lib/data/cv-data';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';

export function AboutSection() {
    const { language } = useLanguage();
    const t = useTranslations(language);

    return (
        <Section id="about" className="bg-muted/30">
            <SectionHeader
                title={t.about.title}
                subtitle={t.about.subtitle}
                centered
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="glass" className="space-y-4">
                    <h3 className="text-2xl font-semibold">{t.about.myStory}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {t.about.summary}
                    </p>
                    <ul className="space-y-2">
                        {t.about.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-muted-foreground">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </Card>

                <Card variant="glass" className="space-y-4">
                    <h3 className="text-2xl font-semibold">{t.about.softSkillsTitle}</h3>
                    <p className="text-muted-foreground">
                        {t.about.softSkillsDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {softSkills.map((skill) => (
                            <Badge key={skill} variant="solid">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </Card>
            </div>
        </Section>
    );
}
