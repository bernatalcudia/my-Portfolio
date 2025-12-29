import type { Experience, Education } from '@/types';
import { Language } from '../contexts/LanguageContext';

const experiencesEs: Experience[] = [
    {
        title: "Bootcamp Full Stack Developer",
        organization: "Insert Empleo y Fundación Once",
        period: "Enero 2025 - Presente",
        description: "Formación intensiva en desarrollo web full stack con énfasis en tecnologías modernas y testing.",
        achievements: [
            "Sólida experiencia en HTML/CSS y JavaScript",
            "Aprendizaje de frameworks de testing (Cypress, Jest)",
            "Implementación de gestión de estado con Redux",
            "Trabajo con ORMs (Sequelize) para bases de datos"
        ],
        technologies: ["HTML/CSS", "JavaScript", "Cypress", "Sequelize", "Jest", "Redux"]
    },
    {
        title: "Bootcamp Full Stack Developer",
        organization: "Eurofirms Nexus",
        period: "Marzo 2024 - Junio 2024",
        description: "Desarrollo de aplicaciones web utilizando el stack MERN y metodologías ágiles.",
        achievements: [
            "Creación de App MVP de Proyecto completa",
            "Gestión de proyectos con metodologías ágiles",
            "Aprendizaje del stack MERN (MongoDB, Express.js, React, Node.js)",
            "Implementación de autenticación con JWT",
            "Control y gestión de bases de datos NoSQL"
        ],
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "HTML/CSS", "JavaScript"]
    }
];

const experiencesEn: Experience[] = [
    {
        title: "Full Stack Developer Bootcamp",
        organization: "Insert Empleo y Fundación Once",
        period: "January 2025 - Present",
        description: "Intensive training in full stack web development with emphasis on modern technologies and testing.",
        achievements: [
            "Solid experience in HTML/CSS and JavaScript",
            "Learning testing frameworks (Cypress, Jest)",
            "Implementation of state management with Redux",
            "Working with ORMs (Sequelize) for databases"
        ],
        technologies: ["HTML/CSS", "JavaScript", "Cypress", "Sequelize", "Jest", "Redux"]
    },
    {
        title: "Full Stack Developer Bootcamp",
        organization: "Eurofirms Nexus",
        period: "March 2024 - June 2024",
        description: "Development of web applications using the MERN stack and agile methodologies.",
        achievements: [
            "Creation of complete MVP Project App",
            "Project management with agile methodologies",
            "Learning the MERN stack (MongoDB, Express.js, React, Node.js)",
            "Implementation of authentication with JWT",
            "Control and management of NoSQL databases"
        ],
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "HTML/CSS", "JavaScript"]
    }
];

const educationEs: Education[] = [
    {
        degree: "1º Desarrollo de Aplicaciones Multiplataforma (DAM)",
        institution: "Centro Educativo Xúquer",
        period: "2021-2022",
        highlights: [
            "Aprendizaje de Java",
            "Metodologías Scrum",
            "Gestión de control de versiones Git",
            "Gestión de bases de datos SQL",
            "Lenguajes de marcado"
        ]
    },
    {
        degree: "Técnico Superior en Microinformática y Redes (TSMR)",
        institution: "Centro Educativo Xúquer",
        period: "2017-2019",
        highlights: [
            "Gestión de sistemas operativos",
            "Virtualización de sistemas operativos",
            "Reparación de software y hardware informático",
            "Gestión e instalación de redes"
        ]
    }
];

const educationEn: Education[] = [
    {
        degree: "1st Year Multiplatform Application Development (DAM)",
        institution: "Centro Educativo Xúquer",
        period: "2021-2022",
        highlights: [
            "Java learning",
            "Scrum methodologies",
            "Git version control management",
            "SQL database management",
            "Markup languages"
        ]
    },
    {
        degree: "Higher Technician in Microcomputing and Networks (TSMR)",
        institution: "Centro Educativo Xúquer",
        period: "2017-2019",
        highlights: [
            "Operating systems management",
            "Operating systems virtualization",
            "Computer software and hardware repair",
            "Network management and installation"
        ]
    }
];

export function getExperiences(language: Language): Experience[] {
    return language === 'es' ? experiencesEs : experiencesEn;
}

export function getEducation(language: Language): Education[] {
    return language === 'es' ? educationEs : educationEn;
}

// Export defaults for backward compatibility
export const experiences = experiencesEs;
export const education = educationEs;
