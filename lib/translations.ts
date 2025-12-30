import { Language } from './contexts/LanguageContext';

export const translations = {
    es: {
        // Navigation
        nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            skills: 'Habilidades',
            experience: 'Experiencia',
            contact: 'Contacto',
        },
        // Hero Section
        hero: {
            greeting: 'Hola, soy',
            specializedIn: 'Especializado en',
            and: 'y el',
            description: 'Apasionado por crear experiencias web excepcionales.',
            contactButton: 'Contáctame',
            projectsButton: 'Ver Proyectos',
            downloadCV: 'Descargar CV',
        },
        // About Section
        about: {
            title: 'Sobre Mí',
            subtitle: 'Conoce más sobre mi trayectoria y habilidades',
            myStory: 'Mi Historia',
            summary: 'Desarrollador Full Stack Junior con formación en maquetación web y desarrollo de aplicaciones. Poseo sólidos conocimientos en Java, JavaScript y bases de datos NoSQL (MongoDB), además de experiencia en el uso de frameworks como React y React Native.',
            highlights: [
                'Sólidos conocimientos en Java, JavaScript y MongoDB',
                'Experiencia con React y React Native',
                'Metodologías Ágiles y control de versiones (Git)',
                'Enfoque en trabajo en equipo y gestión de proyectos'
            ],
            softSkillsTitle: 'Habilidades Blandas',
            softSkillsDescription: 'Además de mis habilidades técnicas, cuento con competencias que me permiten trabajar eficazmente en equipo y gestionar proyectos.',
        },
        // Skills Section
        skills: {
            title: 'Habilidades',
            subtitle: 'Tecnologías y herramientas con las que trabajo',
            frontend: 'Frontend',
            backend: 'Backend',
            databases: 'Bases de Datos',
            tools: 'Herramientas',
        },
        // Projects Section
        projects: {
            title: 'Proyectos',
            subtitle: 'Algunos de mis trabajos recientes',
            viewAll: 'Ver Todos los Proyectos',
        },
        // Contact Section
        contact: {
            title: 'Contacto',
            subtitle: 'Ponte en contacto conmigo',
            name: 'Nombre',
            namePlaceholder: 'Tu nombre completo',
            email: 'Correo Electrónico',
            emailPlaceholder: 'tu@email.com',
            message: 'Mensaje',
            messagePlaceholder: 'Cuéntame sobre tu proyecto o consulta...',
            send: 'Enviar Mensaje',
            sending: 'Enviando...',
            success: '¡Mensaje enviado con éxito! Te responderé pronto.',
            error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        },
        // Footer
        footer: {
            contact: 'Contacto',
            followMe: 'Sígueme',
            rights: 'Todos los derechos reservados.',
        },
        // Theme Toggle
        theme: {
            toggleTo: 'Cambiar a modo',
            light: 'claro',
            dark: 'oscuro',
        },
        // Language Toggle
        language: {
            toggleTo: 'Switch to',
            spanish: 'Español',
            english: 'English',
        },
        // Pages
        pages: {
            about: {
                title: 'Sobre Mí',
                subtitle: 'Mi trayectoria profesional y formación',
                myStrengths: 'Mis Fortalezas',
                experience: 'Experiencia',
                education: 'Formación Académica',
                downloadCV: 'Descargar CV',
            },
            skills: {
                title: 'Habilidades Técnicas',
                subtitle: 'Tecnologías y herramientas que domino',
                solidSkills: 'Tecnologías Dominadas',
                learningSkills: 'En Aprendizaje',
            },
            experiencePage: {
                title: 'Experiencia',
                subtitle: 'Mi trayectoria profesional y proyectos',
                projects: 'Proyectos',
                professionalExperience: 'Experiencia Profesional',
                technologies: 'Tecnologías',
                achievements: 'Logros',
            },
            contact: {
                title: 'Contacto',
                subtitle: 'Ponte en contacto conmigo',
                getInTouch: 'Ponte en Contacto',
                description: 'Estoy disponible para nuevas oportunidades y proyectos. No dudes en contactarme.',
            },
        },
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            contact: 'Contact',
        },
        // Hero Section
        hero: {
            greeting: 'Hi, I\'m',
            specializedIn: 'Specialized in',
            and: 'and the',
            description: 'Passionate about creating exceptional web experiences.',
            contactButton: 'Contact Me',
            projectsButton: 'View Projects',
            downloadCV: 'Download CV',
        },
        // About Section
        about: {
            title: 'About Me',
            subtitle: 'Learn more about my background and skills',
            myStory: 'My Story',
            summary: 'Junior Full Stack Developer with training in web layout and application development. I have solid knowledge in Java, JavaScript and NoSQL databases (MongoDB), as well as experience using frameworks such as React and React Native.',
            highlights: [
                'Solid knowledge in Java, JavaScript and MongoDB',
                'Experience with React and React Native',
                'Agile Methodologies and version control (Git)',
                'Focus on teamwork and project management'
            ],
            softSkillsTitle: 'Soft Skills',
            softSkillsDescription: 'In addition to my technical skills, I have competencies that allow me to work effectively in teams and manage projects.',
        },
        // Skills Section
        skills: {
            title: 'Skills',
            subtitle: 'Technologies and tools I work with',
            frontend: 'Frontend',
            backend: 'Backend',
            databases: 'Databases',
            tools: 'Tools',
        },
        // Projects Section
        projects: {
            title: 'Projects',
            subtitle: 'Some of my recent work',
            viewAll: 'View All Projects',
        },
        // Contact Section
        contact: {
            title: 'Contact',
            subtitle: 'Get in touch with me',
            name: 'Name',
            namePlaceholder: 'Your full name',
            email: 'Email',
            emailPlaceholder: 'your@email.com',
            message: 'Message',
            messagePlaceholder: 'Tell me about your project or inquiry...',
            send: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully! I will respond soon.',
            error: 'Error sending message. Please try again.',
        },
        // Footer
        footer: {
            contact: 'Contact',
            followMe: 'Follow Me',
            rights: 'All rights reserved.',
        },
        // Theme Toggle
        theme: {
            toggleTo: 'Switch to',
            light: 'light',
            dark: 'dark',
        },
        // Language Toggle
        language: {
            toggleTo: 'Cambiar a',
            spanish: 'Español',
            english: 'English',
        },
        // Pages
        pages: {
            about: {
                title: 'About Me',
                subtitle: 'My professional background and education',
                myStrengths: 'My Strengths',
                experience: 'Experience',
                education: 'Education',
                downloadCV: 'Download CV',
            },
            skills: {
                title: 'Technical Skills',
                subtitle: 'Technologies and tools I master',
                solidSkills: 'Mastered Technologies',
                learningSkills: 'Currently Learning',
            },
            experiencePage: {
                title: 'Experience',
                subtitle: 'My professional journey and projects',
                projects: 'Projects',
                professionalExperience: 'Professional Experience',
                technologies: 'Technologies',
                achievements: 'Achievements',
            },
            contact: {
                title: 'Contact',
                subtitle: 'Get in touch with me',
                getInTouch: 'Get in Touch',
                description: 'I am available for new opportunities and projects. Feel free to contact me.',
            },
        },
    },
};

export function useTranslations(language: Language) {
    return translations[language];
}
