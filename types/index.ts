export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    languages: string[];
}

export interface Skill {
    name: string;
    level: 'solid' | 'learning';
}

export interface SkillCategory {
    title: string;
    solid: string[];
    learning: string[];
}

export interface SkillsCategories {
    backend: SkillCategory;
    frontend: SkillCategory;
    database: SkillCategory;
    tools: SkillCategory;
}

export interface Project {
    id: number;
    title: string;
    period: string;
    description: string;
    technologies: string[];
    highlights: string[];
}

export interface Experience {
    title: string;
    organization: string;
    period: string;
    description: string;
    achievements: string[];
    technologies?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    highlights: string[];
}

export interface AboutInfo {
    summary: string;
    highlights: string[];
}
