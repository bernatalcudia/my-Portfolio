'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function LayoutContent({ children }: { children: React.ReactNode }) {
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
