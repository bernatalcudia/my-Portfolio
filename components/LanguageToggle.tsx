'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations(language);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Avoid flash of content without style
    if (!mounted) {
        return (
            <button
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted"
                aria-label="Toggle language"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors"
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
            <span className="text-sm font-semibold text-foreground">
                {language === 'es' ? 'EN' : 'ES'}
            </span>
        </button>
    );
}
