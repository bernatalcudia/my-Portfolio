import type { Project } from '@/types';
import { Language } from '../contexts/LanguageContext';

const projectsEs: Project[] = [
    {
        id: 1,
        title: "App MVP - Proyecto Full Stack",
        period: "Mar 2024 - Jun 2024",
        description: "Aplicación web completa desarrollada con el stack MERN, incluyendo autenticación de usuarios, gestión de datos y una interfaz de usuario moderna y responsive.",
        technologies: ["MongoDB", "Express.js", "React Native", "TypeScript", "Node.js", "JWT", "HTML/CSS", "JavaScript", "Mocha", "Chai", "Jest", "Zod"],
        highlights: [
            "Gestión completa del proyecto desde la planificación hasta el despliegue",
            "Implementación de autenticación segura con JSON Web Tokens (JWT)",
            "Diseño y gestión de base de datos NoSQL con MongoDB",
            "Desarrollo de API RESTful con Express.js",
            "Interfaz de usuario responsive con React Native",
            "Trabajo en equipo utilizando metodologías ágiles"
        ],
        githubUrl: "https://github.com/b00tc4mp/eurofirms-bootcamp-202402/issues/246"
    },
    {
        id: 2,
        title: "Portfolio Personal",
        period: "Dic 2024 - Presente",
        description: "Portfolio profesional desarrollado con Next.js 15, TypeScript y Tailwind CSS, implementando las mejores prácticas de seguridad y rendimiento.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zod"],
        highlights: [
            "Arquitectura con React Server Components para máximo rendimiento",
            "Implementación de headers de seguridad contra vulnerabilidades",
            "Diseño responsive y moderno con animaciones fluidas",
            "SEO optimizado con metadata dinámica",
            "Formulario de contacto con validación robusta"
        ],
        githubUrl: "https://github.com/bernatalcudia/my-Portfolio"
    }
];

const projectsEn: Project[] = [
    {
        id: 1,
        title: "MVP App - Full Stack Project",
        period: "Mar 2024 - Jun 2024",
        description: "Complete web application developed with the MERN stack, including user authentication, data management, and a modern, responsive user interface.",
        technologies: ["MongoDB", "Express.js", "React Native", "TypeScript", "Node.js", "JWT", "HTML/CSS", "JavaScript", "Mocha", "Chai", "Jest", "Zod"],
        highlights: [
            "Complete project management from planning to deployment",
            "Implementation of secure authentication with JSON Web Tokens (JWT)",
            "Design and management of NoSQL database with MongoDB",
            "Development of RESTful API with Express.js",
            "Responsive user interface with React Native",
            "Teamwork using agile methodologies"
        ],
        githubUrl: "https://github.com/b00tc4mp/eurofirms-bootcamp-202402/issues/246"
    },
    {
        id: 2,
        title: "Personal Portfolio",
        period: "Dec 2024 - Present",
        description: "Professional portfolio developed with Next.js 15, TypeScript and Tailwind CSS, implementing security and performance best practices.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zod"],
        highlights: [
            "Architecture with React Server Components for maximum performance",
            "Implementation of security headers against vulnerabilities",
            "Responsive and modern design with smooth animations",
            "Optimized SEO with dynamic metadata",
            "Contact form with robust validation"
        ],
        githubUrl: "https://github.com/bernatalcudia/my-Portfolio"
    }
];

export function getProjects(language: Language): Project[] {
    return language === 'es' ? projectsEs : projectsEn;
}

// Export default for backward compatibility
export const projects = projectsEs;
