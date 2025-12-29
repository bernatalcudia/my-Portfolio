'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getSkillsCategories } from '@/lib/data/skills';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';

export function SkillsPreview() {
    const { language } = useLanguage();
    const t = useTranslations(language);
    const skillsCategories = getSkillsCategories(language);

    const featuredSkills = [
        ...skillsCategories.frontend.solid.slice(0, 4),
        ...skillsCategories.backend.solid.slice(0, 3),
        ...skillsCategories.database.solid,
    ];

    return (
        <Section id="skills">
            <SectionHeader
                title={t.skills.title}
                subtitle={t.skills.subtitle}
                centered
            />

            <div className="max-w-4xl mx-auto">
                <Card variant="glass" className="text-center space-y-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {featuredSkills.map((skill) => (
                            <Badge key={skill} variant="solid" className="text-base px-4 py-2">
                                {skill}
                            </Badge>
                        ))}
                    </div>

                    <div className="pt-4">
                        <Link href="/skills">
                            <Button variant="outline">
                                {language === 'es' ? 'Ver Todas las Habilidades' : 'View All Skills'}
                            </Button>
                        </Link>
                    </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <Card hover={false} className="text-center p-8">
                        <div className="text-4xl font-bold text-primary mb-2">
                            {skillsCategories.frontend.solid.length + skillsCategories.backend.solid.length +
                                skillsCategories.database.solid.length + skillsCategories.tools.solid.length}+
                        </div>
                        <p className="text-muted-foreground">
                            {language === 'es' ? 'Tecnologías Dominadas' : 'Mastered Technologies'}
                        </p>
                    </Card>

                    <Card hover={false} className="text-center p-8">
                        <div className="text-4xl font-bold text-secondary mb-2">
                            {skillsCategories.frontend.learning.length + skillsCategories.backend.learning.length +
                                skillsCategories.database.learning.length + skillsCategories.tools.learning.length}+
                        </div>
                        <p className="text-muted-foreground">
                            {language === 'es' ? 'En Aprendizaje Activo' : 'Actively Learning'}
                        </p>
                    </Card>
                </div>
            </div>
        </Section>
    );
}
