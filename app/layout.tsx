import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LayoutContent } from '@/components/layout/LayoutContent';
import { LanguageProvider } from '@/lib/contexts/LanguageContext';


const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://bernatalcudia.dev'),
    title: {
        default: 'Bernat Alcudia | Full Stack Developer',
        template: '%s | Bernat Alcudia'
    },
    description: 'Desarrollador Full Stack Junior especializado en Java, JavaScript, React, MongoDB y el stack MERN. Portfolio de proyectos y experiencia profesional.',
    keywords: ['Full Stack Developer', 'React', 'Next.js', 'MongoDB', 'Java', 'JavaScript', 'MERN Stack', 'TypeScript', 'Node.js'],
    authors: [{ name: 'Bernat Alcudia', url: 'https://github.com/bernatalcudia' }],
    creator: 'Bernat Alcudia',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://bernatalcudia.dev',
        title: 'Bernat Alcudia | Full Stack Developer',
        description: 'Portfolio profesional de Bernat Alcudia - Desarrollador Full Stack',
        siteName: 'Bernat Alcudia Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bernat Alcudia | Full Stack Developer',
        description: 'Portfolio profesional de Bernat Alcudia - Desarrollador Full Stack',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-site-verification-code',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Bernat Alcudia',
        jobTitle: 'Full Stack Developer',
        url: 'https://bernatalcudia.dev',
        sameAs: [
            'https://github.com/bernatalcudia',
            'https://www.linkedin.com/in/bernatalcudiagrimaldos/',
        ],
        knowsAbout: [
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'MongoDB',
            'Java',
            'Full Stack Development',
        ],
    };

    return (
        <html lang="es" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen flex flex-col antialiased">
                <LanguageProvider>
                    <LayoutContent>{children}</LayoutContent>
                </LanguageProvider>
            </body>
        </html>
    );
}

