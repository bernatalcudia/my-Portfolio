import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
    title: {
        default: 'Bernat Alcudia | Full Stack Developer',
        template: '%s | Bernat Alcudia'
    },
    description: 'Desarrollador Full Stack Junior especializado en Java, JavaScript, React, MongoDB y el stack MERN. Portfolio de proyectos y experiencia profesional.',
    keywords: ['Full Stack Developer', 'React', 'Next.js', 'MongoDB', 'Java', 'JavaScript', 'MERN Stack', 'TypeScript', 'Node.js'],
    authors: [{ name: 'Bernat Alcudia', url: 'https://github.com/bernatalcudia' }],
    creator: 'Bernat Alcudia',
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
};

'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
    const { language } = useLanguage();

    // Update document lang attribute when language changes
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <>
            {/* Skip to main content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
            >
                Saltar al contenido principal / Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <body className="min-h-screen flex flex-col antialiased">
                <LanguageProvider>
                    <LayoutContent>{children}</LayoutContent>
                </LanguageProvider>
            </body>
        </html>
    );
}
