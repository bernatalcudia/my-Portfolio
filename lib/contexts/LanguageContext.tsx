'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('es');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load language from localStorage or browser preference
        const savedLanguage = localStorage.getItem('language') as Language | null;
        const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
        const initialLanguage = savedLanguage || browserLanguage;

        // Only update if different from default to avoid unnecessary re-renders
        setLanguageState((current) => {
            if (initialLanguage !== current) {
                document.documentElement.lang = initialLanguage;
                return initialLanguage;
            }
            return current;
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (mounted) {
            localStorage.setItem('language', lang);
            // Update HTML lang attribute for SEO
            document.documentElement.lang = lang;
        }
    };

    const toggleLanguage = () => {
        const newLanguage = language === 'es' ? 'en' : 'es';
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
