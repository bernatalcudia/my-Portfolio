import type { SkillsCategories } from '@/types';
import { Language } from '../contexts/LanguageContext';

const skillsCategoriesEs: SkillsCategories = {
    backend: {
        title: "Backend/Core",
        solid: ["Java", "Express.js", "Node.js"],
        learning: ["TypeScript", "Python"]
    },
    frontend: {
        title: "Frontend/UI",
        solid: ["HTML/CSS", "JavaScript", "React", "React Native", "Figma"],
        learning: ["Redux"]
    },
    database: {
        title: "Bases de Datos",
        solid: ["MongoDB", "SQL"],
        learning: ["Sequelize"]
    },
    tools: {
        title: "Herramientas & Metodologías",
        solid: ["Git", "Agile/Scrum", "Testing"],
        learning: ["Cypress", "Jest"]
    }
};

const skillsCategoriesEn: SkillsCategories = {
    backend: {
        title: "Backend/Core",
        solid: ["Java", "Express.js", "Node.js"],
        learning: ["TypeScript", "Python"]
    },
    frontend: {
        title: "Frontend/UI",
        solid: ["HTML/CSS", "JavaScript", "React", "React Native", "Figma"],
        learning: ["Redux"]
    },
    database: {
        title: "Databases",
        solid: ["MongoDB", "SQL"],
        learning: ["Sequelize"]
    },
    tools: {
        title: "Tools & Methodologies",
        solid: ["Git", "Agile/Scrum", "Testing"],
        learning: ["Cypress", "Jest"]
    }
};

export function getSkillsCategories(language: Language): SkillsCategories {
    return language === 'es' ? skillsCategoriesEs : skillsCategoriesEn;
}

export function getAllSkills(language: Language) {
    const categories = getSkillsCategories(language);
    return {
        solid: [
            ...categories.backend.solid,
            ...categories.frontend.solid,
            ...categories.database.solid,
            ...categories.tools.solid
        ],
        learning: [
            ...categories.backend.learning,
            ...categories.frontend.learning,
            ...categories.database.learning,
            ...categories.tools.learning
        ]
    };
}

// Export defaults for backward compatibility
export const skillsCategories = skillsCategoriesEs;
export const allSkills = getAllSkills('es');
