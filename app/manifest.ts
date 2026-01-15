import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Bernat Alcudia - Full Stack Developer',
        short_name: 'Bernat Alcudia',
        description: 'Portfolio profesional de Bernat Alcudia - Desarrollador Full Stack especializado en Java, JavaScript, React y MongoDB',
        start_url: '/',
        display: 'standalone',
        background_color: '#f5f5f5',
        theme_color: '#4F9CF9',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
