'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getSkillsCategories } from '@/lib/data/skills';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';

export default function SkillsPage() {
    const { language } = useLanguage();
    const t = useTranslations(language);
    const skillsCategories = getSkillsCategories(language);

    return (
        <Section>
            <SectionHeader
                title={t.pages.skills.title}
                subtitle={t.pages.skills.subtitle}
                centered
            />

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                {Object.entries(skillsCategories).map(([key, category]) => (
                    <Card key={key} variant="glass" className="space-y-6">
                        <h2 className="text-2xl font-semibold gradient-text">{category.title}</h2>

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 rounded-full bg-primary" />
                                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                                    {t.pages.skills.solidSkills}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.solid.map((skill) => (
                                    <Badge key={skill} variant="solid" className="text-base">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {category.learning.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-3 h-3 rounded-full bg-secondary" />
                                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                                        {t.pages.skills.learningSkills}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.learning.map((skill) => (
                                        <Badge key={skill} variant="learning" className="text-base">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Card>
                ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
                <Card variant="glass" className="text-center p-8">
                    <h3 className="text-xl font-semibold mb-4">
                        {language === 'es' ? 'Metodologías y Herramientas' : 'Methodologies and Tools'}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        {language === 'es'
                            ? 'Además de las tecnologías específicas, tengo experiencia trabajando con:'
                            : 'In addition to specific technologies, I have experience working with:'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Badge variant="solid">Agile/Scrum</Badge>
                        <Badge variant="solid">Git Version Control</Badge>
                        <Badge variant="solid">RESTful APIs</Badge>
                        <Badge variant="solid">Responsive Design</Badge>
                        <Badge variant="solid">Project Management</Badge>
                    </div>
                </Card>
            </div>
        </Section>
    );
}
